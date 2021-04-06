// function user(){
//     console.log(this);
// }
// user()
// function emp(emp_id,emp_name,emp_sal,emp_desg,emp_city,emp_ed){
//     this.emp_id=emp_id;
//     this.emp_sal=emp_sal;
//     this.emp_city=emp_city;
//     this.emp_ed=emp_ed;
//     this.emp_name=emp_name;
//     this.emp_desg=emp_desg;
// }
// //Base constructor function
// var x=new emp(12,'Ashwin',2000,"Developer","Bengaluru","BTECH");
// console.log(x);
// let lang=["Js","Java","py","C#"];//Array literal
// console.log(lang.length);//length of lang variable
// console.log(typeof lang);
// let x="js,java,C#,php";
// console.log(typeof length);
//Array literal
// let users = ["ash","manu","Madhu","Girish","arurn"]
// console.log(users.length)
// console.log(users[2]);
// //Array Constructor
// let lang= new Array("JS","nodejs","reactjs","java","angular");
// console.log(lang)
// let ArrayConstructor =new Array();
// let Arrayliteral=[];
// console.log(ArrayConstructor);
// console.log(typeof ArrayConstructor);

// console.log(Arrayliteral);
// console.log(typeof Arrayliteral);//Object

// let str="ash";
// console.log(str);
// console.log(typeof str);
// // Check its an Array or not
// console.log(Array.isArray(ArrayConstructor));//true
// console.log(Array.isArray(Arrayliteral));//true
// console.log(Array.isArray(str));//false
// let arr=[];
// arr[0]="j"
// arr[1]="a"
// arr[2]="v"
// arr[3]="a"
// console.log(arr);
// let user = new Array();
// user[0]="C"
// user[1]="+"
// user[2]="+"
// console.log(user);

//Storing  arrays in another array
// let user=['ash','pradeep']
// let user1=['joseph','Deegpal']
// let store=[ "user",'user1']
// let combine;
// //Combine arrays 
// //Array helpers methonds
// //Array.prototype
// let total= store.concat(user1,user);
// console.log(total);

// let str="hello world"
// let array=["shashi"]
// let combine =str.concat(array);

// console.log(typeof combine );//string
// console.log(Array.isArray(Combine));//false

// let result=array.concat(str);
// console.log(result)
// console.log(typeof result);//object
// console.log(Array.isArray(result));//object

//Convert String into array


// let str="hello world i am an AAAA"
// console.log(str.length);
// console.log(typeof str);

// let convert=str.split("  ");
// console.log(convert);
// console.log(typeof convert);
// let year,msg;
// year=2024;
// if(year%4===0)
// {
//     msg="Given Year is leap year";
// }
// else{
//     msg="Given Year is not a leap year"
// }
// console.log(msg);
// let per,msg,score,s1,s2,s3,s4;
// s1=34;
// s2=55;
// s3=60;
// s4=40;
// score=s1+s2+s3+s4;
// per=(score/400)*100;
// if(s1>=35 && s2>=35 && s3>=35 && s4>=35)
// {
//     if(per>=75)
// {
//     msg="Grade A"
// }
//     else if( per>=60 )
// {
//     msg="Grade B";
// }
//     else if(per<60)
// {
//     msg="Grade C"
// }
// }
// else {
//     msg="Fail"
// }
// console.log(msg + " and the percentage is  "+per);
// let status;
// switch (status) {
//     case "accept"||"Accept":
//             console.log("Accepted");
//         break;
//     case "reject"||"Reject":
//             console.log("Reject");
//     default:
//             console.log();
//         break;
// }
// let date;
// date=8;
// switch (date) {
//     case 07:
//         console.log("Rose day");
//         break;
//     case 08:
//         console.log("Propose day");
//         break;
//     case 09:
//         console.log("Chocolate day");
//         break;
//     case 10:
//         console.log("Teddy day");
//         break;
//     case 11:
//         console.log("Promise Day");
//         break;
//     case 12:
//         console.log("Hug Day");
//         break;
//     case 13:
//         console.log("Kiss Day");
//         break;       
//     case 14:
//         console.log("Valentine's Day");
//         break;                    
//     default:    
//         console.log("Enter a date that is in Valentine week");
//         break;
// }
//WAP to print the numbers from 1 to 10
// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }
//print the values from 10 to 1
// j=10;
// for(let i=10;i>=1;i--)
// { 
    
//     console.log(i);
// }
//program to check if the number is even or not 
// var x=3;
// if(x%2===0)
// {   
//     console.log(x+" Is an even number");
// }
// else 
// {
//     console.log(x+" Is an odd number");
// }
//print all the even numbers from 1 to 10
//    for(let i=10; i>=1 ;i--)
// { 
//  if(i%2===0)
//  {
//     console.log(i);
//  }
// }
//WAP to check wheather a given a number is even or odd if it is even number print the number followed by is even number if odd print no followed with is odd number
// let x=30;
// if(x%2===0)
// {   
//     console.log(x+": Is an even number");
// }
// else 
// {
//     console.log(x+": Is an odd number");
// }
// //Display all the even numbers and odd numbers from 1 to 10 with a number followed by a apporiarte msg
//    for(let i=1; i<=10 ;i++)
// { 
//  if(i%2===0)
//  {
//     console.log(i+":is even number");
//  }
//  else{
//     console.log(i+":is odd number");
//  }
   
// }
// // for(let i=0;i<=array.length;i++)
// // {
// //     console.log(array[i]);
// // }
// // for loop as a Iterator object
// for(let x of array)
// {
//     console.log(x+" "+typeof x);
// }
// let args = function(){
//     for (let i of arguments)
//     {
//         console.log(i);
//     }
// };
// args("ash","chrome","vlc")
//---- For-each method
// array.forEach(function (value,index,array) {
//     console.log(array);
//     console.log(` ${index} 🙃 ${value} `);
// })
//arrow function
// array.forEach((value,index,array)=>console.log("🙃 "+value+`   ${index}`))
//array helper method map method
// Array.prototype.map(callbackfn);
// array.map((value,index,array)=>console.log("🙃 "+value+`   ${index}`))// react js uses map
// let x=['200','300']
// var y=x.map(function (value){
//     return value*2;
// });
// y.forEach(y=>)
// console.log(y);
// console.log(array);
// Function Getx(...rest){
//     return [rest].map(x=> x);
// }
// console.log(Getx('a','b','c'))
// var x=[10,20,200,100,1000]
// console.group(x);
// let xclone=x.map( value=> value * 2);
//     console.log(xclone);
    //push at the last in an array
    // var user=['s','d','m']
    // console.log(user)
    // user.push('e')
    // console.log(user)
    // //insert new value at the first postion in an array use array.prototype.unshift()
    // user.unshift('chombu')
    // console.log("----after unshift method---")
    // console.log(user);
    // //Delete last element in an array use pop()
    // console.log("--------------_AFter pop meth------------");
    // user.pop()
    // console.log(user);
    // console.log("---------------after shift----");
    // user.shift();
    // console.log(user);
// let r= function (name,...rest) {
   
//     return (name+rest);
//     return (typeof rest);
// }
// console.log(r("Ashwin",123,"mac",200,300,321312312312,3121));
// let a= funciton(function a( ) {
//     let sum=a+b;
//     return sum;
// })
// console.log(a(12,14));
// // console.log(array);
// // let deleted=array.splice(2);
// // console.log(deleted);
// console.log(array.lastIndexOf("java"));
// let filtercontent=array.filter((value , index , array)=>{
//     if(array.indexOf(value)=== index){
//         return value;
//     }
// })
// console.log(filtercontent);
// let age=["10","20","30","40","50"];
// let filterNEW=age.filter((value => value > 30 ))
// console.log(filterNEW(value))
// let filterlength = array.filter(word => word.length>6);
// console.log(filterlength(word));
// let array=["java","js","reactjs","java","nodejs","php"]
// let num=[10,20,30,40,50,560];
// // let num_sort = num.sort();
// // console.log(num);
// // console.log(num_sort);
// // let sortnumber = number.sort((a,b)=>{
// //     return a-b;
// // });
// // console.log(sortnumber)
// let arr_rev= array.reverse();
// console.log(arr_rev)
// console.log(num.reverse());
// let str="Ash";
// l
// let rev = str.split("");
// let rev_str=rev.reverse();
// let new_str=rev_str.join("");
// console.log(str +"-> "+rev +" -> " +rev_str +" -> "+ new_str);
// function ReverseString(str){
//     return [...str].reverse().join("")
// }
// console.log(ReverseString("shashi"));
// let getinput= prompt("pls enter the input values");
// document.write(`<h1>${ReverseString(getinput)}</h1>`)
//array.prototype.reduce()
// let num=[10,20,30,40,50,100]
// let total=num.reduce(function (accumulator,currentvalue) {
//     // console.log(accumulator);
//     // console.log(currentvalue);
//     return accumulator+currentvalue;
// });
// console.log(total);
// let reduceData =["s","h","a","h","i"]
// let result1 = reduceData.reduce(
//     (accumulator,currentvalue)=> accumulator+currentvalue
// );
// console.log(result1);
// function a (accumulator,currentvalue) {
    
//     return accumulator+currentvalue;}
// let total=prompt('Enter the values ');
// document.write(`<h1>${a(total)}</h1>`)
// console.log(total);
// let arr=["i","h","s","a","h","s"]
// let result=arr.reduce((accumulator,currentvalue)=> {
//     let x = accumulator +currentvalue ;
//     console.log(typeof x)
//     let reverseIt=[...x].reverse().join("");
//     return reverseIt

// })
// console.log(result)
//Array.prortype.reduceright()
// let result2=arr.reduceRight(
//     (accumulator,currentvalue)=> accumulator+currentvalue
// );
// console.log(result2)



// console.log(array[0][0]);
// // console.log(array[1,[1]]);
// array[1].forEach(x => console.log(x))
// let arr=array.reduceRight((accumulator,currentvalue)=> {
//     console.log(currentvalue);
//     return accumulator.concat(currentvalue);
//     }
// )
// console.log(arr);
// let result =arr.reduce(
//     (accumulator,currentvalue) => accumulator + currentvalue
// );
// console.log(result); 
// let array=[
//     [1,1],
//     ["m","a","n","i"],
//     [3,1],
//     [[[[[[[[[[[[10,20,0,2**2]]]]]]]]]]]]
// ]
// console.log(array);
// let result = array.flat(Infinity);
// console.log(result)
// let output =[...result].reduce(
//     (accumualtor,currentvalue)=> accumualtor+currentvalue
// );
// console.log(output)
////--------------------------------find method-------------------
// let num =[10,20,30,40,50,100,2005]
// let find= num.find((value)=> value >101);
// console.log(find);//50
// let lang =["java","js","python",]

// let result =lang.find(lang => {
// // console.log(lang);
// if(lang === "js")
//     console.log(lang+"  💣");

// })
// document.getElementById(`${lang}`).innerHTML="Hello";
////---------------using Constructor Array method using Fill
// let array= Array(1000);
// let array1= new Array(1000) 
// let array2= Array.of (1000);
// console.log(array);
// console.log(array1);
// console.log(array2)

// let value = array.fill("😃");
// console.log(value);
// let value1 = array1.fill("😃");
// console.log(value1);
// let value2 = array2.fill("😃");
// console.log(value2);
//array into iterable object (with key value pair )
//Array.prototype .entries()
// let array =['java','js','nodejs','reactjs']
// //index as key
// //valu as value 
// for(let x of array .entries()){
//     console.log(x)
// }
//---- Every method---
// let ages=[20,30,40,50,90]
// let isadult = ages.some(ages=> ages=> 18);
// console.log(isadult)
// if(isadult)
// {
//     console.log("All are eligble for vote");
// }
// else
// {
//     console.log("not eligble for vote")
// }
// ------ includes method
//Checks wheather the particular value is present or not 
// let array =["dinesh","ash","madhu"]
// // if (users.includes("dinesh")){
// //     console.log("dinesh is present")
// // }
// // else
// // {
// //     console.log("not present")
// // }
// // let users =["dinesh","ash","madhu"]
// // let sliceit=users.slice(0,2);
// // console.log(sliceit);
// //-------- Key and Values
// for(let key of array.values()){
//     console.log(key)    
// }
// for(let value of array.value()){
//     console.log(value);
// }
// let x ={
//     name : "ash" ,
//     age : 24 ,
//     company : "Qspider" ,
//     sal: 400000 ,
//     designation : "Devloper"
// }
// console.log(x);
// let username= x["name"];
// let age = x["age"];
// let company = x["company"]
// let sal = x["sal"]
// let desig =x["designation"]
// console.log(`My name is ${username} my age is ${age} i work in ${company} i am getting ${sal} my designation is ${desig}`);

// let usernmae =x.usernmae;
// let age=x.age;
// let company=x.company;
// let sal=x.sal;
// let desig= x.designation;
// onsole.log(`My name is ${username} my age is ${age} i work in ${company} i am getting ${sal} my designation is ${desig}`);
// let object={};//object literal
// object.name ="mani";
// object.age= 24;
// object.company="Jspiders";
// object.designation="node JS Developer";
// object.sal=400000;
// console.log(object);
// let user =new Object();
// user.name="Ash";
// user.age=23;
// user.designation="MERN stack Developer"
// user.company="Jspiders";
// object.sal=400000;
// console.log(user);
//Built in constructor
// let ash = function (name,age,company,sal,desig) {
//     console.log(this);
//     this.name=name;
//     this.age = age;
//     this.company = company;
//     this.sal=sal;
//     this.desig =desig;
// };
// // USer() custom constructor
// let mani= new ash("mani",20,"Qspiders",20000,"Nodejs Devloper")
// let dinesh = new ash("dinesh",20,"Jspiders",30000,"Fullstack developer")
// console.log(mani);
// console.log(dinesh);

// // new object();//built in Constructor
//Object method->>>>> combine
// let username= { username: "manu", username:"ash", password:"ash@123"};
// let password = { password: "manu@123"}
// let combine = Object.assign(username,password);
// console.log(combine);
//object iterator
// let x ={
//     name : "ash" ,
//     age : 24 ,
//     company : "Qspider" ,
//     sal: 400000 ,
//     designation : "Devloper"
// }

// for (let i in x){
//     // console.log(i);
//     console.log(`${i} => ${x[i]}`);
// }
////------------------temp Web
// let employee =[
//     {
//         emp_id:"01",
//         emp_photo:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//         emp_name:"ash",
//         emp_sal:400000,
//         emp_ed:"BCA",
//         emp_desig:"Front End Developer",
//         emp_city:"Bengaluru",

//     },
//     {
//          emp_id:"02",
//         emp_photo:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//         emp_name:"Mani",
//         emp_sal:500000,
//         emp_ed:"BTECH",
//         emp_desig:"NodeJs developer",
//         emp_city:"Mumbai",
//     },
//     {
//         emp_id:"03",
//         emp_photo:"https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTh8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//         emp_name:"shashi",
//         emp_sal:500000,
//         emp_ed:"BE",
//         emp_desig:"MERN stack",
//         emp_city:"Bengaluru",
//     },
//     {
//         emp_id:"04",
//         emp_photo:"https://images.unsplash.com/photo-1544723495-432537d12f6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTR8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//         emp_name:"Dinesh",
//         emp_sal:50000,
//         emp_ed:"BE",
//         emp_desig:"MEAN stack",
//         emp_city:"Bengaluru",
//     },

// ];
    // console.log(employees);
//     let output ="";

//     for (let emp of employee){
//         console.log(emp.emp_city)
//         output += `
//         <section>
//         <article>
//         <div>
//         <img src=${emp.emp_photo} alt =${emp.emp_name}/>
//         <h2>Name: ${emp.emp_name} </h2>
//         <p>Id: ${emp.emp_id}</p>
//         <p>Salary:${emp.emp_sal}</p>
//         <p>Education:${emp.emp_ed}</p>
//         <p>City: ${emp.emp_sal}</p>
//         <p>Designation:${emp.emp_desig}</p>
//         </div>
//         </article>
//         </section>
//         `;
//     }
// console.log(output);
// document.write(output);
// let users1= {
//     username:'Joseph',
//     lastname:"Paul",
//     Company:"Qspiders",
//     // userdetails: function (){
//     //     console.log(`My Name is ${this.username} and i work for ${this.Company}`);
//     // },
// };
// // console.log(users1.userdetails());
// let user2={
//     username:'Deegpal',
//     lastname:"Singh",
//     Company:"Jspiders",
// };
// let user3={
//     username:'Ash',
//     lastname:"Pradeep",
//     Company:"Google",
// };
// function getfullname(sal,desig){
//     return this.username+" "+this.lastname+"is working in "+this.Company+" "+sal+" "+desig;
// }
// console.log(getfullname.call(users1,300000,"ReactJs devloper"));
// console.log(getfullname.call(user2,350000,"node js Developer"));
// console.log(getfullname.call(user3,500000,"UI developer"));

// console.log(getfullname.apply(user3,[40000,"front end developer"]));//apply will work 
// user2.username;
// user2.company;
// user2.userdetails();
// let java={
//     course_name :"java",
//     duration:"4months",
// };
// let MERNSTACK={
//     course_name:"Javascript",
//     duration:"4 months"
// }
// function getcourse(...rest) {
//     return `Course name ${this.course} duration ${this.duration} and the rest of the skills used are ${rest},${rest}`
// }
// let java1=getcourse.call(java,"java","sql","spring","J2EE");
// let javascript=getcourse.call(MERNSTACK,"HTML","CSS","REACTJS");
// console.log(java1);
// console.log(javascript);
// let javascript
// let java1=getcourse.apply(java,["java","sql","spring","J2EE"]);
// let javascript=getcourse.apply(MERNSTACK,["HTML","CSS","REACTJS"]);
// console.log(java1);
// console.log(javascript);
// let bound =getcourse.bind(MERNSTACK,"shashi","html","css");
// console.dir(bound);
// console.log(bound());
// let numbers ={
//     num1 :100
// };
// function calculate(num2,num3) {
//     return this.num1+num2+num3;
// }
// let result = calculate.call(numbers,10,10);
// console.log(result);

// let result_apply=calculate.apply(numbers,[10,20])
// console.log(result_apply);

// let result_bind=calculate.bind(numbers,10,30)
// console.log(result_bind);
// console.log("Hello World")
// document.write(result)

// let obj1={name:"ash"}
// let obj2={age:23}
// let combine_assign=Object.assign(obj1,obj2);
// console.log(combine_assign);
// let combine_spread={...obj1,...obj2};
// console.log(combine_spread);
////-------------------------Widow Objects ---------
// console.log(window.document);
// console.log(window.navigator);
// console.log(window.screen);
// console.log(window.history);
// console.log(window.location);

/////----------------navigator platform  for OS detection
// console.log(window.navigator.platform)
/////----------------- To find the Geo location
// console.log(window.navigator.geolocation.getCurrentPosition)
// function loc(){
//     if(window.navigator.geolocation){
//         window.navigator.geolocation.getCurrentPosition(function (position){
//         console.log(position);
//         document.write(
//             `My current latitude <h1>${position.coords.latitude}</h1>
//              My current longitude <h1>${position.coords.longitude}</h1>
//             `
//         );
//     });
//     }
//     else {
//         console.log(`Geolocation is not supported by the browser..`);
//     }
// }
// loc();
//-----------------_Navigator Online 
// console.log(window.navigator.online);
// if(window.navigator.online===true)
// {
//     document.write(
//         `hey i am  <h1 style="color:green">Online</h1>`
//     );
// }
// else 
// document.write(
//     `hey i am <h1 style="color:red">Offline</h1>`
// )
///// Window.navigator.getUserMedia
// window.navigator.getUserMedia=window.navigator.getUserMedia|| window.navigator.webkitgetUserMedia;
// if( window.navigator.getusermedia){
//     window.navigator.getUserMedia(
//     {audio:true ,video:{height:500 ,wdith:600}  },
//     (stream)=>{
//         let video =document.querySelector("video");  
//         video.srcObject=stream;
//         video.onloadedmetadata=function () {
//             video.play();
//         }
//     },//scuess callack
//     err=>{
// console.log(err.name);
//     }
//     )
//}//erroorcallback
// else{
//      alert("usermedia is not supported by browser");
//     }
// console.log(window.navigator.vendor);
// console.log(window.navigator.language);
// console.log(window.navigator.appCodeName)
// console.log(window.navigator.product)
// console.log(window.navigator.javaEnabled)
// console.log(window.navigator.cookieEnabled)
// console.log(window.navigator.userLanguage)
// let a=2,b=3;
// console.log(a*b);
// Video stream
// window.navigator.getUserMedia = window.navigator.getUserMedia || window.navigator.webkitgetusermedia;
// if (window.navigator.getUserMedia) {
//     window.navigator.getUserMedia({ audio: true, video: { height: 500, width: 500 } },
//         function (stream) {
//             let video = document.querySelector('video');
//             video.srcObject = stream;
//             video.onloadedmetadata = function () {
//                 video.play();
//             }
//         }, // success callback
//         function (err) {
//             console.log(err.name);
//         } // error callback
//     );
// }
// else {
//     console.log("user media is not supported by browser");
// }

// window.navigator.getUserMedia = window.navigator.getUserMedia || window.navigator.webkitgetusermedia;
// if (window.navigator.getUserMedia) {
//     window.navigator.getUserMedia({ audio: true, video: { height: 500, width: 500 } },
        
//    stream=>{
//         let ash = document.querySelector(`video`);  
//         ash.srcObject=stream;
//         ash.onloadedmetadata=function () {
//             ash.play();
//         }
//         }, // success callback
//         function (err) {
//             console.log(err.name);
//         } // error callback
//     );
// }
// else {
//     console.log("user media is not supported by browser");
// }
//--------------------- Screen Object 
// console.log(window.screen.width);
// console.log(window.screen.height);
// console.log(window.screen.colorDepth);
// console.log(window.screen.pixelDepth);
// console.log(window.screen.availWidth);
// console.log(window.screen.availHeight);
// -------------------------- Screen width
// if (window.screen.width < 1024){
//    console.log("Low res...") 
// }
// else 
// console.log("High res....")
////------History
// console.log(window.history.back())
// console.log(window.history.forward())
// window.history.back();
// window.history.length(1);
//---- Location
// console.log(window.location.href)//returns the location of object url
// console.log(window.location.protocol);
// if(window.location.protocol)
// {
//     console.log("web_server");
// }
// console.log(window.location.port);
// console.log(window.location.origin);//returns the location object url of the website
// console.log(winodow.location.pathname)//returns the location object urls back
// document.getElementById("btn").addEventListener("click"), e=> {
//     window.location.assign("https:google.com");
// }
//------------
// let allElements = document.all;
// console.log(allElements);
// console.dir(allElements);
// [...allElements].forEach(x=> console.log(x))
// console.dir(document)
// console.log(document.links)
// for (let a of document.links)
// {
//     console.log(a);
//     a.style.background ="red";
//     a.style.color="black";
//     a.style.display="inline";
//     a.style.padding="20px";
//     a.style.textDecoration="none";
//     a.style.margin="10px";
// }
// document.getElementById();
// document.getElementsByClassName
// document.getElementsByName
// document.querySelector()
// document.write();
// document.createElement();
// console.log();
// let block=document.getElementsByTagName("div");
// console.log(block);
// for(let b of block)
// {
//     console.log(b);
// }
// let demo= document.querySelector(".ash");
// let demo1= document.getElementsByClassName("ash")
// let demo2= document. getElementById("id");
// let demo3= document.querySelector(".id");
// console.log(demo);
// console.log(demo1);
// console.log(demo2);
// console.log(demo3);
// let block1= document.getElementsByTagName("div");
// [...block1].forEach(x => console.log(x))

// let block2= document.querySelectorAll("div")
// block2.forEach(x=>console.log(x));
// console.log(block1)
// console.log(block2);
// let hello= document.querySelector("#demo .block div")
// console.log(hello)
/// insert text
// let demo = document.getElementById("demo")
// demo.textContent="Using Dom properties"
// // demo.innerHTML="<h1> Javascript with DOM 🙃</h1>";
// // demo.innerText="<h1> Hello World</h1>"
// demo.style.background="crimson";
// demo.style.textTransform="uppercase";
// demo.style.transform=scale(2);
// demo.style.color="white";
// let doc= demo.getattribute("id");
// let cssClass=demo.getattribute("class");
// console.log(id);
// console.log(cssClass);
// let demo= document.getElementById("demo")

// demo.className="hello";
// demo.title="hello i am the title";
// //demo.setattribute("data-type","chombu")//Custom attribute name
// console.log(demo);
// demo.classList.add("qspiders","jspiders","pyspiders")
// demo.classList.remove("pyspiders")
// demo.style.background="blue";
// demo.addEventListener("click" ,e=>{
//     demo.classList.toggle("Jspiders");
//     demo.style.background="crimson";
// });
///to use js without using HTML
// let div=document.createElement("div")
// let form=document.createElement("form")
// div.textContent="i am div"
// form.textContent="i am form"
// console.log(div)
// console.log(form)

// console.log(demo);
// demo.prepand(div);
// demo.append(form);
////------------------------
// let form=document.createElement('form');
// form.setAttribute('method', 'GET');
// form.setAttribute('action', "#");

// ///input and label//😕
// let labelForUsername=document.createElement('label');
// label.setAttribute('for', username)

// let labelPassword=document.createElement('label');
// label.setAttribute('for', password);

// let inputForUsername=document.createElement('input');
// inputForUsername.setAttribute('type', 'text');
// inputForUsername.setAttribute('id', 'username');
// inputForUsername.placeholder="enter username";
// inputForUsername.name="username";

// let inputForPassword=document.createElement('input');
// // inputFortype.
// inputForUsername.setAttribute('id', 'username');
// inputForUsername.placeholder="enter username";
// inputForUsername.name="username";

// let divForUsername=document.createElement("div");
// let divForPassword=document

// let form = document.createElement('form');
// form.action= '#';
// form.method="GET";
// let div_username =document.createElement("div");
// let div_password= document.createElement("div");
// let div_button = document.createElement("div");

// form.appendChild(div_username);
// form.appendChild(div_password);
// form.appendChild(div_button);

// let label_username=document.createElement('label');
// let label_password=document.createElement('label');

// label_username.htmlFor = "username";
// label_password.htmlFor = "password";

// let input_username=document.createElement('input');
// let input_password=document.createElement('input');

// input_username.type ="text";
// input_password.type ="username";
// input_username.placeholder= "enter the username"
// input_username.name="username";

// input_password.type="password";
// input_password.id="password";
// input_password.placeholder="Enter the password";
// input_username.name="password";

// let button=document.createElement('button');
// button.textContent="login";

// div_username.appendChild(label_username);
// div_username.appendChild(input_username);

// div_password.appendChild(label_password);
// div_password.appendChild(input_password);

// div_button.appendChild(button);

// document.body.appendChild(form);

// let link  = document.getElementsByTagName("a");//html Collection

// for (let i = 0; i < link.length; i++) {
//     link[i].className="links link-"+ i;
    // link[i].className="link"+i;
    // link[i].style.padding="10px";
    // link[i].style.margin="10px";
    // link[]
// }


///------------------------- DOM events

// let btn = document.getElementById('btn');
// btn.onclick = function() {
//     console.log('button clicked.....😁')
// };

// btn.onmouseenter =function(){
//     console.log("mouse Entered.....")
//     document.body.style.backgroundColor="red";
// }
// btn.onmouseleave = function () {
//     console.log("mouse leaved....")
//     document.body.style.background="white";
// }
/*
Mouse Event
keyboard Event 
Submit  Event 
speech Event 
Submit Event
Onchange 
input
result 

*/


// let btn = document.getElementById('btn');
// btn.ondblclick = function (event) {
//     console.log("double me ")
//     console.log(`type of Event is ${event.type}`)
//     console.log(event);

// };
// btn.onclick =function (event) {
//     console.log(" single click...")
//     console.log(`type of Event is ${event.type}`)
//     console.log(event);
// };



/////--- first class

// how to create element in DOM
// let div = document.createElement("div");
// let form = document.createElement("form");
// let demo = document.getElementById("demo");
// div.textContent = "i am div"
// form.textContent = "i am form"
// console.log(div); 
// console.log(form);
// console.log(demo);
// demo.prepend(div); //it will print texts before those present in div
// demo.append(form); //it will print texts after the div element



// creating form using javascript and usinf append child and other html js properties
// let form = document.createElement('form');
// form.setAttribute('method','GET');
// form.setAttribute('action','#');

// let divForUsername = document.createElement("div");
// let divForPassword = document.createElement("div");
// let divForButton = document.createElement("div");

// form.appendChild(divForUsername);
// form.appendChild(divForPassword);
// form.appendChild(divForButton);

// let labelForUsername = document.createElement('label');
// let labelForPassword = document.createElement('label');

// labelForUsername.htmlFor = "username";
// labelForPassword.htmlFor = "password";

// let inputForusername = document.createElement('input');
// let inputforPassword = document.createElement('input');

// inputForusername.type = "text";
// inputForusername.id = "username";
// inputForusername.placeholder = "enter username";
// inputForusername.name = "username";

// inputforPassword.type = "password";
// inputforPassword.id = "password";
// inputforPassword.name = "password";
// inputforPassword.placeholder = "enter password";

// let button = document.createElement('button');
// button.textContent = "login";

// divForUsername.appendChild(labelForUsername);
// divForUsername.appendChild(inputForusername);
// divForPassword.appendChild(labelForPassword);
// divForPassword.appendChild(inputforPassword);
// divForButton.appendChild(button);

// console.log(form);
// document.body.appendChild(form)

// let input = document.getElementById("input");
// let username=document.getElementById('username');
// let password=document.getElementById('password');
// let template=document.getElementById('template');
// let form=document.getElementById('form');

// form.addEventListener('submit',e=>{
//     e.preventDefault();
//     console.log(username.value);
//     console.log(password.value);
// })
let user2={
    username:'Deegpal',
    lastname:"Singh",
    Company:"Jspiders",
};
function getfullname(sal,desig){
    return this.username+" "+this.lastname+"is working in "+this.Company+" "+sal+" "+desig;
}
console.log(getfullname.call(user2,300000,"ReactJs devloper"));
console.log(getfullname.apply(user2,[2000,"IBM"]));
let returnbind=getfullname.bind(1000,"");
console.log(returnbind());