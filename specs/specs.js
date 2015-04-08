describe('queenAttack', function() {
    it('is false if the coordinates are not horizantly, vertically, or diagonally in line with each other', function() {
        expect(queenAttack([1,1], [2,3])).to.equal(false);
    });


});
