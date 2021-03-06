function sum(a,b){
  return parseFloat(a, 10) + parseFloat(b, 10);
}

function divide(){
  // Write test for divide
}

// Write test for calculate
function calculate(a, operator, b){
  switch(operator){
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
  }
}


test('should add two numbers together', () => {
  const result = sum(10,10);
  expect(result).toBe(20);
});

test('one of the numbers is a float', () => {
  const result = sum(10.5, 10);
  expect(result).toBe(20.5);
});

test('both numbers are floats', () => {
  const result = sum(10.5, 10.5);
  expect(result).toBe(21);
});

test('one of the numbers is a string', () => {
  const result = sum("10", 10);
  expect(result).toBe(20);
});