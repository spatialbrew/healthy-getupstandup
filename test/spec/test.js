/* global describe, it */
/* I'm not really creating any objects in this little app, so just borrowing cow.js in order to test drive Mocha for the first time 
   https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/
*/

(function() {
	'use strict';

	var expect = chai.expect;

	describe("Cow", function() {
		describe("constructor", function() {
			it("should have a default name", function() {
				var cow = new Cow();
				expect(cow.name).to.equal("Anon cow");
			});

			it("should set cow's name if provided", function() {
				var cow = new Cow("Kate");
				expect(cow.name).to.equal("Kate");
			});
		});

		describe("#greets", function() {
			it("should throw if no target is passed in", function() {
				expect(function() {
					(new Cow()).greets();
				}).to.throw(Error);
			});

			it("should greet passed target", function() {
				var greetings = (new Cow("Kate")).greets("Baby");
				expect(greetings).to.equal("Kate greets Baby");
			});
		});
	});
})();