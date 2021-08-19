const Compiler = require("../../lib/Compiler");
const Compilation = require("../../lib/Compilation");
const NormalModuleFactory = require("../../lib/NormalModuleFactory");
const ContextModuleFactory = require("../../lib/ContextModuleFactory");

const CompilerHooks = [
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

const NormalModuleFactoryHooks = [
	"resolve",
	"resolveForScheme",
	"resolveInScheme",
	"factorize",
	"beforeResolve",
	"afterResolve",
	"createModule",
	"module",
	"createParser",
	"parser",

	"createGenerator",

	"generator"
];

const ContextModuleFactoryHooks = [
	"beforeResolve",
	"afterResolve",
	"contextModuleFiles",
	"alternatives",
	"alternativeRequests"
];
const CompilationHooks = [
	"buildModule",
	"rebuildModule",
	"failedModule",
	"succeedModule",
	"stillValidModule",
	"addEntry",
	"failedEntry",
	"succeedEntry",
	"dependencyReferencedExports",
	"executeModule",
	"prepareModuleExecution",
	"finishModules",
	"finishRebuildingModule",
	"unseal",
	"seal",
	"beforeChunks",
	"afterChunks",
	"optimizeDependencies",
	"afterOptimizeDependencies",
	"optimize",
	"optimizeModules",
	"afterOptimizeModules",
	"optimizeChunks",
	"afterOptimizeChunks",
	"optimizeTree",
	"afterOptimizeTree",
	"optimizeChunkModules",
	"afterOptimizeChunkModules",
	"shouldRecord",
	"additionalChunkRuntimeRequirements",
	"runtimeRequirementInChunk",
	"additionalModuleRuntimeRequirements",
	"runtimeRequirementInModule",
	"additionalTreeRuntimeRequirements",
	"runtimeRequirementInTree",
	"runtimeModule",
	"reviveModules",
	"beforeModuleIds",
	"moduleIds",
	"optimizeModuleIds",
	"afterOptimizeModuleIds",
	"reviveChunks",
	"beforeChunkIds",
	"chunkIds",
	"optimizeChunkIds",
	"afterOptimizeChunkIds",
	"recordModules",
	"recordChunks",
	"optimizeCodeGeneration",
	"beforeModuleHash",
	"afterModuleHash",
	"beforeCodeGeneration",
	"afterCodeGeneration",
	"beforeRuntimeRequirements",
	"afterRuntimeRequirements",
	"beforeHash",
	"contentHash",
	"afterHash",
	"recordHash",
	"record",
	"beforeModuleAssets",
	"shouldGenerateChunkAssets",
	"beforeChunkAssets",
	"additionalChunkAssets",
	"additionalAssets",
	"optimizeChunkAssets",
	"afterOptimizeChunkAssets",
	"optimizeAssets",
	"afterOptimizeAssets",
	"processAssets",
	"afterProcessAssets",
	"processAdditionalAssets",
	"needAdditionalSeal",
	"afterSeal",
	"renderManifest",
	"fullHash",
	"chunkHash",
	"moduleAsset",
	"chunkAsset",
	"assetPath",
	"needAdditionalPass",
	"childCompiler",
	"log",
	"processWarnings",
	"processErrors",
	"statsPreset",
	"statsNormalize",
	"statsFactory",
	"statsPrinter",
	"normalModuleLoader"
];

function instanceofName(ins) {
	if (ins instanceof Compiler) {
		return Compiler.name;
	} else if (ins instanceof Compilation) {
		return Compilation.name;
	} else if (ins instanceof NormalModuleFactory) {
		return NormalModuleFactory.name;
	} else if (ins instanceof ContextModuleFactory) {
		return ContextModuleFactory.name;
	}
	return "";
}

module.exports = {
	Compiler: {
		instanceof: Compiler,
		hasListen: false,
		hooksName: CompilerHooks
	},
	NormalModuleFactory: {
		instanceof: NormalModuleFactory,
		hasListen: false,
		hooksName: NormalModuleFactoryHooks
	},
	ContextModuleFactory: {
		instanceof: ContextModuleFactory,
		hasListen: false,
		hooksName: ContextModuleFactoryHooks
	},
	Compilation: {
		instanceof: Compilation,
		hasListen: false,
		hooksName: CompilationHooks
	}
};
