/*
If *3 = Fizz
If *5 = Buzz
If 3* & 5* = FizzBuzz
If /3 = Fizz
If Contains 3 = Fizz
If /5 = Buzz
If Contains 5 = Buzz
*/

function sambuzz(i){
    for (var i=1; i < 101; i++){
        if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else if (i * 3 ==0) console.log("Fizz")
        else if (i * 5 ==0) console.log("Buzz")

        else if (i.valueOf(i).toString().indexOf("3") != -1) {
            // When i has the digit 3 in it, then print "Fizz"
            printed = true;console.log("Fizz");
        }

        else if (i.valueOf(i).toString().indexOf("5") != -1) {
            // When i has the digit 5 in it, then print "Buzz"
            printed = true;console.log("Buzz");
        }

        else console.log(i);
        return(i);
    }
}
module.exports = sambuzz;