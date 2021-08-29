(function anonymous(name) {
	"use strict";
	var _context;
	var _x = this._x;
	return new Promise(function (_resolve, _reject) {
		var _sync = true;
		function _error(_err) {
			if (_sync)
				_resolve(
					Promise.resolve().then(function () {
						throw _err;
					})
				);
			else _reject(_err);
		}
		do {
			var _counter = 2;
			var _done = function () {
				_resolve();
			};
			if (_counter <= 0) break;
			var _fn0 = _x[0];
			_fn0(name, function (_err0) {
				if (_err0) {
					if (_counter > 0) {
						_error(_err0);
						_counter = 0;
					}
				} else {
					if (--_counter === 0) _done();
				}
			});
			if (_counter <= 0) break;
			var _fn1 = _x[1];
			_fn1(name, function (_err1) {
				if (_err1) {
					if (_counter > 0) {
						_error(_err1);
						_counter = 0;
					}
				} else {
					if (--_counter === 0) _done();
				}
			});
		} while (false);
		_sync = false;
	});
});
