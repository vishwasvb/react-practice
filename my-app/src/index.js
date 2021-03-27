//Let Keyword
//let - block scoped

function sayHello(){
  for(let i = 0;i<5;i++)
    console.log(i);
  console.log(1);
}
sayHello();


//------------------------------------------------------

//Var keyword
//var - function scoped

function sayHello(){
  for (i = 0 ; i < 5 ; i++)
    console.log(i);
  console.log(i);
}
sayHello();


//-------------------------------------------------------

//Const keyword
//const - block scoped

const x = 1;
x = 2;
console.log(x);


//-------------------------------------------------------
                 //Objects

const person = {
  name:'Vishwas',
  walk:function(){  //Js Syntax
    console.log('Walk');
  },
  talk(){   //ES6 Syntax
    console.log('Talk');
  }
};

person.name = 'Vikas';
const targetName = 'name';
person[targetName] = 'Shiva';

console.log(person[targetName]);

//We use bracket notation when we don't know the property or the method we are using

console.log(person);

person.talk();


//----------------------------------------------------------
              //This Keyword

const person = {
  name: 'Vishwas',
  walk(){
    console.log(this);
  }
};

person.walk();
// const walk = person.walk;

const walk = person.walk.bind(person); //Solution to reference the person object instead global object

// console.log(walk);
walk() //Standalone function
//when we call a function as a standalone function outside of an object, this by default return a reference to an
//global object (Window object),
//and if the strict mode is enabled, it is undefined

//strict mode is enabled by default

//------------------------------------------------------------
                //Arrow functions

//Normal functions
const square = function(number){
  return number * number;
}

//Arrow function 
const square = number => number * number;

console.log(square(5));

//Uses of Arrow functions

const jobs= [
  {id: 1, isActive: true},
  {id: 2, isActive: true},
  {id: 3, isActive: false}
]

//normal function
// const activeJobs = jobs.filter(function(job){
//         return jobs.isActive;
// });

//Arrow function

const activeJobs = jobs.filter(job=> job.isActive);

console.log(activeJobs);


//this Keyword with arrow functions

const person = {
  talk(){
    console.log('This',this);
  }
}

person.talk();

//another way of using person object reference
const person = {
  talk(){
    var self = this;
    setTimeout(function(){
      console.log('this',self);
    },1000)
  }
}

//another way of using person object reference using arrow function

const person = {
  talk() {setTimeout(()=>console.log('this',this),1000) }
}

person.talk();


// Array.Map Method

const colors = ['red','green','blue'];

colors.map(function(color){
  return '<li>' + color +'</li>';
});

//using arrow functions

colors.map(color => '<li>' +color+ '</li>');

//using template literls

const items = colors.map(color => `<li>${color} </li>`);
console.log(items);


//------------------------------------------------------------------------------------------------------
                                //Object Destructuring

const address = {
  street: '',
  city: '',
  country:''
};

const street = address.street;
const city = address.city;
const country = address.country;

const {street,city,country} = address; //object DeStructuring
const {street: st, city: ct,country: count} = address; // object DeStructuring with alias

//---------------------------------------------------------------------------------------------------------
                                //Spread Operator

const first = [1,2,3,4];
const second = [4,5,6];

//const combined = first.concat(second)

//---------------------------------------------------------------------------------------------------------
                                //Class