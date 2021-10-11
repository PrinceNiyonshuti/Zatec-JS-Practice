# Zatec-JS-Practice

ZATEC ASSIGNMENT
JAVASCRIPT OBJECTS
1) Create a function that takes a number of wins, draws and losses and calculates the number
of points a football team had obtained so far.
 Wins get 3pts.
 Draws get 1 point
 Losses get 0 points
- footballPoints(3, 4, 2) => 13,
- footballPoints(5, 0, 2) => 15,
- footballPoints(0, 0, 1) => 0
Notes: Inputs will be numbers greater than or equal to 0.
2) Create a function which calculates the amount of fuel it needs, once given the distance. If a
car needs 5 times the amount of fuel than the distance it travels but it must always carry a
minimum of 20litres fuel before starting.
- calculateFuel(15) => 75,
- calculateFuel(20) => 100,
- calculateFuel(38) => 190
Notes
 Distance will be a number greater than zero.
 Return 20litres if the calculated fuel turns out to be less than 20litres.
3) Write a function that checks whether a kid can watch an MA15+ rated movie. For
admittance, one of the following conditions needs to be met:
 The person is at least 15 years old.
 They have parental supervision.
 The function accepts 2 parameters, age and isSupervised. Return a Boolean.
- acceptIntoCinema(12, true) => true,
- acceptIntoCinema(13, false) => false,
- acceptIntoCinema(16, false) => true
Notes
 isSupervised is a Boolean
ZATEC ASSIGNMENT
4) Create a function that takes an array and a string as arguments and return the index of the
string.
- findIndex([“hi”, “zatec”, “Rwanda”, “training”], “Rwanda”) => 2,
- findIndex([“iPhone”, “iPad”, “iMac”, “MacBook Air”], “iPad”) => 1,
- findIndex([“html”, “css”, “javascript”, “tailwindcss”], “css”) => 3,
- findIndex([“toyota”, “mercedes benz”, “volkswagen”, “maclaren”], “toyota”) => 0
Notes
 Don’t forget to return the result.
 If you are stuck, you can read more about Array.prototype.indexOf().
5) Write a program for a bartender, where he only serves drinks to adults and when he’s not on
a break session. Given the person’s age, and whether break time is in session, create a
function which returns whether he should serve drinks.
- serveDrinks(17, true) => false,
- serveDrinks(19, false) => true,
- serveDrinks(30, true) => false
Notes
 Return true or false.
 Some countries have a slightly higher drinking age, but for the purposes of this
challenge, it will be 18years old.
6) Write a function for:
 (i) Pass in 2 numbers, and print the sum.
sum(2,6) needs to return 8
 (ii) Validate if a number is in the range of 0 - 15.
Needs to return true or false
 (iii) Using the same code above, allow the possibility of entering a value aside from
numbers and prompt a response.
Hint: You can use NaN
7) Display all multiple of 3 numbers in the range 0 - 40.
Needs to return 3, 6, 9, etc.
8) Iterate from 0 - 15 and check if the current number is odd or even.
Return 1 => odd, 2 => even
9) Calculate your age.
Hint: You can use Date
10) Capitalize the first letter of the word in a string.
- have fun => Have Fun
