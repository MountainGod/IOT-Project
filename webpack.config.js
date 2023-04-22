const path = require("path");

const devMode = "development";

module.exports = [
	{
		name:    "auth",
		entry:   "./js/auth.js",
		output:  {
			path:     path.resolve(__dirname, "dist"),
			filename: "auth.bundle.js",
		},
		devtool: "eval-source-map",
		mode:    devMode,
	},
	{
		name:    "navbar",
		entry:   "./js/navbar.js",
		output:  {
			path:     path.resolve(__dirname, "dist"),
			filename: "navbar.bundle.js",
		},
		devtool: "eval-source-map",
		mode:    devMode,
	},
	{
		name:    "contact",
		entry:   "./js/contact.js",
		output:  {
			path:     path.resolve(__dirname, "dist"),
			filename: "contact.bundle.js",
		},
		devtool: "eval-source-map",
		mode:    devMode,
	},
	{
		name:    "shared",
		entry:   "./js/shared.js",
		output:  {
			path:     path.resolve(__dirname, "dist"),
			filename: "shared.bundle.js",
		},
		devtool: "eval-source-map",
		mode:    devMode,
	},
	{
		name:    "cameras",
		entry:   "./js/cameras.js",
		output:  {
			path:     path.resolve(__dirname, "dist"),
			filename: "cameras.bundle.js",
		},
		devtool: "eval-source-map",
		mode:    devMode,
	},
	{
		name:    "faceLandmarks",
		entry:   "./js/faceLandmarks.js",
		output:  {
			path:     path.resolve(__dirname, "dist"),
			filename: "faceLandmarks.bundle.js",
		},
		devtool: "eval-source-map",
		mode:    devMode,
	},
];
