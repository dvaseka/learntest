describe("pow", function() {
    
   describe("Check main functional", function() {
    
   before( function() {
       console.log("я уже 2 часа бьюсь с этими тестами");
   })
   
   after( function() {
       console.log("и вот наконец-то закончил")
   }) 
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
});
