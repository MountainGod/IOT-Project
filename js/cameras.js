import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, child, get} from "firebase/database";
import {getUserID} from "./auth";

import firebaseConfig from "./firebaseConfig.json";

// Initialize Firebase
const app      = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const dbRef    = ref(database);

// Database paths
const p_user       = `/users/${getUserID()}`;
const p_camera     = "/cameras";
const p_cameraData = "/cameras/data";

/**
 * Get the IP of a camera
 * @param camID the queried camera
 * @returns {Promise<DataSnapshot>} resolves with the IP as a string
 */
async function getCamIP(camID) {
	return await get(child(dbRef, p_camera + `/${camID}/UID`))
	.then((snapshot) => {
		if (snapshot.exists()) {
			return get(child(dbRef, p_cameraData + `/${snapshot.val()}/ip`))
			.then((snapshot) => {
				if (snapshot.exists()) {
					return snapshot.val();
				}
			});
		}
	});
}

/**
 * Create a button for a camera
 * @param camID the ID of the camera
 */
function createCamButton(camID) {
	const cameraSelectionRow = document.getElementById("cameraSelectionRow");
	
	let newCamCol = document.createElement("div");
	newCamCol.classList.add("col-4");
	
	let newCamRatio = document.createElement("div");
	newCamRatio.classList.add("ratio", "ratio-1x1");
	
	let newCamBtn = document.createElement("button");
	newCamBtn.classList.add("btn", "btn-outline-info", "rounded-circle", "fs-1", "fw-bold");
	newCamBtn.type = "button";
	newCamBtn.setAttribute("data-bs-toggle", "modal");
	newCamBtn.setAttribute("data-bs-target", "#camModal");
	newCamBtn.id        = `camBtn${camID}`;
	newCamBtn.innerText = `Camera ${camID}`;
	
	newCamBtn.addEventListener("click", () => {
		const modalTitle = document.getElementById("camModalTitle");
		const modalFrame = document.getElementById("camFrame");
		
		modalTitle.innerText = "Camera " + camID;
		getCamIP(camID)
		.then((result) => {
			modalFrame.src = "http://" + result + ":81/stream";
		});
	});
	
	newCamRatio.appendChild(newCamBtn);
	newCamCol.appendChild(newCamRatio);
	cameraSelectionRow.appendChild(newCamCol);
}

/**
 * Load all cameras for the current logged in user.
 */
function loadCameras() {
	get(child(dbRef, p_user + "/camera"))
	.then((snapshot) => {
		if (snapshot.exists()) {
			const camID = snapshot.val();
			createCamButton(camID);
		}
	}).catch((error) => {
		console.error(error);
	});
}

// Page specific code
const addCamBtn  = document.getElementById("addCamBtn");
const camIDField = document.getElementById("camID");

addCamBtn.addEventListener("click", () => {
	set(ref(database, p_user), {camera: camIDField.value})
	.then(() => {
		loadCameras();
	});
});

// should be done on load
loadCameras();
