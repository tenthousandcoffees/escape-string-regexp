
(function (global, factory) {
	'use strict';
	if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		global.escapeStringRegexp = factory();
	}
})(this, function () {
	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
	return function escapeStringRegexp(str) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}
		return str.replace(matchOperatorsRe, '\\$&');
	};
});
