describe('numbersToWords', function() {
  it("returns 'one' if 1 is given", function() {
    numbersToWords(1).should.equal('one');
  });
  it("returns 'two' if 2 is given", function() {
    numbersToWords(2).should.equal('two');
  });
  it("returns 'twelve' if 12 is given", function() {
    numbersToWords(12).should.equal('twelve');
  })
});
