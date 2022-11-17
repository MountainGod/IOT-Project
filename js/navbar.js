function insertNavbar(activeTab) {
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
		<a class="nav-link${activeTab === "Home" ? " active" : ""}" href="/IOT-Project/">Home</a>
		<!-- "Connect" dropdown -->
		<div class="nav-item dropdown">
		<!-- Dropdown toggle -->
		<a class="nav-link${activeTab === "Connect" ? " active" : ""} dropdown-toggle" href="#" id="navbarDropdown" role="button"
		   data-bs-toggle="dropdown">
		Connect
		</a>
		<!-- Dropdown menu -->
		<ul class="dropdown-menu dropdown-menu-dark">
		<li>
		<a class="dropdown-item${activeTab === "Log In" ? " active" : ""}" href="/IOT-Project/login/">Log In</a>
		</li>
		<li>
		<a class="dropdown-item${activeTab === "Sign Up" ? " active" : ""}" href="/IOT-Project/sign-up/">Sign Up</a>
		</li>
		<li>
		<hr class="dropdown-divider">
		</li>
		<li>
		<a class="dropdown-item${activeTab === "Admin Access" ? " active" : ""}" href="/IOT-Project/admin/">
		<i class="bi bi-key-fill"></i> Admin Access
		</a>
		</li>
		</ul>
		</div>
		<!-- Log Off - only visible when logged in -->
		<form class="nav-item" id="logOffForm" hidden>
		<button type="button" class="btn btn-outline-danger"
		        onclick="logOff(); this.parentElement.hidden = true;">
		Log Off
		</button>
		</form>
		</div>
		<!-- Spacer -->
		<div class="navbar-nav mx-auto"></div>
		<div class="navbar-nav">
		<!-- Contact Us -->
		<a class="nav-link${activeTab === "Contact Us" ? " active" : ""}" href="/IOT-Project/contact/">Contact Us</a>
		<!-- About -->
		<a class="nav-link${activeTab === "About" ? " active" : ""}" href="/IOT-Project/about/">About</a>
		</div>
		</div>
		</div>
		`;
}


insertNavbar(document.title);
