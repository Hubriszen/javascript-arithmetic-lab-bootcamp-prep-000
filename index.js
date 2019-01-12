add(1+80)
subtract(60-40)
multiply(2*3.4)
divide

var number=6
parseInt('nonsense!', 10)
parseInt('2.2222', 10)
parseFloat('80.123999')
makeInt(22)
PreserverDecimal()

function roughScale(x, base) {
  var parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0 }
  return parsed * 100;
}

console.log(roughScale(' 0xF', 16));
// expected output: 1500

console.log(roughScale('321', 2));
// expected output: 0

