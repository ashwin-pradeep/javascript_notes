// let input = document.getElementById("input");
// input.addEventListener("keyup",e=>{
//     if(e.keyCode === 13)
//     {
//         console.log(e.target.value);//value 
//     }
// });
// let text1=document.getElementById("text1");
// let text2=document.getElementById("text2");
// text1.addEventListener("keyup",e=>{
//      text2.innerHTML=e.target.value;
//      if(e.target.value.length >10){
//          text2.style.color="green";
//          text2.style.textTransform-"uppercase";
//      }
//      else if(e.target.value.length <10)
//      {
//          text2.style.color="red";
//      }
// });

///-------_Assignment convert this code into Switch case statement 
// window.SpeechRecognition = 
// window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = new SpeechRecognition();////this object can listen to the voice of the user 
// let p = document.createElement('p');
// let template = document.querySelectorAll('#template');
// template.appendChild(p);
// //DOM events 
// recognition.addEventListener("result",e => {
//   let transcript = console.log(e.results[0][0].transcript);
//   p.template.innerHTML = transcript;
//   p.innerHTML = transcript;
//   if(e.result[0].isFinal)
//   {
//       p = document.createElement("p");
//       template.appendChild(p);
//   }
//     console.log(recognition);
// });
// recognition.addEventListener("end",recognition.start);
// // //start Speech event

// recognition.start();
// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// // console.log(recognition); // speech recognition function

// let recognition = new SpeechRecognition();
// let p = document.createElement('p');
// let template = document.querySelector('#template');
// template.appendChild(p);

// // DOM Events

// recognition.addEventListener('result' , e => {
//     let transcript = e.results[0][0].transcript;
//     p.innerHTML = transcript;
//     // if we need to start speech recognition again after passing voice once
//     if(e.results[0].isFinal) {
//         p = document.createElement("p");
//         template.appendChild(p);
//     }
// });
// //Strings are in-mutable (because old values are )
// //Object is mutable 
// recognition.addEventListener("end" , recognition.start);
// // start speech event
// recognition.start();

//----------------------String helper methods
// String.prototype.charAt();
// String.prototype.charCodeAt();
// String.prototype.concat();
// String.prottotype.find();
// String.prototype.match();
// String.prototype.replace();
// String.prototype.search();
// String.prototype.toUpperCase();
// String.prototype.toLowerCase();
// String.prototype.substring();
// String.prototype.toLocaleLowerCase();
// String.prototype.toLocaleUpperCase();
// String.prototype.trim();
// String.prototype.valueOf();
// String.prototype.valueOf();
// String.prototype.startsWith();
// String.prototype.endsWith();
// String.prototype.search();
// let countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
// let output="";
// countries.foreach(country =>{
//     output +=`<option value=${country}>${country}</option>`;
// });
// document.getElementById("country").innerHTML=output;

///------Event Delegation is a simple technique by which add a single evnet handler to parent
// element in order to avoid event handlers to multiple child elements
// Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation

// EVENT DELEGATION ex

// let ul=document.getElementById("ul");
// ul.addEventListener("click",e=>{
//     console.log(e.target);
// });

//BUBBILING and CAPTURING
// let grandparent =document.getElementById("grandparent");
// let parent =document.getElementById("parent");
// let child =document.getElementById("child");

// grandparent.addEventListener("click",e=>
// {
//     console.log("Grandparent clicked.....😃")
// });
// parent.addEventListener("click",e=>
// {
//     console.log("parent clicked.....😃")
// });
// child.addEventListener("click",e=>
// {
//     e.stopPropagation();// TO stop bubling 
//     console.log("child clicked.....😃")
// });

/// BUBLING 
// when an event happens on an Element, it first runs the handlers on  it ,then on its parent then all the way of the other ancestor
//Stop Propagation method of the EVENT
//stopPropagation() The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed
// removing DOM elements 
//Without Button
// let ul = document.getElementById("ul");
// ul.addEventListener("click",e=>{
// console.log(e.target);
// e.target.remove();
// });
// with button
// let form= document.getElementById("form")
// let input=document.getElementById("input");
// let ul = document.getElementById("ul");

// ul.addEventListener("click",e=>{
// let span= e.target.children;
// console.log(span[0]);
// });

// let span=document.querySelectorAll("span");
// span.forEach(x=>{
//     x.addEventListener
// })
// let span ....
//Promises - it is der to perform Asycrounous Call Operation
//Browser States
//Fullfilled ,Rejected and Pending stage 
// let obj = new Object();//creation of oject
// let stringObject= new String();///String Object
// let promise = new Promise(()=>{});//Promise is an Object 
// let promise = new Promise ((resolve,reject)=>{
//     // console.log(resolve);
//     // console.log(reject);
//     let isAvailble = false;
//     if (isAvailble === true){
//         //Resolve block
//         resolve("Yes i am available");//then();
//     }
//     else{
//         //REject block
//         reject("yes i am not abvaible please try again ");//catch();
//     }
// });
//---Using Function call
// promise.then(function (data) {
//     console.log(data);
// });
// promise.catch(function (error) {
//     console.log(error);
// })
// console.log(promise)
//---using Method chaining 
// promise.then(data=>console.log(data)).catch(err=> console.log(err));
// setTimeout(function () {
//     console.log("hello i am settimeout function");
// },10000)
// setInterval (function () {
//     let date = new Date().toLocaleTimeString();
//     document.getElementById("time").innerHTML=date;
// },5000);
// window.clearInterval(function () {    
// },10000);
// let promsie = new Promise((resolve,reject)=>{
//     setTimeout(()=>
//     {
//         resolve("Connect to Uber ");
//     },101);
//     setTimeout(()=> {
//         reject("Unable to connect to Uber");
//     },9i19);
// });
/* Promise.all();*/
//asdadsasadadadaaasdadasdadasdadadaadasdaadasdasdasdadasdadadadadadddddddddddadad
//Promise.all([promise1,promise2,promise3]).then().catch()---> Final value will be showed in the form of an Array 
// let promise1= new Promise((resolve,reject)=>{
//     let a=true;
//     if(a)
//     {
//         resolve("Promise 1 is resolved");
//     }
//     else{
//         reject("Promise 1 is rejected")
//     }
// })
// let promise2= new Promise((resolve,reject)=>{
//         let a=false;
//     if(a)
//     {
//         resolve("Promise 2 is resolved");
//     }
//     else{
//         reject("Promise 2 is rejected")
//     }
// })
// let promise3= new Promise((resolve,reject)=>{
//         let a=false;
//     if(a)
//     {
//         resolve("Promise 3 is resolved");
//     }
//     else{
//         reject("Promise 3 is rejected");
//     }
// })
// Promise.any([promise1,promise2,promise3]).then(data=>console.log(data)).catch(err=>console.log(err));
// Promise.any->If all promise are rejected we will get aggregateError
// let shashi = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("shashi won")
//     },13000);
// })
// let mani = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Mani won")
//     },15000);
// })
// let dinesh = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Dinesh won")
//     },19000);
// })
// Promise.race([shashi,mani,dinesh]).then(data=>console.log(data)).catch(err=>console.log(err));

// Promise.allSettled([shashi,mani,dinesh]).then(data=>console.log(data)).catch(err=>console.log(err));
// let a="My name is",b;
// // b=a.substring(1,4);
// // console.log(b);
// // console.log(a.match());
// //match method
// if(a.match (/[a-d]/gi))//THE GIVEN PATTERN WILL CHECK IF THE VALUE GIVEN WILL BE alphanumeric or not 
// {
//     console.log(a);
// }
// else{
//     console.log("Invalid String")
// }
// //----Reapeat method 
// //it has 1 paramenter ie number of count 
// console.log(a.repeat(10))
// ///-----Replace method Important-->(splice,substr)
// //--2parameteres 
// console.log(a.replace("ashwin"," Pradeep"))
// console.log(a.split("",))///It will convert String into Array 
// console.log(a.startsWith(" ",0))
// //---Class ,Inheritance,Modules
// console.log(a.endsWith("n",4))//has 2 parameters 1st-- value 2nd -- number of string 
// console.log(a.indexOf("i "));
// console.log(a.includes("M",0))
// console.log(a.trim(2));
// console.log(a.toLowerCase());
// console.log(a.toUpperCase());
// console.log(a.valueOf());
// console.log(a.concat("this"," "))
// let lang=["js","nodejs","express js","Next js"]
// let [ ,...js]=lang///leaving only comma will result in skipping that specififc element
// console.log(js.join(" "));
// ///Assignment Speation from Declaration
// // A variable can be assigned to its value via destructuring ,seperate from the variable's declaration
// let a,b;
// [a,b]=[1,2];
// console.log(a);
// console.log(b);
// /// Array Destructing with Defult values
// let a1,b1;
// [a1=10,b1=20]=[40];
// console.log(a1,"a",b1,"b");
// /// A variable assigned a default  vlaues
// // swap variable 
// let a2= 2,b2= 4;
// console.log(a2,b2);
// [a2,b2]=[b2,a2];
// console.log(a2,b2);
// let users={
//     username:"mani",
//     age:22,
//     company:null,
//     sal:10n
// }
// let {age, ,...rest}=users;
// console.log(age);
//----DATE-----javascript Date object repsresents a single moment in time in a platofrom -independent format .Date Object contains a Number that respresenets milliseconds since 1 st Jan 1970 UTC
// let date= new Date(),time={
// month : date.getMonth(),
// year : date.getFullYear(),
// min : date.getMinutes(),
// sec : date.getSeconds(),
// milliseconds :date.getMilliseconds(),
// hour :date.getHours()
// }
// let {...rest}=time;
// console.log(rest,date);
// //--- LEarn moment JS
// //
// function DigitalClock(){
//     setInterval(() => {
//         let time= new Date().toLocaleTimeString();
//         document.getElementById("time").innerHTML=time;
//     //      let date =new Date();
//     //    let hour =date.getHours();
//     //   let  min=date.getMinutes();
//     //    let seconds=date.getSeconds();
//     // document.getElementById("time").innerHTML=`<h1>${hour}: ${min}: ${seconds}</h1>`;
//     }, 1000);
// }
// DigitalClock();
//--- Math function 
//max function it supplies the maximum  numeric expression 
// console.log(Math.max(100,10,1002,3000));
// //Min function it supplies the mininmum numeric expression
// console.log(Math.min(100,2,10000,20000));
// // The Math. ceil() function in JavaScript is used to 
// //round the number passed as parameter to its nearest integer in Upward direction of rounding i.e towards the greater value. Syntax Math.ceil(value) Parameters: This functions accepts a single parameter is the number to be rounded to its.
// console.log(Math.ceil(-1.3))//
// //In JavaScript, floor() is a function that is used to return the largest integer value that is less than or equal to a number. In other words, the floor() function rounds a number down and returns an integer value.
// console.log(Math.floor(0.02))
// //It returns the numerical part of the numeric expression x, removing any fractional digits,If x is already an integer the result is x
// console.log(Math.trunc(5.8));
// //Math random function
// let ran=Math.random()*100;
// /// It returns a supply numeric expression rounded to the nearest integer
// let random=Math.round(ran);
// console.log("random number is "+random);
//--------------To generate random numbers in JS-----------------------
// let btn= document.getElementById("btn");
// btn.addEventListener("click",e=>{
//     let random=Math.round(Math.random()*100+1);
//     document.getElementById("template").innerHTML=random;
// })
// Math.abs(-7.25);
// Math.sqrt(4);
// Math.pow(2,9);
// Web Storage
//  In google Chrome Borwser we can store 5 MB 
//  IE->10MB
// Local sotrage belongs to window object and local storage is a permanent storage 
//The localStorage and sessionStorage properties allow to save key/value pairs in a web browser. The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year. The localStorage property is read-only.
// window.localStorage.setItem();
// window.localStorage.getItem();
// window.localStorage.removeItem();
//Local storage is an items 
// window.localStorage.setItem("lang","javascript");
// window.localStorage.setItem("Framework","reactjs");

// document.getElementById("template").innerHTML=window.localStorage.getItem(
//     "frontend"
// );
// window.localStorage.removeItem("lang");
// let input = document.getElementById("input");
// let form=document.getElementById("form");
// form.addEventListener("submit",e=>{
//     e.preventDefault();
//     let value=input.value;
//     let key=input.value;
//     window.localStorage.setItem(key,value)
    
// });
// let lang=window.localStorage;
// let output ="";
//     for(let a in lang){
//         // console.log(a);
//         let finalData=localStorage.getItem(a);
//         if(finalData === null){
//             console.log("no Data");
//         }
//         else{
//             // console.log(finalData);
//             output +=`<li>${finalData}</li>`;
//         }
//     }
//     document.getElementById('template').innerHTML=output;
//-----------__Session Storage is 
//     window.sessionStorage.setItem("login","David");
//     console.log(window.sessionStorage.getItem("login"));
//     //Session storage is destroyed once the user closes the browser whereas, Local storage stores data with no expiration date. The sessionStorage object is equal to the localStorage object, except that it stores the data for only one session. ... All pages, from one domain, can store and access the same data.
// let a;
// --_______---- ES 6 Classes
//CLass may only have Constructor 
//Syntax of class
// class Users {
//      constructor(){
//          console.log('I am class')
//          console.log(typeof Users);
//      }
// }
// new Users();

// class User{
//     constructor (userId,userName,userSalary,userDesgination){
//         this.userId=userId;
//         this.userName=userName;
//         this.userSalaray=userSalary;
//         this.userDesgination=userDesgination;
//         // console.log(this);///Current Object of the class
//     }
//     static userName="I am shashi";
//     static details(){
//         console.log("I am detials block")
//     }
//     getDetails(){///Method
//         console.log(`my name ${this.userName}`);
//     }
// }

// let UserDetails = new User(123,"ash",2000,"ReactJs developer");
// let UserDetails1 = new User(123,"LOL",2000,"ReactJs developer");
// console.log(UserDetails);
// // for (let a in UserDetails)
// // {
// //     console.log(a);
// // }
// // User.userName;
// User.details();
// UserDetails.getDetails();
// UserDetails1.getDetails(); 
//Inheritance
// Js is only supporting class to class not interface to interface
//Base class
// class userObj{
//     constuctor(userName,password){
//         this.userName=userName;
//         this.password=password;
//     }
// }
// //Derived Class
// class User extends userObj{
//     constructor (userName,password,profile){
//         super(userName,password,profile);
//         this.profile = profile;
//     }
// }

// let ash= new User("ash","ash@2021","ashProfile")
// console.log(ash);
//Class--->Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
//Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.
// A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. (it can be retrieved through the class's (not an instance's) name property, though).

// Construcntor is the special method for creating and initializing an Object
// The static keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances
// Sub classing with extends
// The extends keyword is used in class declarations or class expressions to create a class as a child of another class.