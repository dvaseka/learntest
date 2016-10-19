describe("pow", function() {
   function makeTest(x) {
       var expected = x * x * x;
       it("возведение " + x + "в степень 3 должно давать значение " + expected, function() {
           assert.equal(pow(x, 3), expected);
       });
   }
    
    for (var x = 1; x <= 12; x++) {
        makeTest(x);
    }
});