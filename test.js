const { sum, fromEuroToDollar } = require('./app.js');

test ('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23)
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One dollar should be 153.48 yen", function(){
    const {fromDollarToYen} = require('./app.js')
    const yen = fromDollarToYen(5)
    const expected = 5 * (127.9/1.2);

    expect(fromDollarToYen(5)).toBe(532.9166666666667);
});

test("One yen should be 159.875 british pounds", function(){
    const {fromYenToPound} = require('./app.js')
    const yen = fromYenToPound(5)
    const expected = 5 * (127.9/0.8);

    expect(fromYenToPound(5)).toBe(799.375);
});