function fizzbuzz(i) {
    if (i % 3 == 0 && i % 5 == 0) {
      return 'FizzBuzz';
    } else if (i % 3 == 0) {
      return 'Fizz';
    } else if (i % 5 == 0) {
      return 'Buzz';
    } else {
      return i;
    }
  };

module.exports = fizzbuzz;

// Note, this confsued me, it seems were almost hard coding the awsners on the test runner? 
// I ended up making "sambuzz" where i done the conventional JS way of proggraming it.
