const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,

	AsyncParallelHook,
	AsyncParallelBailHook,

	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook,
	AsyncSeriesLoopHook
} = require("tapable");

const sh = new SyncLoopHook(["type"]);

let count = 0;
function random() {
	return Math.floor(Math.random() * 10) + "";
}
sh.tap("one", res => {
	count++;
	console.log("I am trying one");
	if (res[0] !== random()) {
		return true;
	}
});
sh.tap("two", res => {
	count++;
	console.log("I am trying two");
	if (res[1] !== random()) {
		return true;
	}
});
sh.tap("three", res => {
	count++;
	console.log("I am trying three");
	if (res[2] !== random()) {
		return true;
	}
});

sh.callAsync("777", error => {
	if (error) console.log(error);
	console.log(count);
});
