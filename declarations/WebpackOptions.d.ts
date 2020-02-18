/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */

/**
 * Set the value of `require.amd` and `define.amd`. Or disable AMD support.
 */
export type Amd =
	| false
	| {
			[k: string]: any;
	  };
/**
 * Report the first error as a hard error instead of tolerating it.
 */
export type Bail = boolean;
/**
 * Cache generated modules and chunks to improve performance for multiple incremental builds.
 */
export type Cache = CacheNormalized | true;
/**
 * Cache generated modules and chunks to improve performance for multiple incremental builds.
 */
export type CacheNormalized = false | MemoryCacheOptions | FileCacheOptions;
/**
 * The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.
 */
export type Context = string;
/**
 * References to other configurations to depend on.
 */
export type Dependencies = string[];
/**
 * A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
 */
export type DevTool = (false | "eval") | string;
/**
 * The entry point(s) of the compilation.
 */
export type Entry = EntryDynamic | EntryStatic;
/**
 * A Function returning an entry object, an entry string, an entry array or a promise to these things.
 */
export type EntryDynamic = () => EntryStatic | Promise<EntryStatic>;
/**
 * A static entry description
 */
export type EntryStatic = EntryObject | EntryUnnamed;
/**
 * Module(s) that are loaded upon startup
 */
export type EntryItem = string | NonEmptyArrayOfUniqueStringValues;
/**
 * A non-empty array of non-empty strings
 */
export type NonEmptyArrayOfUniqueStringValues = [string, ...string[]];
/**
 * An entry point without name.
 */
export type EntryUnnamed = EntryItem;
/**
 * Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
 */
export type Externals =
	| ((
			context: string,
			request: string,
			callback: (err?: Error, result?: string) => void
	  ) => void)
	| ExternalItem
	| (
			| ((
					context: string,
					request: string,
					callback: (err?: Error, result?: string) => void
			  ) => void)
			| ExternalItem
	  )[];
/**
 * Specify dependency that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
 */
export type ExternalItem =
	| string
	| {
			/**
			 * The dependency used for the external
			 */
			[k: string]:
				| string
				| {
						[k: string]: any;
				  }
				| ArrayOfStringValues
				| boolean;
	  }
	| RegExp;
/**
 * Array of strings
 */
export type ArrayOfStringValues = string[];
/**
 * Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value)
 */
export type ExternalsType =
	| "var"
	| "module"
	| "assign"
	| "this"
	| "window"
	| "self"
	| "global"
	| "commonjs"
	| "commonjs2"
	| "commonjs-module"
	| "amd"
	| "amd-require"
	| "umd"
	| "umd2"
	| "jsonp"
	| "system";
/**
 * Filtering values
 */
export type FilterTypes = FilterItemTypes | FilterItemTypes[];
/**
 * Filtering value, regexp or function
 */
export type FilterItemTypes = RegExp | string | ((value: string) => boolean);
/**
 * Enable production optimizations or development hints.
 */
export type Mode = "development" | "production" | "none";
/**
 * One or multiple rule conditions
 */
export type RuleSetConditionOrConditions = RuleSetCondition | RuleSetConditions;
/**
 * A condition matcher
 */
export type RuleSetCondition =
	| RegExp
	| string
	| ((value: string) => boolean)
	| RuleSetConditions
	| {
			/**
			 * Logical AND
			 */
			and?: RuleSetConditions;
			/**
			 * Exclude all modules matching any of these conditions
			 */
			exclude?: RuleSetConditionOrConditions;
			/**
			 * Exclude all modules matching not any of these conditions
			 */
			include?: RuleSetConditionOrConditions;
			/**
			 * Logical NOT
			 */
			not?: RuleSetConditions;
			/**
			 * Logical OR
			 */
			or?: RuleSetConditions;
			/**
			 * Exclude all modules matching any of these conditions
			 */
			test?: RuleSetConditionOrConditions;
	  };
/**
 * A list of rule conditions
 */
export type RuleSetConditions = RuleSetCondition[];
/**
 * One or multiple rule conditions matching an absolute path
 */
export type RuleSetConditionOrConditionsAbsolute =
	| RuleSetConditionAbsolute
	| RuleSetConditionsAbsolute;
/**
 * A condition matcher matching an absolute path
 */
export type RuleSetConditionAbsolute =
	| RegExp
	| string
	| ((value: string) => boolean)
	| RuleSetConditionsAbsolute
	| {
			/**
			 * Logical AND
			 */
			and?: RuleSetConditionsAbsolute;
			/**
			 * Exclude all modules matching any of these conditions
			 */
			exclude?: RuleSetConditionOrConditionsAbsolute;
			/**
			 * Exclude all modules matching not any of these conditions
			 */
			include?: RuleSetConditionOrConditionsAbsolute;
			/**
			 * Logical NOT
			 */
			not?: RuleSetConditionsAbsolute;
			/**
			 * Logical OR
			 */
			or?: RuleSetConditionsAbsolute;
			/**
			 * Exclude all modules matching any of these conditions
			 */
			test?: RuleSetConditionOrConditionsAbsolute;
	  };
/**
 * A list of rule conditions matching an absolute path
 */
export type RuleSetConditionsAbsolute = RuleSetConditionAbsolute[];
/**
 * A loader request
 */
export type RuleSetLoader = string;
/**
 * A list of descriptions of loaders applied
 */
export type RuleSetUse =
	| RuleSetUseItem
	| ((data: object) => RuleSetUseItem[])
	| RuleSetUseItem[];
/**
 * A description of an applied loader
 */
export type RuleSetUseItem =
	| RuleSetLoader
	| ((data: object) => RuleSetUseItem | RuleSetUseItem[])
	| {
			/**
			 * Unique loader options identifier
			 */
			ident?: string;
			/**
			 * Loader name
			 */
			loader?: RuleSetLoader;
			/**
			 * Loader options
			 */
			options?: RuleSetLoaderOptions;
	  };
/**
 * Options passed to a loader
 */
export type RuleSetLoaderOptions =
	| {
			[k: string]: any;
	  }
	| string;
/**
 * List of string or string-array values
 */
export type ArrayOfStringOrStringArrayValues = (string | string[])[];
/**
 * A list of rules
 */
export type RuleSetRules = RuleSetRule[];
/**
 * Name of the configuration. Used when loading multiple configurations.
 */
export type Name = string;
/**
 * Include polyfills or mocks for various node stuff.
 */
export type Node = false | NodeOptions;
/**
 * Function acting as plugin
 */
export type WebpackPluginFunction = (
	this: import("../lib/Compiler"),
	compiler: import("../lib/Compiler")
) => void;
/**
 * Create an additional chunk which contains only the webpack runtime and chunk hash maps
 */
export type OptimizationRuntimeChunk =
	| boolean
	| ("single" | "multiple")
	| {
			/**
			 * The name or name factory for the runtime chunks
			 */
			name?: string | Function;
	  };
/**
 * A function returning cache groups
 */
export type OptimizationSplitChunksGetCacheGroups = (
	module: import("../lib/Module")
) =>
	| OptimizationSplitChunksCacheGroup
	| OptimizationSplitChunksCacheGroup[]
	| void;
/**
 * Size description for limits
 */
export type OptimizationSplitChunksSizes =
	| number
	| {
			/**
			 * Size of the part of the chunk with the type of the key
			 */
			[k: string]: number;
	  };
/**
 * The number of parallel processed modules in the compilation.
 */
export type Parallelism = number;
/**
 * Configuration for web performance recommendations
 */
export type Performance = false | PerformanceOptions;
/**
 * Add additional plugins to the compiler.
 */
export type Plugins = (WebpackPluginInstance | WebpackPluginFunction)[];
/**
 * Capture timing information for each module.
 */
export type Profile = boolean;
/**
 * Store compiler state to a json file.
 */
export type RecordsInputPath = false | string;
/**
 * Load compiler state from a json file.
 */
export type RecordsOutputPath = false | string;
/**
 * Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. `recordsPath` is used for `recordsInputPath` and `recordsOutputPath` if they left undefined.
 */
export type RecordsPath = false | string;
/**
 * Options for the resolver
 */
export type Resolve = ResolveOptions;
/**
 * Options for the resolver when resolving loaders
 */
export type ResolveLoader = ResolveOptions;
/**
 * Stats options object or preset name
 */
export type Stats =
	| StatsOptions
	| boolean
	| (
			| "none"
			| "errors-only"
			| "minimal"
			| "normal"
			| "detailed"
			| "verbose"
			| "errors-warnings"
	  );
/**
 * Environment to build for
 */
export type Target =
	| (
			| "web"
			| "webworker"
			| "node"
			| "async-node"
			| "node-webkit"
			| "electron-main"
			| "electron-renderer"
			| "electron-preload"
	  )
	| ((compiler: import("../lib/Compiler")) => void);
/**
 * Enter watch mode, which rebuilds on file change.
 */
export type Watch = boolean;
/**
 * A Function returning a Promise resolving to a normalized entry.
 */
export type EntryDynamicNormalized = () => Promise<EntryStaticNormalized>;
/**
 * The entry point(s) of the compilation.
 */
export type EntryNormalized = EntryDynamicNormalized | EntryStaticNormalized;
/**
 * Create an additional chunk which contains only the webpack runtime and chunk hash maps
 */
export type OptimizationRuntimeChunkNormalized =
	| false
	| {
			/**
			 * The name factory for the runtime chunks
			 */
			name?: Function;
	  };

/**
 * webpack options object as provided by the user
 */
export interface WebpackOptions {
	/**
	 * Set the value of `require.amd` and `define.amd`. Or disable AMD support.
	 */
	amd?: Amd;
	/**
	 * Report the first error as a hard error instead of tolerating it.
	 */
	bail?: Bail;
	/**
	 * Cache generated modules and chunks to improve performance for multiple incremental builds.
	 */
	cache?: Cache;
	/**
	 * The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.
	 */
	context?: Context;
	/**
	 * References to other configurations to depend on.
	 */
	dependencies?: Dependencies;
	/**
	 * Options for the webpack-dev-server
	 */
	devServer?: DevServer;
	/**
	 * A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
	 */
	devtool?: DevTool;
	/**
	 * The entry point(s) of the compilation.
	 */
	entry?: Entry;
	/**
	 * Enables/Disables experiments (experiemental features with relax SemVer compatibility)
	 */
	experiments?: Experiments;
	/**
	 * Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
	 */
	externals?: Externals;
	/**
	 * Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value)
	 */
	externalsType?: ExternalsType;
	/**
	 * Options for infrastructure level logging
	 */
	infrastructureLogging?: InfrastructureLogging;
	/**
	 * Custom values available in the loader context.
	 */
	loader?: Loader;
	/**
	 * Enable production optimizations or development hints.
	 */
	mode?: Mode;
	/**
	 * Options affecting the normal modules (`NormalModuleFactory`).
	 */
	module?: Module;
	/**
	 * Name of the configuration. Used when loading multiple configurations.
	 */
	name?: Name;
	/**
	 * Include polyfills or mocks for various node stuff.
	 */
	node?: Node;
	/**
	 * Enables/Disables integrated optimizations
	 */
	optimization?: Optimization;
	/**
	 * Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
	 */
	output?: Output;
	/**
	 * The number of parallel processed modules in the compilation.
	 */
	parallelism?: Parallelism;
	/**
	 * Configuration for web performance recommendations
	 */
	performance?: Performance;
	/**
	 * Add additional plugins to the compiler.
	 */
	plugins?: Plugins;
	/**
	 * Capture timing information for each module.
	 */
	profile?: Profile;
	/**
	 * Store compiler state to a json file.
	 */
	recordsInputPath?: RecordsInputPath;
	/**
	 * Load compiler state from a json file.
	 */
	recordsOutputPath?: RecordsOutputPath;
	/**
	 * Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. `recordsPath` is used for `recordsInputPath` and `recordsOutputPath` if they left undefined.
	 */
	recordsPath?: RecordsPath;
	/**
	 * Options for the resolver
	 */
	resolve?: Resolve;
	/**
	 * Options for the resolver when resolving loaders
	 */
	resolveLoader?: ResolveLoader;
	/**
	 * Stats options object or preset name
	 */
	stats?: Stats;
	/**
	 * Environment to build for
	 */
	target?: Target;
	/**
	 * Enter watch mode, which rebuilds on file change.
	 */
	watch?: Watch;
	/**
	 * Options for the watcher
	 */
	watchOptions?: WatchOptions;
}
/**
 * Options object for in-memory caching
 */
export interface MemoryCacheOptions {
	/**
	 * List of paths that are managed by a package manager and contain a version or hash in it's path so all files are immutable
	 */
	immutablePaths?: string[];
	/**
	 * List of paths that are managed by a package manager and can be trusted to not being modified otherwise
	 */
	managedPaths?: string[];
	/**
	 * In memory caching
	 */
	type: "memory";
}
/**
 * Options object for persistent file-based caching
 */
export interface FileCacheOptions {
	/**
	 * Dependencies the build depends on (in multiple categories, default categories: 'defaultWebpack')
	 */
	buildDependencies?: {
		/**
		 * List of dependencies the build depends on
		 */
		[k: string]: string[];
	};
	/**
	 * Base directory for the cache (defaults to node_modules/.cache/webpack).
	 */
	cacheDirectory?: string;
	/**
	 * Locations for the cache (defaults to cacheDirectory / name).
	 */
	cacheLocation?: string;
	/**
	 * Algorithm used for generation the hash (see node.js crypto package)
	 */
	hashAlgorithm?: string;
	/**
	 * Time in ms after which idle period the cache storing should happen (only for store: 'pack' or 'idle')
	 */
	idleTimeout?: number;
	/**
	 * Time in ms after which idle period the initial cache storing should happen (only for store: 'pack' or 'idle')
	 */
	idleTimeoutForInitialStore?: number;
	/**
	 * List of paths that are managed by a package manager and contain a version or hash in it's path so all files are immutable
	 */
	immutablePaths?: string[];
	/**
	 * List of paths that are managed by a package manager and can be trusted to not being modified otherwise
	 */
	managedPaths?: string[];
	/**
	 * Name for the cache. Different names will lead to different coexisting caches.
	 */
	name?: string;
	/**
	 * When to store data to the filesystem. (pack: Store data when compiler is idle in a single file)
	 */
	store?: "pack";
	/**
	 * Filesystem caching
	 */
	type: "filesystem";
	/**
	 * Version of the cache data. Different versions won't allow to reuse the cache and override existing content. Update the version when config changed in a way which doesn't allow to reuse cache. This will invalidate the cache.
	 */
	version?: string;
}
/**
 * Options for the webpack-dev-server
 */
export interface DevServer {
	[k: string]: any;
}
/**
 * Multiple entry bundles are created. The key is the entry name. The value can be a string, an array or an entry description object.
 */
export interface EntryObject {
	/**
	 * An entry point with name
	 */
	[k: string]: EntryItem | EntryDescription;
}
/**
 * An object with entry point description.
 */
export interface EntryDescription {
	/**
	 * The entrypoints that the current entrypoint depend on. They must be loaded when this entrypoint is loaded.
	 */
	dependOn?: string | NonEmptyArrayOfUniqueStringValues;
	/**
	 * The filename of the entrypoint as relative path inside the `output.path` directory.
	 */
	filename?: string;
	/**
	 * The module(s) loaded at startup.
	 */
	import: EntryItem;
}
/**
 * Enables/Disables experiments (experiemental features with relax SemVer compatibility)
 */
export interface Experiments {
	/**
	 * Allow module type 'asset' to generate assets
	 */
	asset?: boolean;
	/**
	 * Support WebAssembly as asynchronous EcmaScript Module
	 */
	asyncWebAssembly?: boolean;
	/**
	 * Allow 'import/export' syntax to import async modules
	 */
	importAsync?: boolean;
	/**
	 * Allow 'import/export await' syntax to import async modules
	 */
	importAwait?: boolean;
	/**
	 * Support .mjs files as way to define strict ESM file (node.js)
	 */
	mjs?: boolean;
	/**
	 * Allow outputing javascript files as module source type
	 */
	outputModule?: boolean;
	/**
	 * Support WebAssembly as synchronous EcmaScript Module (outdated)
	 */
	syncWebAssembly?: boolean;
	/**
	 * Allow using top-level-await in EcmaScript Modules
	 */
	topLevelAwait?: boolean;
}
/**
 * Options for infrastructure level logging
 */
export interface InfrastructureLogging {
	/**
	 * Enable debug logging for specific loggers
	 */
	debug?: FilterTypes | boolean;
	/**
	 * Log level
	 */
	level?: "none" | "error" | "warn" | "info" | "log" | "verbose";
}
/**
 * Custom values available in the loader context.
 */
export interface Loader {
	[k: string]: any;
}
/**
 * Options affecting the normal modules (`NormalModuleFactory`).
 */
export interface Module {
	/**
	 * An array of rules applied by default for modules.
	 */
	defaultRules?: RuleSetRules;
	/**
	 * Enable warnings for full dynamic dependencies
	 */
	exprContextCritical?: boolean;
	/**
	 * Enable recursive directory lookup for full dynamic dependencies
	 */
	exprContextRecursive?: boolean;
	/**
	 * Sets the default regular expression for full dynamic dependencies
	 */
	exprContextRegExp?: boolean | RegExp;
	/**
	 * Set the default request for full dynamic dependencies
	 */
	exprContextRequest?: string;
	/**
	 * Don't parse files matching. It's matched against the full resolved request.
	 */
	noParse?:
		| [RegExp, ...RegExp[]]
		| RegExp
		| Function
		| [string, ...string[]]
		| string;
	/**
	 * An array of rules applied for modules.
	 */
	rules?: RuleSetRules;
	/**
	 * Emit errors instead of warnings when imported names don't exist in imported module
	 */
	strictExportPresence?: boolean;
	/**
	 * Handle the this context correctly according to the spec for namespace objects
	 */
	strictThisContextOnImports?: boolean;
	/**
	 * Enable warnings when using the require function in a not statically analyse-able way
	 */
	unknownContextCritical?: boolean;
	/**
	 * Enable recursive directory lookup when using the require function in a not statically analyse-able way
	 */
	unknownContextRecursive?: boolean;
	/**
	 * Sets the regular expression when using the require function in a not statically analyse-able way
	 */
	unknownContextRegExp?: boolean | RegExp;
	/**
	 * Sets the request when using the require function in a not statically analyse-able way
	 */
	unknownContextRequest?: string;
	/**
	 * Cache the resolving of module requests
	 */
	unsafeCache?: boolean | Function;
	/**
	 * Enable warnings for partial dynamic dependencies
	 */
	wrappedContextCritical?: boolean;
	/**
	 * Enable recursive directory lookup for partial dynamic dependencies
	 */
	wrappedContextRecursive?: boolean;
	/**
	 * Set the inner regular expression for partial dynamic dependencies
	 */
	wrappedContextRegExp?: RegExp;
}
/**
 * A rule description with conditions and effects for modules
 */
export interface RuleSetRule {
	/**
	 * Match the child compiler name
	 */
	compiler?: RuleSetConditionOrConditions;
	/**
	 * Enforce this rule as pre or post step
	 */
	enforce?: "pre" | "post";
	/**
	 * Shortcut for resource.exclude
	 */
	exclude?: RuleSetConditionOrConditionsAbsolute;
	/**
	 * The options for the module generator
	 */
	generator?: {
		[k: string]: any;
	};
	/**
	 * Shortcut for resource.include
	 */
	include?: RuleSetConditionOrConditionsAbsolute;
	/**
	 * Match the issuer of the module (The module pointing to this module)
	 */
	issuer?: RuleSetConditionOrConditionsAbsolute;
	/**
	 * Shortcut for use.loader
	 */
	loader?: RuleSetLoader | RuleSetUse;
	/**
	 * Only execute the first matching rule in this array
	 */
	oneOf?: RuleSetRules;
	/**
	 * Shortcut for use.options
	 */
	options?: RuleSetLoaderOptions;
	/**
	 * Options for parsing
	 */
	parser?: {
		[k: string]: any;
	};
	/**
	 * Match the real resource path of the module
	 */
	realResource?: RuleSetConditionOrConditionsAbsolute;
	/**
	 * Options for the resolver
	 */
	resolve?: ResolveOptions;
	/**
	 * Match the resource path of the module
	 */
	resource?: RuleSetConditionOrConditionsAbsolute;
	/**
	 * Match the resource query of the module
	 */
	resourceQuery?: RuleSetConditionOrConditions;
	/**
	 * Match and execute these rules when this rule is matched
	 */
	rules?: RuleSetRules;
	/**
	 * Flags a module as with or without side effects
	 */
	sideEffects?: boolean;
	/**
	 * Shortcut for resource.test
	 */
	test?: RuleSetConditionOrConditionsAbsolute;
	/**
	 * Module type to use for the module
	 */
	type?: string;
	/**
	 * Modifiers applied to the module when rule is matched
	 */
	use?: RuleSetUse;
}
/**
 * Options object for resolving requests
 */
export interface ResolveOptions {
	/**
	 * Redirect module requests
	 */
	alias?:
		| {
				/**
				 * New request
				 */
				[k: string]: string | string[] | false;
		  }
		| {
				/**
				 * New request
				 */
				alias: string | string[] | false;
				/**
				 * Request to be redirected
				 */
				name: string;
				/**
				 * Redirect only exact matching request
				 */
				onlyModule?: boolean;
		  }[];
	/**
	 * Fields in the description file (package.json) which are used to redirect requests inside the module
	 */
	aliasFields?: ArrayOfStringOrStringArrayValues;
	/**
	 * Enable caching of successfully resolved requests (cache entries are revalidated)
	 */
	cache?: boolean;
	/**
	 * Predicate function to decide which requests should be cached
	 */
	cachePredicate?: Function;
	/**
	 * Include the context information in the cache identifier when caching
	 */
	cacheWithContext?: boolean;
	/**
	 * Filenames used to find a description file
	 */
	descriptionFiles?: ArrayOfStringValues;
	/**
	 * Enforce using one of the extensions from the extensions option
	 */
	enforceExtension?: boolean;
	/**
	 * Extensions added to the request when trying to find the file
	 */
	extensions?: ArrayOfStringValues;
	/**
	 * Filesystem for the resolver
	 */
	fileSystem?: {
		[k: string]: any;
	};
	/**
	 * Field names from the description file (package.json) which are used to find the default entry point
	 */
	mainFields?: ArrayOfStringOrStringArrayValues;
	/**
	 * Filenames used to find the default entry point if there is no description file or main field
	 */
	mainFiles?: ArrayOfStringValues;
	/**
	 * Folder names or directory paths where to find modules
	 */
	modules?: ArrayOfStringValues;
	/**
	 * Plugins for the resolver
	 */
	plugins?: ResolvePluginInstance[];
	/**
	 * Custom resolver
	 */
	resolver?: {
		[k: string]: any;
	};
	/**
	 * Enable resolving symlinks to the original location
	 */
	symlinks?: boolean;
	/**
	 * Enable caching of successfully resolved requests (cache entries are not revalidated)
	 */
	unsafeCache?:
		| boolean
		| {
				[k: string]: any;
		  };
	/**
	 * Use synchronous filesystem calls for the resolver
	 */
	useSyncFileSystemCalls?: boolean;
}
/**
 * Plugin instance
 */
export interface ResolvePluginInstance {
	/**
	 * The run point of the plugin, required method.
	 */
	apply: (resolver: import("enhanced-resolve/lib/Resolver")) => void;
	[k: string]: any;
}
/**
 * Options object for node compatibility features
 */
export interface NodeOptions {
	/**
	 * Include a polyfill for the '__dirname' variable
	 */
	__dirname?: false | true | "mock";
	/**
	 * Include a polyfill for the '__filename' variable
	 */
	__filename?: false | true | "mock";
	/**
	 * Include a polyfill for the 'global' variable
	 */
	global?: boolean;
}
/**
 * Enables/Disables integrated optimizations
 */
export interface Optimization {
	/**
	 * Check for incompatible wasm types when importing/exporting from/to ESM
	 */
	checkWasmTypes?: boolean;
	/**
	 * Define the algorithm to choose chunk ids (named: readable ids for better debugging, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, total-size: numeric ids focused on minimal total download size, false: no algorithm used, as custom one can be provided via plugin)
	 */
	chunkIds?:
		| "natural"
		| "named"
		| "deterministic"
		| "size"
		| "total-size"
		| false;
	/**
	 * Concatenate modules when possible to generate less modules, more efficient code and enable more optimizations by the minimizer
	 */
	concatenateModules?: boolean;
	/**
	 * Also flag chunks as loaded which contain a subset of the modules
	 */
	flagIncludedChunks?: boolean;
	/**
	 * Creates a module-internal dependency graph for top level symbols, exports and imports, to improve unused exports detection
	 */
	innerGraph?: boolean;
	/**
	 * Rename exports when possible to generate shorter code (depends on optimization.usedExports and optimization.providedExports)
	 */
	mangleExports?: boolean;
	/**
	 * Reduce size of WASM by changing imports to shorter strings.
	 */
	mangleWasmImports?: boolean;
	/**
	 * Merge chunks which contain the same modules
	 */
	mergeDuplicateChunks?: boolean;
	/**
	 * Enable minimizing the output. Uses optimization.minimizer.
	 */
	minimize?: boolean;
	/**
	 * Minimizer(s) to use for minimizing the output
	 */
	minimizer?: (WebpackPluginInstance | WebpackPluginFunction)[];
	/**
	 * Define the algorithm to choose module ids (natural: numeric ids in order of usage, named: readable ids for better debugging, hashed: (deprecated) short hashes as ids for better long term caching, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, false: no algorithm used, as custom one can be provided via plugin)
	 */
	moduleIds?: "natural" | "named" | "hashed" | "deterministic" | "size" | false;
	/**
	 * Avoid emitting assets when errors occur
	 */
	noEmitOnErrors?: boolean;
	/**
	 * Set process.env.NODE_ENV to a specific value
	 */
	nodeEnv?: false | string;
	/**
	 * Generate records with relative paths to be able to move the context folder
	 */
	portableRecords?: boolean;
	/**
	 * Figure out which exports are provided by modules to generate more efficient code
	 */
	providedExports?: boolean;
	/**
	 * Removes modules from chunks when these modules are already included in all parents
	 */
	removeAvailableModules?: boolean;
	/**
	 * Remove chunks which are empty
	 */
	removeEmptyChunks?: boolean;
	/**
	 * Create an additional chunk which contains only the webpack runtime and chunk hash maps
	 */
	runtimeChunk?: OptimizationRuntimeChunk;
	/**
	 * Skip over modules which are flagged to contain no side effects when exports are not used
	 */
	sideEffects?: boolean;
	/**
	 * Optimize duplication and caching by splitting chunks by shared modules and cache group
	 */
	splitChunks?: false | OptimizationSplitChunksOptions;
	/**
	 * Figure out which exports are used by modules to mangle export names, omit unused exports and generate more efficient code
	 */
	usedExports?: boolean;
}
/**
 * Plugin instance
 */
export interface WebpackPluginInstance {
	/**
	 * The run point of the plugin, required method.
	 */
	apply: (compiler: import("../lib/Compiler")) => void;
	[k: string]: any;
}
/**
 * Options object for splitting chunks into smaller chunks
 */
export interface OptimizationSplitChunksOptions {
	/**
	 * Sets the name delimiter for created chunks
	 */
	automaticNameDelimiter?: string;
	/**
	 * Assign modules to a cache group (modules from different cache groups are tried to keep in separate chunks, default categories: 'default', 'defaultVendors')
	 */
	cacheGroups?: {
		/**
		 * Configuration for a cache group
		 */
		[k: string]:
			| false
			| Function
			| string
			| RegExp
			| OptimizationSplitChunksCacheGroup;
	};
	/**
	 * Select chunks for determining shared modules (defaults to "async", "initial" and "all" requires adding these chunks to the HTML)
	 */
	chunks?: ("initial" | "async" | "all") | Function;
	/**
	 * Options for modules not selected by any other cache group
	 */
	fallbackCacheGroup?: {
		/**
		 * Sets the name delimiter for created chunks
		 */
		automaticNameDelimiter?: string;
		/**
		 * Maximal size hint for the on-demand chunks
		 */
		maxAsyncSize?: OptimizationSplitChunksSizes;
		/**
		 * Maximal size hint for the initial chunks
		 */
		maxInitialSize?: OptimizationSplitChunksSizes;
		/**
		 * Maximal size hint for the created chunks
		 */
		maxSize?: OptimizationSplitChunksSizes;
		/**
		 * Minimal size for the created chunk
		 */
		minSize?: OptimizationSplitChunksSizes;
	};
	/**
	 * Sets the template for the filename for created chunks
	 */
	filename?:
		| string
		| ((
				pathData: import("../lib/Compilation").PathData,
				assetInfo?: import("../lib/Compilation").AssetInfo
		  ) => string);
	/**
	 * Prevents exposing path info when creating names for parts splitted by maxSize
	 */
	hidePathInfo?: boolean;
	/**
	 * Maximum number of requests which are accepted for on-demand loading
	 */
	maxAsyncRequests?: number;
	/**
	 * Maximal size hint for the on-demand chunks
	 */
	maxAsyncSize?: OptimizationSplitChunksSizes;
	/**
	 * Maximum number of initial chunks which are accepted for an entry point
	 */
	maxInitialRequests?: number;
	/**
	 * Maximal size hint for the initial chunks
	 */
	maxInitialSize?: OptimizationSplitChunksSizes;
	/**
	 * Maximal size hint for the created chunks
	 */
	maxSize?: OptimizationSplitChunksSizes;
	/**
	 * Minimum number of times a module has to be duplicated until it's considered for splitting
	 */
	minChunks?: number;
	/**
	 * Minimal size for the chunks the stay after moving the modules to a new chunk
	 */
	minRemainingSize?: OptimizationSplitChunksSizes;
	/**
	 * Minimal size for the created chunks
	 */
	minSize?: OptimizationSplitChunksSizes;
	/**
	 * Give chunks created a name (chunks with equal name are merged)
	 */
	name?: false | Function | string;
}
/**
 * Options object for describing behavior of a cache group selecting modules that should be cached together
 */
export interface OptimizationSplitChunksCacheGroup {
	/**
	 * Sets the name delimiter for created chunks
	 */
	automaticNameDelimiter?: string;
	/**
	 * Select chunks for determining cache group content (defaults to "initial", "initial" and "all" requires adding these chunks to the HTML)
	 */
	chunks?:
		| ("initial" | "async" | "all")
		| OptimizationSplitChunksGetCacheGroups;
	/**
	 * Ignore minimum size, minimum chunks and maximum requests and always create chunks for this cache group
	 */
	enforce?: boolean;
	/**
	 * Sets the template for the filename for created chunks
	 */
	filename?:
		| string
		| ((
				pathData: import("../lib/Compilation").PathData,
				assetInfo?: import("../lib/Compilation").AssetInfo
		  ) => string);
	/**
	 * Sets the hint for chunk id
	 */
	idHint?: string;
	/**
	 * Maximum number of requests which are accepted for on-demand loading
	 */
	maxAsyncRequests?: number;
	/**
	 * Maximal size hint for the on-demand chunks
	 */
	maxAsyncSize?: OptimizationSplitChunksSizes;
	/**
	 * Maximum number of initial chunks which are accepted for an entry point
	 */
	maxInitialRequests?: number;
	/**
	 * Maximal size hint for the initial chunks
	 */
	maxInitialSize?: OptimizationSplitChunksSizes;
	/**
	 * Maximal size hint for the created chunks
	 */
	maxSize?: OptimizationSplitChunksSizes;
	/**
	 * Minimum number of times a module has to be duplicated until it's considered for splitting
	 */
	minChunks?: number;
	/**
	 * Minimal size for the chunks the stay after moving the modules to a new chunk
	 */
	minRemainingSize?: OptimizationSplitChunksSizes;
	/**
	 * Minimal size for the created chunk
	 */
	minSize?: OptimizationSplitChunksSizes;
	/**
	 * Give chunks for this cache group a name (chunks with equal name are merged)
	 */
	name?: false | Function | string;
	/**
	 * Priority of this cache group
	 */
	priority?: number;
	/**
	 * Try to reuse existing chunk (with name) when it has matching modules
	 */
	reuseExistingChunk?: boolean;
	/**
	 * Assign modules to a cache group by module name
	 */
	test?: Function | string | RegExp;
	/**
	 * Assign modules to a cache group by module type
	 */
	type?: Function | string | RegExp;
}
/**
 * Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
 */
export interface Output {
	/**
	 * The filename of asset modules as relative path inside the `output.path` directory.
	 */
	assetModuleFilename?:
		| string
		| ((
				pathData: import("../lib/Compilation").PathData,
				assetInfo?: import("../lib/Compilation").AssetInfo
		  ) => string);
	/**
	 * Add a comment in the UMD wrapper.
	 */
	auxiliaryComment?: string | LibraryCustomUmdCommentObject;
	/**
	 * The callback function name used by webpack for loading of chunks in WebWorkers.
	 */
	chunkCallbackName?: string;
	/**
	 * The filename of non-entry chunks as relative path inside the `output.path` directory.
	 */
	chunkFilename?: string;
	/**
	 * Number of milliseconds before chunk request expires
	 */
	chunkLoadTimeout?: number;
	/**
	 * Check if to be emitted file already exists and have the same content before writing to output filesystem
	 */
	compareBeforeEmit?: boolean;
	/**
	 * This option enables cross-origin loading of chunks.
	 */
	crossOriginLoading?: false | "anonymous" | "use-credentials";
	/**
	 * Similar to `output.devtoolModuleFilenameTemplate`, but used in the case of duplicate module identifiers.
	 */
	devtoolFallbackModuleFilenameTemplate?: string | Function;
	/**
	 * Filename template string of function for the sources array in a generated SourceMap.
	 */
	devtoolModuleFilenameTemplate?: string | Function;
	/**
	 * Module namespace to use when interpolating filename template string for the sources array in a generated SourceMap. Defaults to `output.library` if not set. It's useful for avoiding runtime collisions in sourcemaps from multiple webpack projects built as libraries.
	 */
	devtoolNamespace?: string;
	/**
	 * The maximum EcmaScript version of the webpack generated code (doesn't include input source code from modules).
	 */
	ecmaVersion?: number | 2009;
	/**
	 * Specifies the name of each output file on disk. You must **not** specify an absolute path here! The `output.path` option determines the location on disk the files are written to, filename is used solely for naming the individual files.
	 */
	filename?:
		| string
		| ((
				pathData: import("../lib/Compilation").PathData,
				assetInfo?: import("../lib/Compilation").AssetInfo
		  ) => string);
	/**
	 * An expression which is used to address the global object/scope in runtime code
	 */
	globalObject?: string;
	/**
	 * Digest type used for the hash
	 */
	hashDigest?: string;
	/**
	 * Number of chars which are used for the hash
	 */
	hashDigestLength?: number;
	/**
	 * Algorithm used for generation the hash (see node.js crypto package)
	 */
	hashFunction?: string | typeof import("../lib/util/Hash");
	/**
	 * Any string which is added to the hash to salt it
	 */
	hashSalt?: string;
	/**
	 * The filename of the Hot Update Chunks. They are inside the output.path directory.
	 */
	hotUpdateChunkFilename?: string;
	/**
	 * The JSONP function used by webpack for async loading of hot update chunks.
	 */
	hotUpdateFunction?: string;
	/**
	 * The filename of the Hot Update Main File. It is inside the `output.path` directory.
	 */
	hotUpdateMainFilename?: string;
	/**
	 * Wrap javascript code into IIFEs to avoid leaking into global scope.
	 */
	iife?: boolean;
	/**
	 * The JSONP function used by webpack for async loading of chunks.
	 */
	jsonpFunction?: string;
	/**
	 * This option enables loading async chunks via a custom script type, such as script type="module"
	 */
	jsonpScriptType?: false | "text/javascript" | "module";
	/**
	 * If set, export the bundle as library. `output.library` is the name.
	 */
	library?: string | string[] | LibraryCustomUmdObject;
	/**
	 * Specify which export should be exposed as library
	 */
	libraryExport?: string | ArrayOfStringValues;
	/**
	 * Type of library
	 */
	libraryTarget?:
		| "var"
		| "module"
		| "assign"
		| "this"
		| "window"
		| "self"
		| "global"
		| "commonjs"
		| "commonjs2"
		| "commonjs-module"
		| "amd"
		| "amd-require"
		| "umd"
		| "umd2"
		| "jsonp"
		| "system";
	/**
	 * Output javascript files as module source type.
	 */
	module?: boolean;
	/**
	 * The output directory as **absolute path** (required).
	 */
	path?: string;
	/**
	 * Include comments with information about the modules.
	 */
	pathinfo?: boolean;
	/**
	 * The `publicPath` specifies the public URL address of the output files when referenced in a browser.
	 */
	publicPath?:
		| string
		| ((
				pathData: import("../lib/Compilation").PathData,
				assetInfo?: import("../lib/Compilation").AssetInfo
		  ) => string);
	/**
	 * The filename of the SourceMaps for the JavaScript files. They are inside the `output.path` directory.
	 */
	sourceMapFilename?: string;
	/**
	 * Prefixes every line of the source in the bundle with this string.
	 */
	sourcePrefix?: string;
	/**
	 * Handles exceptions in module loading correctly at a performance cost.
	 */
	strictModuleExceptionHandling?: boolean;
	/**
	 * If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module.
	 */
	umdNamedDefine?: boolean;
	/**
	 * A unique name of the webpack build to avoid multiple webpack runtimes to conflict when using globals.
	 */
	uniqueName?: string;
	/**
	 * The filename of WebAssembly modules as relative path inside the `output.path` directory.
	 */
	webassemblyModuleFilename?: string;
}
/**
 * Set explicit comments for `commonjs`, `commonjs2`, `amd`, and `root`.
 */
export interface LibraryCustomUmdCommentObject {
	/**
	 * Set comment for `amd` section in UMD
	 */
	amd?: string;
	/**
	 * Set comment for `commonjs` (exports) section in UMD
	 */
	commonjs?: string;
	/**
	 * Set comment for `commonjs2` (module.exports) section in UMD
	 */
	commonjs2?: string;
	/**
	 * Set comment for `root` (global variable) section in UMD
	 */
	root?: string;
}
/**
 * Description object for all UMD variants of the library name
 */
export interface LibraryCustomUmdObject {
	/**
	 * Name of the exposed AMD library in the UMD
	 */
	amd?: string;
	/**
	 * Name of the exposed commonjs export in the UMD
	 */
	commonjs?: string;
	/**
	 * Name of the property exposed globally by a UMD library
	 */
	root?: string | ArrayOfStringValues;
}
/**
 * Configuration object for web performance recommendations
 */
export interface PerformanceOptions {
	/**
	 * Filter function to select assets that are checked
	 */
	assetFilter?: Function;
	/**
	 * Sets the format of the hints: warnings, errors or nothing at all
	 */
	hints?: false | "warning" | "error";
	/**
	 * Filesize limit (in bytes) when exceeded, that webpack will provide performance hints
	 */
	maxAssetSize?: number;
	/**
	 * Total size of an entry point (in bytes)
	 */
	maxEntrypointSize?: number;
}
/**
 * Stats options object
 */
export interface StatsOptions {
	/**
	 * fallback value for stats options when an option is not defined (has precedence over local webpack defaults)
	 */
	all?: boolean;
	/**
	 * add assets information
	 */
	assets?: boolean;
	/**
	 * sort the assets by that field
	 */
	assetsSort?: string;
	/**
	 * add built at time information
	 */
	builtAt?: boolean;
	/**
	 * add information about cached (not built) modules
	 */
	cached?: boolean;
	/**
	 * Show cached assets (setting this to `false` only shows emitted files)
	 */
	cachedAssets?: boolean;
	/**
	 * add children information
	 */
	children?: boolean;
	/**
	 * Display all chunk groups with the corresponding bundles
	 */
	chunkGroups?: boolean;
	/**
	 * add built modules information to chunk information
	 */
	chunkModules?: boolean;
	/**
	 * add the origins of chunks and chunk merging info
	 */
	chunkOrigins?: boolean;
	/**
	 * add information about parent, children and sibling chunks to chunk information
	 */
	chunkRelations?: boolean;
	/**
	 * add root modules information to chunk information
	 */
	chunkRootModules?: boolean;
	/**
	 * add chunk information
	 */
	chunks?: boolean;
	/**
	 * sort the chunks by that field
	 */
	chunksSort?: string;
	/**
	 * Enables/Disables colorful output
	 */
	colors?:
		| boolean
		| {
				/**
				 * Custom color for bold text
				 */
				bold?: string;
				/**
				 * Custom color for cyan text
				 */
				cyan?: string;
				/**
				 * Custom color for green text
				 */
				green?: string;
				/**
				 * Custom color for magenta text
				 */
				magenta?: string;
				/**
				 * Custom color for red text
				 */
				red?: string;
				/**
				 * Custom color for yellow text
				 */
				yellow?: string;
		  };
	/**
	 * context directory for request shortening
	 */
	context?: string;
	/**
	 * add module depth in module graph
	 */
	depth?: boolean;
	/**
	 * Display the entry points with the corresponding bundles
	 */
	entrypoints?: boolean;
	/**
	 * add --env information
	 */
	env?: boolean;
	/**
	 * add details to errors (like resolving log)
	 */
	errorDetails?: boolean;
	/**
	 * add internal stack trace to errors
	 */
	errorStack?: boolean;
	/**
	 * add errors
	 */
	errors?: boolean;
	/**
	 * Please use excludeModules instead.
	 */
	exclude?: FilterTypes | boolean;
	/**
	 * Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions
	 */
	excludeAssets?: FilterTypes;
	/**
	 * Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions
	 */
	excludeModules?: FilterTypes | boolean;
	/**
	 * add the hash of the compilation
	 */
	hash?: boolean;
	/**
	 * add ids
	 */
	ids?: boolean;
	/**
	 * add logging output
	 */
	logging?: boolean | ("none" | "error" | "warn" | "info" | "log" | "verbose");
	/**
	 * Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions
	 */
	loggingDebug?: FilterTypes | boolean;
	/**
	 * add stack traces to logging output
	 */
	loggingTrace?: boolean;
	/**
	 * Set the maximum number of modules to be shown
	 */
	maxModules?: number;
	/**
	 * add information about assets inside modules
	 */
	moduleAssets?: boolean;
	/**
	 * add dependencies and origin of warnings/errors
	 */
	moduleTrace?: boolean;
	/**
	 * add built modules information
	 */
	modules?: boolean;
	/**
	 * sort the modules by that field
	 */
	modulesSort?: string;
	/**
	 * add information about modules nested in other modules (like with module concatenation)
	 */
	nestedModules?: boolean;
	/**
	 * show reasons why optimization bailed out for modules
	 */
	optimizationBailout?: boolean;
	/**
	 * add information about orphan modules
	 */
	orphanModules?: boolean;
	/**
	 * Add output path information
	 */
	outputPath?: boolean;
	/**
	 * add performance hint flags
	 */
	performance?: boolean;
	/**
	 * preset for the default values
	 */
	preset?: boolean | string;
	/**
	 * show exports provided by modules
	 */
	providedExports?: boolean;
	/**
	 * Add public path information
	 */
	publicPath?: boolean;
	/**
	 * add information about the reasons why modules are included
	 */
	reasons?: boolean;
	/**
	 * add information about runtime modules
	 */
	runtime?: boolean;
	/**
	 * add the source code of modules
	 */
	source?: boolean;
	/**
	 * add timing information
	 */
	timings?: boolean;
	/**
	 * show exports used by modules
	 */
	usedExports?: boolean;
	/**
	 * add webpack version information
	 */
	version?: boolean;
	/**
	 * add warnings
	 */
	warnings?: boolean;
	/**
	 * Suppress warnings that match the specified filters. Filters can be Strings, RegExps or Functions
	 */
	warningsFilter?: FilterTypes;
}
/**
 * Options for the watcher
 */
export interface WatchOptions {
	/**
	 * Delay the rebuilt after the first change. Value is a time in ms.
	 */
	aggregateTimeout?: number;
	/**
	 * Ignore some files from watching (glob pattern)
	 */
	ignored?: string | ArrayOfStringValues;
	/**
	 * Enable polling mode for watching
	 */
	poll?: boolean | number;
	/**
	 * Stop watching when stdin stream has ended
	 */
	stdin?: boolean;
}
/**
 * Multiple entry bundles are created. The key is the entry name. The value is an entry description object.
 */
export interface EntryStaticNormalized {
	/**
	 * An object with entry point description.
	 */
	[k: string]: EntryDescription;
}
/**
 * Normalized webpack options object
 */
export interface WebpackOptionsNormalized {
	/**
	 * Set the value of `require.amd` and `define.amd`. Or disable AMD support.
	 */
	amd?: Amd;
	/**
	 * Report the first error as a hard error instead of tolerating it.
	 */
	bail?: Bail;
	/**
	 * Cache generated modules and chunks to improve performance for multiple incremental builds.
	 */
	cache: CacheNormalized;
	/**
	 * The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.
	 */
	context?: Context;
	/**
	 * References to other configurations to depend on.
	 */
	dependencies?: Dependencies;
	/**
	 * Options for the webpack-dev-server
	 */
	devServer?: DevServer;
	/**
	 * A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
	 */
	devtool?: DevTool;
	/**
	 * The entry point(s) of the compilation.
	 */
	entry: EntryNormalized;
	/**
	 * Enables/Disables experiments (experiemental features with relax SemVer compatibility)
	 */
	experiments: Experiments;
	/**
	 * Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
	 */
	externals: Externals;
	/**
	 * Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value)
	 */
	externalsType?: ExternalsType;
	/**
	 * Options for infrastructure level logging
	 */
	infrastructureLogging: InfrastructureLogging;
	/**
	 * Custom values available in the loader context.
	 */
	loader?: Loader;
	/**
	 * Enable production optimizations or development hints.
	 */
	mode?: Mode;
	/**
	 * Options affecting the normal modules (`NormalModuleFactory`).
	 */
	module: Module;
	/**
	 * Name of the configuration. Used when loading multiple configurations.
	 */
	name?: Name;
	/**
	 * Include polyfills or mocks for various node stuff.
	 */
	node: Node;
	/**
	 * Enables/Disables integrated optimizations
	 */
	optimization: Optimization;
	/**
	 * Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
	 */
	output: Output;
	/**
	 * The number of parallel processed modules in the compilation.
	 */
	parallelism?: Parallelism;
	/**
	 * Configuration for web performance recommendations
	 */
	performance?: Performance;
	/**
	 * Add additional plugins to the compiler.
	 */
	plugins: Plugins;
	/**
	 * Capture timing information for each module.
	 */
	profile?: Profile;
	/**
	 * Store compiler state to a json file.
	 */
	recordsInputPath?: RecordsInputPath;
	/**
	 * Load compiler state from a json file.
	 */
	recordsOutputPath?: RecordsOutputPath;
	/**
	 * Options for the resolver
	 */
	resolve: Resolve;
	/**
	 * Options for the resolver when resolving loaders
	 */
	resolveLoader: ResolveLoader;
	/**
	 * Stats options object or preset name
	 */
	stats: Stats;
	/**
	 * Environment to build for
	 */
	target?: Target;
	/**
	 * Enter watch mode, which rebuilds on file change.
	 */
	watch?: Watch;
	/**
	 * Options for the watcher
	 */
	watchOptions: WatchOptions;
}
