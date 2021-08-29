const { SyncHook } = require("tapable");

class Ball {
	constructor(color, size) {
		this.color = color;
		this.size = size;
		this.hooks = {
			changeColor: new SyncHook("color"),
			changeSize: new SyncHook("size")
		};
	}

	changeColor()

}

const ball = new Ball("red", 40);
