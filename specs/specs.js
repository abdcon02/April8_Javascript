describe('romanNumeral', function() {
    it('takes 1 and returns I', function() {
        expect(romanNumeral(1)).to.equal('I');
    });

    it('take 5 return to V numeral', function(){
        expect(romanNumeral(5)).to.equal('V');
    });

    it('take 10 return to X numeral', function(){
        expect(romanNumeral(10)).to.equal("X");
    });

    it('take 50 return to L numeral', function(){
         expect(romanNumeral(50)).to.equal("L");
    });

    it('take 100 return to C numeral', function(){
         expect(romanNumeral(100)).to.equal("C");
    });

    it('take 500 return to D numeral', function(){
         expect(romanNumeral(500)).to.equal("D");
    });

    it('take 1000 return to M numeral', function(){
         expect(romanNumeral(1000)).to.equal("M");
    });

    it('take 2 return to II numeral', function(){
         expect(romanNumeral(2)).to.equal("II");
    });

    it('take 9 return to IX numeral', function(){
         expect(romanNumeral(9)).to.equal("IX");
    });

    it('take 48 return to XLVIII numeral', function(){
         expect(romanNumeral(48)).to.equal("XLVIII");
    });

    it('take 60 return to LX numeral', function(){
         expect(romanNumeral(60)).to.equal("LX");
    });

    it('take 99 return to XCIX numeral', function(){
         expect(romanNumeral(99)).to.equal("XCIX");
    });

    it('take 499 return to CDXCIX numeral', function(){
         expect(romanNumeral(499)).to.equal("CDXCIX");
    });

    it('take 2340 return to MMCCCXL numeral', function(){
         expect(romanNumeral(2340)).to.equal("MMCCCXL");
    });

    it('take 4300 return to Number is to large to be represented in Roman Numerals numeral', function(){
         expect(romanNumeral(4300)).to.equal("Number is to large to be represented in Roman Numerals");
    });

});
