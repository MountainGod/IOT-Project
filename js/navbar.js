import {logOff, isLoggedIn} from "./auth";

/**
 * @author <a href="mailto:mountaingodrays@gmail.com">Harel Karni</a>
 * @fileOverview Contains functions for navbar.
 */

function insertNavbar(activeTab) {
	activeTab = activeTab.toLowerCase();
	
	document.getElementById("navbarMain").innerHTML =
		`
		<div class="container-fluid">
            <!-- Logo -->
            <a class="navbar-brand" href="/IOT-Project/" id="nav-logo">
                <img src="/IOT-Project/img/logo.svg" alt="logo" height="50rem">
            </a>
            
            <!-- Toggle Icon -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <!-- Toggleable Content -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Button section -->
                <div class="navbar-nav">
                    <!-- Home -->
                    <a class="nav-link${activeTab === "home" ? " active" : ""}" href="/IOT-Project/">Home</a>
					<!-- Cameras -->
                    <a class="nav-link disabled${activeTab === "cameras" ? " active" : ""}" href="/IOT-Project/cameras/"
                       id="camNavLink">
                       Cameras
                    </a>
                    <!-- "Connect" dropdown -->
                    <div class="nav-item dropdown">
                        <!-- Connect Dropdown toggle -->
                        <a class="nav-link${activeTab === "log in" || activeTab === "sign up" ? " active" : ""} dropdown-toggle"
                                href="#" id="connectDropdownButton" role="button" data-bs-toggle="dropdown">Connect</a>
                        <!-- Connect Dropdown menu -->
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a class="dropdown-item${activeTab === "log In" ? " active" : ""}" href="/IOT-Project/login/">Log In</a>
                            </li>
                            <li>
                                <a class="dropdown-item${activeTab === "sign Up" ? " active" : ""}" href="/IOT-Project/sign-up/">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                    <!-- Log Off - only visible when logged in -->
                    <form class="nav-item" id="logOffForm" action="/IOT-Project/" hidden>
                        <button type="button" class="btn btn-outline-danger" id="logOffBtn">
                            Log Off
                        </button>
                    </form>
                </div>
                <!-- Spacer -->
                <div class="navbar-nav mx-auto"></div>
                <div class="navbar-nav">
                    <!-- Contact Us -->
                    <a class="nav-link${activeTab === "contact us" ? " active" : ""}" href="/IOT-Project/contact/">Contact Us</a>
                    <!-- About -->
                    <a class="nav-link${activeTab === "about" ? " active" : ""}" href="/IOT-Project/about/">About</a>
                </div>
            </div>
		</div>
		`;
}

insertNavbar(document.title);

const connectDropdownBtn = document.getElementById("connectDropdownButton");
const logOffForm         = document.getElementById("logOffForm");
const logOffBtn          = document.getElementById("logOffBtn");
const camNavLink         = document.getElementById("camNavLink");

logOffBtn.addEventListener("click", function () {
	logOff().then(() => {
		logOffBtn.hidden = true;
		connectDropdownBtn.classList.remove("disabled");
		camNavLink.classList.add("disabled");
		if (document.title.toLowerCase() === "cameras") {
			logOffForm.submit();
		}
	});
	
});

/**
 * When a user is logged in:
 * Cameras link is functional, log off button shown, connect dropdown disabled.
 * When no user is logged in, the opposite is true.
 */
if (isLoggedIn()) {
	logOffForm.hidden = false;
	connectDropdownBtn.classList.add("disabled");
	camNavLink.classList.remove("disabled");
}
