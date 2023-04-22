const resultText = document.getElementById("resultText");
const canvas     = document.getElementById("streamCanvas");
const img        = document.getElementById("camStream");
const video      = document.getElementById("videoStream");
const ctx        = canvas.getContext("2d");

let model;
let stopFlag         = false;
let measuredDistance = -1;
const FPS            = 1000 / 30; // 30 FPS in ms

/**
 * Calculates the real-world distance of two facial landmarks.
 * @param x first landmark
 * @param y second landmark
 * @returns {number} the distance between the landmarks in centimeters
 */
function getDistanceInCM(x, y) {
	return Math.hypot(x, y) / 6;
}

/**
 * Loads the MediaPipe face landmark model, with a max of 1 face.
 * @returns {Promise<*>} fulfills when the model is done loading.
 */
async function loadFaceLandmarkDetectionModel() {
	return faceLandmarksDetection
	.load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
	      {maxFaces: 1});
}

/**
 * Uses the face landmark model to get the position of the upper and lower lip landmark.
 * After calculating the distance, it writes it to the resultText element.
 * @returns {Promise<void>} ignore
 */
async function calculateDistance() {
	const predictions = await model.estimateFaces({
		                                              input:          video,
		                                              returnTensors:  false,
		                                              flipHorizontal: false,
		                                              predictIrises:  false,
	                                              });
	
	if (predictions.length > 0) {
		predictions.forEach(prediction => {
			const keyPoints = prediction.mesh; // 13 and 14 are the relevant ones, with 13 being the top lip
			const UPPER_LIP = 13;
			const LOWER_LIP = 14;
			
			measuredDistance       = getDistanceInCM(
				keyPoints[UPPER_LIP][0] - keyPoints[LOWER_LIP][0],
				keyPoints[UPPER_LIP][1] - keyPoints[LOWER_LIP][1],
			);
			// convert floating point number to rounded string
			resultText.textContent = (+measuredDistance.toFixed(1)).toString();
		});
	}
	
	if (stopFlag) {
		stopFlag = false;
	}
	else {
		setTimeout(calculateDistance, FPS);
	}
}

// Modal code
const closeModalBtn   = document.getElementById("closeModalBtn");
const startPredictBtn = document.getElementById("startPredictBtn");
const stopPredictBtn  = document.getElementById("stopPredictBtn");

// Make Canvas show the camera stream
video.addEventListener("playing", function () {
	let canvasParentH, canvasParentW, canvasH, canvasW;
	
	// original video aspect ratio
	let vidRatio        = video.videoWidth / video.videoHeight;
	let vidReverseRatio = 1 / vidRatio;
	
	let $this = this; //cache
	(function loop() {
		if (!$this.paused && !$this.ended) {
			// The maximum area the canvas can expand
			canvasParentH = canvas.parentElement.clientHeight;
			canvasParentW = canvas.parentElement.clientWidth;
			
			// Calculate how much the canvas can expand while keeping the original aspect ratio
			if (canvasParentW * vidReverseRatio > canvasParentH) {
				canvasW = canvasParentH * vidRatio;
				canvasH = canvasParentH;
			}
			else if (canvasParentH * vidRatio > canvasParentW) {
				canvasH = canvasParentW * vidReverseRatio;
				canvasW = canvasParentW;
			}
			else {
				canvasW = canvasParentW;
				canvasH = canvasParentH;
			}
			
			// Set canvas dimensions
			canvas.style.height = `${canvasH}px`;
			canvas.style.width  = `${canvasW}px`;
			canvas.height       = canvasH;
			canvas.width        = canvasW;
			
			ctx.drawImage($this, 0, 0, canvas.clientWidth, canvas.clientHeight);
			
			setTimeout(loop, FPS); // Drawing at the desired FPS
		}
	})();
});
startPredictBtn.addEventListener("click", async () => {
	model = await loadFaceLandmarkDetectionModel();
	calculateDistance();
	
	stopPredictBtn.hidden  = false;
	startPredictBtn.hidden = true;
});

stopPredictBtn.addEventListener("click", () => {
	stopFlag               = true;
	stopPredictBtn.hidden  = true;
	startPredictBtn.hidden = false;
	
});

closeModalBtn.addEventListener("click", () => {
	stopFlag               = true;
	stopPredictBtn.hidden  = true;
	startPredictBtn.hidden = false;
});
