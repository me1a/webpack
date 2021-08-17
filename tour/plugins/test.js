const name = "TestPlugin";

const compilerHooks = [
	"environment",
	"afterEnvironment",
	"entryOption",
	"afterPlugins",
	"afterResolvers",
	"initialize",
	"beforeRun",
	"run",
	"normalModuleFactory",
	"contextModuleFactory",
	"beforeCompile",
	"compile",
	"thisCompilation",
	"compilation",
	"make",
	"finishMake",
	"afterCompile",
	"shouldEmit",
	"emit",
	"afterEmit",
	"done",
	"afterDone"
];

class TestPlugins {
	apply(compiler) {
		let events = [];
		compilerHooks.forEach(item => {
			compiler.hooks[item].tap(name, params => {
				events.push(item);
				console.log(item);
			});
		});
	}
}

module.exports = { TestPlugins };
