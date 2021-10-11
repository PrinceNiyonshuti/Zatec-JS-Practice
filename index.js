console.log(`*********************** Question 1 ****************************`);
const footballPoints=(wins,draws,losses)=>{
  if(wins >= 0 && draws >= 0 && losses >=0 ){
    let win = wins * 3;
    let draw = draws * 1;
    let losse = losses * 0;
    const check =win+draw+losse;
    console.log(check);
  }else{
    console.log(`Please Make sure you didnt provide negative value`);
  }
  
}

footballPoints(3,4,2);
footballPoints(5,0,2);
footballPoints(0,0,1);

console.log(`*********************** Question 2 ****************************`);

const calculateFuel =(distance)=>{
  
  if(distance > 0){
    let fuel = distance * 5;
    if(fuel < 20){
      console.log(`20 litres`);
    }else{
      console.log(fuel);
    }    
  }else{
    console.log(`Please Make sure you provide Distance greater than 0`);
  }
}

calculateFuel(15);
calculateFuel(20);
calculateFuel(38);
calculateFuel(2);

console.log(`*********************** Question 3 ****************************`);

const acceptIntoCinema=(age,isSupervised)=>{
  if(age >= 15 || isSupervised){
    return true;
  }else{
    return false;
  }
}

acceptIntoCinema(12, true);
acceptIntoCinema(13, false);
acceptIntoCinema(16, false);

console.log(`*********************** Question 4 ****************************`);

const findIndex = (arr, str) => {
  let a;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== str) {
      a = i;
    } else {
      return i;
    }
  }
}

findIndex(["hi", "zatecd", "Rwandad", "trainingd"], "Rwandad");
findIndex(["iPhoned", "iPadd", "iMacd", "MacBook Aird"], "iPadd");
findIndex(["htmld", "cssd", "javascriptd", "tailwindcssd"], "cssd");
findIndex(["toyotad", "mercedes benzd", "volkswagend", "maclarend"], "toyotad");

console.log(`*********************** Question 5 ****************************`);

const serveDrinks=(age,session)=>{
  if(age >= 18 && !session){
    return true;
  }else{
    return false;
  }
}
serveDrinks(17, true);
serveDrinks(19, false);
serveDrinks(30, true);

console.log(`*********************** Question 6 ****************************`);

const sum=(num1,num2)=>{
  if(isNaN(num1) ){
    console.log(` "${num1}" is not a number`);
  }else if(isNaN(num2)){
    console.log(` "${num2}" is not a number`);
  }else{
    let add = num1+num2;
    console.log(add);
    const isInRange = add >=0 && add <=15 ? "yes , is in range of 0 to 15":"no , is not in range of 0 to 15"
    console.log(isInRange);
  }
}

sum(2,6);
sum(2,'zatec');
sum(-2,0);

console.log(`*********************** Question 7 ****************************`);

const multipleOfThree=()=>{
  let multiples='';
  for(let number=1; number <=40; number ++){
    if(number % 3 == 0){
      multiples += number +',';
    }
  }
  console.log(multiples);
}
multipleOfThree();

// console.log(`*********************** Question 8 ****************************`);
const chechEvenOrAdd=()=>{
  for (var x=0; x<=15; x++) {
    if (x % 2 == 0) {
      console.log(x + " is even");
    }
    else {
      console.log(x + " is odd");
    }
  }
}

chechEvenOrAdd();









console.log(`*********************** Question 9 ****************************`);

function calculateAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
console.log('My age is : ' + calculateAge("2000/03/23"));

console.log(`********************** Question 10 ****************************`);

function capitalize_Words(str)
{
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words('have fun'));


