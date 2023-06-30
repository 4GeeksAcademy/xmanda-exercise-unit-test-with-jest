const sum = (a,b) => {
    return a + b
};


const fromEuroToDollar = (valueInEuro) => {
    let valueInDollars = valueInEuro * 1.2;
    return valueInDollars;
}


const fromDollarToYen = (valueInDollars) => {
    let valueInYen = valueInDollars * (127.9/1.2);
    return valueInYen;
}


const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * (127.9/0.8);
    return valueInPound;
}


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};