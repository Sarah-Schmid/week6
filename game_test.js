var expect = chai.expect;

/*
describe("MyFunctions", function () {
  describe("#checkCardValues", function () {
    it("should return true", function () {
      var x = checkCardValues("King");
      expect(x).to.equal(true);
    });

    it("should throw an error if x != values.indexOf(x)", function () {
      expect(function () {
        checkCardValues(13);
      }).to.throw(Error);
    });
  });
});



describe("MyFunctions", function () {
  describe("#cutDeckInHalf", function () {
    it("should cut deck in half", function () {
      var x = cutDeckInHalf(24);
      expect(x).to.equal(12);
    });
  });
});
*/

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("MyFunctions", function () {
  describe("#firstHalfOfArray", function () {
    it("should return the first half of the array", function () {
      var x = firstHalfOfArray(list);
      expect(x).to.equal([1, 2, 3, 4, 5]);
    });
  });
});
