'use strict';

var assert = require('assert');
var url = require('../index.js');

describe('picture', function() {
	it('() - no params', function() {
		assert.throws(function() {
			url.picture();
		});
	});

	it('(1) - wrong `id` param', function() {
		assert.throws(function() {
			url.picture(1);
		});
		assert.throws(function() {
			url.picture(new Date());
		});
	});

	it('("name", 2) - wrong `size` param', function() {
		assert.throws(function() {
			url.picture('name', 2);
		});
		assert.throws(function() {
			url.picture('name   ', 'cai');
		});
		assert.throws(function() {
			url.picture('name', 'u');
		});
	});

	it('("name") - just id', function() {
		assert.equal(url.picture('name'), 'http://i.entipic.com/picture/name.jpg');
	});

	it('("name", "a") - all params', function() {
		assert.equal(url.picture('name', 'a'), 'http://i.entipic.com/picture/a/name.jpg');
	});

});
