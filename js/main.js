/**
 * Write a program that prints the numbers from 1 to 100, but:
 *for multiples of 3 “Fizz” molds instead of the number
 *for multiples of 5 Buzz molds.
 *for numbers that are both multiples of 3 and 5 FizzBuzz molds.
 */

// VARIBLES
var listNumber = document.getElementById('list-number')
var number

for( var i=0; i<101; i++) {
    number = listNumber.innerHTML;

    if( i % 5 == 0 ) {
        listNumber.innerHTML = number + '<li>' + 'Buzz' + '</li>';
    } else if ( i % 3 == 0 ) {
        listNumber.innerHTML = number + '<li>' + 'Frizz' + '</li>';
    } else if ( i % 5 == 0 && i % 3 == 0 ) {
        listNumber.innerHTML = number + '<li>' + 'FrizzBuzz' + '</li>';
    } else {
        listNumber.innerHTML = number + '<li>' + i + '</li>';
    }
}