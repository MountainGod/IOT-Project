const path = require("path");

module.exports = [
	{
		mode:    "development",
		entry:   "./js/auth.js",
		output:  {
			path:     path.resolve(__dirname, "dist"),
			filename: "auth.bundle.js",
		},
		devtool: "eval-source-map",
	},
	{
		mode:    "development",
		entry:   "./js/navbar.js",
		output:  {
			path:     path.resolve(__dirname, "dist"),
			filename: "navbar.bundle.js",
		},
		devtool: "eval-source-map",
	},
	{
		mode:    "development",
		entry:   "./js/contact.js",
		output:  {
			path:     path.resolve(__dirname, "dist"),
			filename: "contact.bundle.js",
		},
		devtool: "eval-source-map",
	},
	{
		mode:    "development",
		entry:   "./js/shared.js",
		output:  {
			path:     path.resolve(__dirname, "dist"),
			filename: "shared.bundle.js",
		},
		devtool: "eval-source-map",
	},
];
