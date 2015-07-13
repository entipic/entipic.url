'use strict';

var assert = require('assert');
var url = require('../index.js');

describe('url', function() {
	it('() - no params', function() {
		assert.throws(function() {
			url();
		});
	});

	it('(1) - wrong `name` param', function() {
		assert.throws(function() {
			url(1);
		});
		assert.throws(function() {
			url('a 	');
		});
		assert.throws(function() {
			url(new Date());
		});
	});

	it('("name", 2) - wrong `size` param', function() {
		assert.throws(function() {
			url('name', 2);
		});
		assert.throws(function() {
			url('name 	', 'cai');
		});
		assert.throws(function() {
			url('name', 'u');
		});
	});

	it('("name") - just name', function() {
		assert.equal(url('name'), 'http://i.entipic.com/name.jpg');
		assert.equal(url('Title Name'), 'http://i.entipic.com/Title%20Name.jpg');
	});

	it('("name", "a", "en", "us") - all params', function() {
		assert.equal(url('name', 'a', 'en', 'us'), 'http://i.entipic.com/en-us/a/name.jpg');
	});

	it('("name", "en", "us") - all variants', function() {
		assert.equal(url('name', 'en', 'us'), 'http://i.entipic.com/en-us/name.jpg');
		assert.equal(url('name', 'en'), 'http://i.entipic.com/en/name.jpg');
		assert.equal(url('name', 'c', 'en'), 'http://i.entipic.com/en/c/name.jpg');
		// assert.equal(url('Brack Obama'), 'http://i.entipic.com/en/c/name.jpg');
	});

});