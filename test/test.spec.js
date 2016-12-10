const should = require('chai').should()

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', () => {
        [1,2,3,4].indexOf(-1).should.equal(-1)
    })
  })
})