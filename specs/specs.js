describe('coin', function() {
    it('takes $0.01 and returns 1 penny', function() {
        expect(coin(0.01)).to.eql([1,0,0,0]);
    });

    it('takes $0.02 and returns 2 pennies', function() {
        expect(coin(0.02)).to.eql([2,0,0,0]);
    });

    it('takes $0.05 and returns 1 nickel', function() {
        expect(coin(0.05)).to.eql([0,1,0,0]);
    });

    it('takes $0.06 and returns 1 penny and 1 nickel', function() {
        expect(coin(0.06)).to.eql([1,1,0,0]);
    });

    it('takes $0.07 and returns 2 pennies and 1 nickel', function() {
        expect(coin(0.07)).to.eql([2,1,0,0]);
    });

    it('takes $0.10 and returns 1 dime', function() {
        expect(coin(0.10)).to.eql([0,0,1,0]);
    });

    it('takes $0.17 and returns 1 dime, 1 nickel, 2 pennies', function() {
        expect(coin(0.17)).to.eql([2,1,1,0]);
    });

    it('takes $0.25 and returns 1 quarter', function() {
        expect(coin(0.25)).to.eql([0,0,0,1]);
    });

    it('takes $0.44 and returns 1 quarter, 1 dime, 1 nickel, four pennies', function() {
        expect(coin(0.44)).to.eql([4,1,1,1]);
    });

});
