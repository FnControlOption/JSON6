'use strict';

const JSON6 = require( ".." );

const parse = JSON6.parse;
let o;

describe('Incomplete String Escape tests', function () {

	expect(function () {
		o = parse( "'\\x1'" );
		console.log( "got back:", o );
	}).to.throw(Error);

	it('Parses string octal escape followed by character', function () {
		const result = JSON6.parse( '"\\012"' );
		expect(result).to.equal('\0' + '12');
	});

	expect(function () {
		o = parse( "'\\u31'" );
		console.log( "got back:", o );
	}).to.throw(Error);

	expect(function () {
		o = parse( "'\\u{0'" );
		console.log( "got back:", o );
	}).to.throw(Error);

} );
