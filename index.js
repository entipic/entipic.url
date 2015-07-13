(function(definition) {
	'use strict';

	// This file will function properly as a <script> tag, or a module
	// using CommonJS and NodeJS or RequireJS module formats.  In
	// Common/Node/RequireJS, the module exports the entipicUrl API and when
	// executed as a simple <script>, it creates a entipicUrl global instead.

	// CommonJS
	if (typeof exports === 'object' && typeof module === 'object') {
		module.exports = definition();

		// RequireJS
	} else if (typeof define === 'function' && define.amd) {
		define(definition);

	} else if (typeof window !== 'undefined' || typeof self !== 'undefined') {
		// Prefer window over self for add-on scripts. Use self for
		// non-windowed contexts.
		var global = typeof window !== 'undefined' ? window : self;

		global.entipicUrl = definition();

	} else {
		throw new Error('This environment was not anticipated by entipicUrl.');
	}

})(function() {
	'use strict';

	/**
	 * Temp host
	 */
	var HOST = 'http://i.entipic.com';
	var SIZES = ['z', 'a', 'b', 'c', 'd', 'e'];


	function isString(target) {
		return typeof target === 'string';
	}

	function isUndefined(target) {
		return typeof target === 'undefined';
	}

	function isObject(target) {
		return typeof target === 'object';
	}

	function url(options) {
		if (!isString(options.name) || options.name.trim().length < 2) {
			throw new Error('Entipic `name` param is invalid!');
		}
		var parts = [HOST];
		var culture;

		if (isString(options.size)) {
			if (options.size.length === 2) {
				options.country = options.lang;
				options.lang = options.size;
				delete options.size;
			}
		}

		if (!isUndefined(options.lang)) {
			if (!isString(options.lang) || options.lang.length !== 2) {
				throw new Error('Entipic `lang` param is invalid!');
			}
			culture = options.lang.toLowerCase();
			if (!isUndefined(options.country)) {
				if (!isString(options.country) || options.country.length !== 2) {
					throw new Error('Entipic `country` param is invalid!');
				}
				culture += '-' + options.country.toLowerCase();
			}
			parts.push(culture);
		}

		if (!isUndefined(options.size)) {
			if (!isString(options.size) || SIZES.indexOf(options.size) < 0) {
				throw new Error('Entipic `size` param is invalid!');
			}
			parts.push(options.size);
		}

		options.name = options.name.trim();
		options.name = encodeURIComponent(options.name);
		parts.push(options.name);

		return parts.join('/') + '.jpg';
	}

	var entipicUrl = function entipicUrl(name, size, lang, country) {
		if (isObject(name)) {
			return url(name);
		}

		return url({
			name: name,
			size: size,
			lang: lang,
			country: country
		});
	};

	entipicUrl.picture = function(id, size) {
		if (!isString(id)) {
			throw new Error('Entipic `id` param is invalid!');
		}
		var parts = [HOST, 'picture'];
		if (!isUndefined(size)) {
			if (SIZES.indexOf(size) < 0) {
				throw new Error('Entipic `size` param is invalid!');
			}
			parts.push(size);
		}
		parts.push(id);

		return parts.join('/') + '.jpg';
	};

	return entipicUrl;
});
