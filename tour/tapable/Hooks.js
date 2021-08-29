class Hook {
	constructor() {
		this.taps = [];
	}
	tap(fn) {
		this.taps.push(fn);
	}
	call(done) {
		for (let i = 0; i < this.taps.length; i++) {
			const fn = this.taps[i];
			fn();
		}
		done();
	}
	callBail(done) {
		for (let i = 0; i < this.taps.length; i++) {
			const fn = this.taps[i];
			const res = fn();
			if (res !== undefined) {
				done();
				return;
			}
		}
		done();
	}
	callWaterfall(done) {
		let res = "init value";
		for (let i = 0; i < this.taps.length; i++) {
			const fn = this.taps[i];
			const r = fn(res);
			if (r !== undefined) {
				res = r;
			}
		}
		done(res);
	}
	callLoop(done) {
		for (let i = 0; i < this.taps.length; ) {
			const fn = this.taps[i];
			const res = fn();
			i = res !== undefined ? 0 : i + 1;
		}
		done();
	}
}

const sh = new Hook();

let count = 0;
function random() {
	return Math.floor(Math.random() * 10) + "";
}
let res = "777";
sh.tap(a => {
	count++;
	console.log("I am trying one");
	if (res[0] !== random()) {
		return true;
	}
});
sh.tap(a => {
	count++;
	console.log("I am trying two");
	if (res[1] !== random()) {
		return true;
	}
});
sh.tap(a => {
	count++;
	console.log("I am trying three");
	if (res[2] !== random()) {
		return true;
	}
});

sh.callLoop(error => {
	console.log(count);
});

// const hook = new Hook();
// let i = 0;
// hook.tap(() => {
// 	console.log("one");
// 	i++;
// 	if (i < 2) {
// 		return "continue";
// 	}
// });
// hook.tap(v => {
// 	console.log("two");
// 	i++;
// 	if (i < 5) {
// 		return "continue";
// 	}
// });
// hook.tap(v => {
// 	console.log("three");
// 	i++;
// 	if (i < 8) {
// 		return "continue";
// 	}
// });
// hook.callLoop(res => {
// 	console.log("done ", i);
// });
