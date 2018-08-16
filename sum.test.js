function sum(a,b){
  return parseFloat(a, 10) + parseFloat(b, 10);
}

function divide(){
  // Write test for divide
}

function calculate(){
  // Write test for calculate
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