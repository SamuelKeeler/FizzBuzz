const fizzbuzz = require('./fizzbuzz');
const sambuzz = require('./sambuzz');

test('returns 1 for the number 1', () => {
    expect(sambuzz(1)).toEqual(1);
    console.log(sambuzz(i));
  });

test('returns 1 for the number 1', () => {
  expect(fizzbuzz(1)).toEqual(1);
});

test('returns "Fizz" for the number 3', () => {
  expect(fizzbuzz(3)).toEqual('Fizz');
});

test('returns "Fizz" for the number 9', () => {
  expect(fizzbuzz(9)).toEqual('Fizz');
});

test('returns "Buzz" for the number 5', () => {
  expect(fizzbuzz(5)).toEqual('Buzz');
});

test('returns "Buzz" for the number 10', () => {
  expect(fizzbuzz(10)).toEqual('Buzz');
});

test('returns "FizzBuzz" for the number 15', () => {
  expect(fizzbuzz(15)).toEqual('FizzBuzz');
});

test('returns "FizzBuzz" for the number 30', () => {
  expect(fizzbuzz(30)).toEqual('FizzBuzz');
});

test('returns "FizzBuzz" for the number 90', () => {
    expect(fizzbuzz(90)).toEqual('FizzBuzz');
  });

