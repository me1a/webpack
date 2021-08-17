const path = require("path");
const webpack = require("../lib/webpack");
const { TestPlugins } = require("./plugins/test");

const compiler = webpack({
	entry: "./tour/index.js",
	output: {
		filename: "build.js",
		path: path.resolve(__dirname, "./dist")
	},
	plugins: [new TestPlugins()]
});

compiler.run((err, stat) => {
	console.log(stat);
});
