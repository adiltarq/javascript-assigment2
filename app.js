// chap21-25 ----------------------------------------------------------------------------

// task 1
// var name = prompt("Enter your name ","First name");
// var fullname = prompt("Enter your name","Last name");
// alert("Hello " + name + " " + fullname);

// task2
// var mobile = prompt("Favourite mobile");
// var length = mobile.length;
// document.write("My favourite mobile is : " + mobile + "</br>" + "Length of string: " + length )

// task3
// var string = "Pakistani";
// var index = string.indexOf("n")
// document.write("String: " + string + "<br>" + "Index number of 'n': " + index)

// task4
// var string = "Hello World";
// var index = string.indexOf("l")
// document.write("String: " + string + "<br>" + "Last index of 'l': " + index)

// task 5
// var string = "Pakistani";
// var index = string.charAt(3)
// document.write("String " + string + "<br>" + "Character at index 3: " + index)

// task 6
// var name = "name "
// var lastname = "lastname"
// var concat = name.concat(lastname)
// document.write(concat)

// task7
// var city = "Hyderabad";
// var newCity = city.replace("Hyderabad","Islamabad");
// document.write("City: " + city + "<br>")
// document.write("After replacement: " + newCity )

// task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace("and","&")
// document.write(message1)

// task 9
// var value = 472;
// var value1 = value.toString();
// document.write("value: " + value1 + "<br>")
// document.write("Type: " + typeof value1 + "<br>")
// document.write("value: " + value + "<br>")
// document.write("Type: " + typeof value)

// task 10
// var input = prompt("Enter any thing","Peanut");
// var upperCase = input.toUpperCase();
// document.write("User input: " + input + "<br>" + "Upper Case: " + upperCase)

// task 11
// var input = prompt("Enter anyything","javascript");
// var input1 = input.charAt(0);
// input1 = input1.toUpperCase();
// input = input.slice(1)
// var input2 = input1.concat(input)
// document.write(input2)

// task 12
// var num = 35.36;
// var string = num.toString();
// var num1 = Math.floor(string)
// document.write(num1)

// task 13
// var username = prompt("Enter name","Username");
// var username1 = username.split()
// for(i=0 ; i < username.length ; i++){
//    if(username[i] == "!" || username[i] == "," || username[i] == "." || username[i] == "@")
//    alert("Please enter a valid username")
// }

// task 14
// var A = ["cake","apple pie","cookie","chips","patties"]
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am? ")
// for(i = 0 ; i < A.length ; i++){
//  if(search === A[i]){
//     alert(search + " is available at " )}
//     else{ alert("We are sorry " + search + " is not available in our bakery")}
// }

// task 15



// task 16
// var university = 'University of Karachi'
// var arr = university.split('')
// console.log(arr)
// for(i=0 ; i < arr.length ; i++){
//     document.write(arr[i] + "<br>")
// }

// task 17
// var userInput = "Pakistan";
// var lastCharOf = userInput.charAt(userInput.length -1)

// document.write("User input: " + userInput + "<br>" + "last Character Of input: " + lastCharOf)

// task 18
// var b = "The quick brown fox jumps over the lazy dog";
// var a = b.toLocaleLowerCase();
// var count = (a.match(/the/g) ).length;
// document.write("Text: The quick brown fox jumps over the lazy dog")
// document.write("<br> There are " + count + " occurrences of word 'the' " )



// chap 26-30

// task 1 
// var number = 3.45214;
// var round = Math.round(number)
// var floor = Math.floor(number)
// var ceil = Math.ceil(number)
// document.write("number: " + number + "<br>")
// document.write("round of value: " + round + "<br>")
// document.write("floor value " + floor + "<br>")
// document.write("ceil value " + ceil)

// task 2
// var num = 2.673;
// var number = -Math.abs(num)
// var round = Math.round(number)
// var floor = Math.floor(number)
// var ceil = Math.ceil(number)
// document.write("number: " + number + "<br>")
// document.write("round of value: " + round + "<br>")
// document.write("floor value " + floor + "<br>")
// document.write("ceil value " + ceil)

// task 3
// var number = -4
// var num = Math.abs(number)
// document.write("The absolute value of " + number + " is " + num)

// task 4
// var dice = Math.random()*6;
// var dice1 = Math.floor(dice);
// document.write("Random dice value is " + dice1);

// task 5 
// var num = Math.random()*2
// var a = Math.ceil(num);
// console.log(a)
// if(a === 1){
//     document.write(a + "<br> " + "random coin value: Heads")
// }else{
//     document.write(a + "<br> " + "random coin value: Tails")
// }

// task 6
// var num = Math.floor(Math.random()*99 ) + 1+9;
// document.write("random number between 1 and 100: " + num);

// task 7

// task 8
// var num = prompt("Enter a number between 1 and 10")
// if(num  == 5){
//     alert("Congratulations")
// }else if(num > 10) {
//     alert("Please only 1 to 10 value is allowed")
// }
// else{
//     alert("Try again")
// }


// chap 31-34

// task 1
// var date = new Date();
// document.write(date);

// task 2
// var month = ["Jan","feb","mar","apr","may","June","july","aug","sep","oct","nov","dec"]
// var a = new Date();
// var b = month[a.getMonth()]
// document.write("Current month "+ b)

// task 3
// var day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
// var a = new Date();
// var b = day[a.getDay()]
// document.write("Today is "+ b)

// task 4
// var day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
// var a = new Date();
// var b = day[a.getDay()]
// if(b === "Saturday" ||b === "Sunday" ){
// document.write("It's Fun day" )
// }

// task 5
// var date = new Date();
// var a = date.getDate()
// if(a < 16){
//     alert("first fifteen days of the month")
// }else if(a > 16){
//     alert("last fifteen days of the month")
// }

// task 6
// var date = new Date();
// var since;
// since = date.getTime();
// var min = since/(1000*60);
// document.write("Current date: " + date + "<br>")
// document.write("Elapsed milliseconds since January 1, 1970: " + since + "<br>")
// document.write("Elapsed minutes since January 1, 1970: " + min + "<br>")


// task 7
// var date = new Date();
// var time = date.getHours();
// if(time < 12){
//     alert("it's AM")
// }else{
//     alert("it's PM")
// }

// task 8
// var d = new Date(2020, 11, 31);
// document.write("Later Date : " + d);'

// task 9
// var d = new Date(2015, 7, 18).getTime();
// var e = new Date().getTime();
// var f = e - d;
// var g = Math.round(f / (1000 * 60 * 60 * 24));
// document.write(g + " days have passed since 1<sup>st</sup> Ramadan, 2015");

// task 10
// var d = new Date();
// var e = d.getTime();
// var f = new Date(2015, 0, 1).getTime();
// var g = e - f;
// var h = g / 1000;
// document.write("On refrence Date " + d + ", " + h + "seconds had passed since beginning of 2015");

// task 13
// var age = +prompt("Enter Your Age", "Enter Age");
// var d = new Date().getFullYear();
// var dif = d - age;
// document.write("Your age is : " + age + "<br>" + "Your birh Year is : " + dif);

// task 14
// var customerName = "ABC Customer"
// var month = new Date().getMonth();
// var numberOfUnits = 410;
// var perUnit = 16;
// var lateCharge = 350;
// document.write("<h1>K-Electric Bill </h1> <br>" )
// document.write("Customer Name : " + customerName + "<br>")
// document.write("Month : " + month + "<br>")
// document.write( "Number Of Units" + numberOfUnits + "<br>")
// document.write( "Charges per unit" + perUnit + "<br>" + "<br>")
// document.write("Net Amount Payable (Within Due Date): " + numberOfUnits*perUnit + "<br>")
// document.write("Let payment surcharge: " + lateCharge +"<br>")
// document.write("Gross Amount Payable (After Due Date): " + (numberOfUnits*perUnit+lateCharge) + "<br>")

// chap 35 - 38

// task 1
// function date(){
//     var a = new Date();
//     document.write(a)
// }
// date()

// task 2
// var firname = prompt("Enter Your First Name", "Enter Name");
// var lasname = prompt("Enter Your Last Name", "Enter Name");
// function greet() {
//   var i = firname + " " + lasname;
//   alert("Good Morning " + i);
// }
// greet();

// task3
// var num1 = +prompt("Enter First Number", "Enter Number");
// var num2 = +prompt("Enter Second Number", "Enter Number");
// function a() {
//   var a = num1 + num2;
//   alert(a);
// }
// a();

// task 4
// var num1 = +prompt("Enter First Number", "Enter Number");
// var opr = prompt("Enter Operator", "Enter Operator");
// var num2 = +prompt("Enter Second Number", "Enter Number");
// if (opr === "+") {
//   alert(num1 + num2);
// } else if (opr === "-") {
//   alert(num1 - num2);
// } else if (opr === "*") {
//   alert(num1 * num2);
// } else if (opr === "/") {
//   alert(num1 / num2);
// } else if (opr === "%") {
//   alert((num2 / num1) * 100 + "%");
// } else {
//   alert("Wrong Operator");
// }

// task 5
// var arg = +prompt("Enter Any Number", "Enter Number");
// var squ = arg ** 2;
// alert(squ);
// task 6
// var fact = +prompt("Enter Any Number", "Enter Number");
// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   }
//   return x * factorial(x - 1);
// }
// alert(factorial(fact));

// task 9
// var width = +prompt("Enter Width");
// var height = +prompt("Enter height");
// var A = width * height;
// alert(A);
// task 10
// var word = prompt("Enter Any Word", "Enter Word");
// var check = "";
// for (var i = word.length - 1; i >= 0; i--) {
//   check += word[i];
// }
// if (check === word) {
//   alert(word + " is palindrome word");
// } else {
//   alert(word + " is not a palindrome word");
// }