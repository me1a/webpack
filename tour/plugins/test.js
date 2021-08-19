const { SyncHook } = require("tapable");
const {
	Compiler,
	NormalModuleFactory,
	ContextModuleFactory,
	Compilation
} = require("../utils/types");

class TestPlugins {
	apply(compiler) {
		Object.keys(compiler.hooks).forEach(hook => {
			compiler.hooks[hook].tap(hook, (a, b) => {
				console.log(`${hook} start----------------------------------------`);
				if (a) console.log(a);
				if (b) console.log(b);
				console.log(`------------------------------------------${hook} end`);
			});
		});
	}
}

module.exports = { TestPlugins };
