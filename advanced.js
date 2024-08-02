/* // Creating an object
const car = {
    brand: 'Toyota',
    model: 'Corrola',
    year: 2020,
    startEngine() {
        console.log('Engine started');
    }
};

//Using Object Properties and Methods
console.log(car.brand);
console.log(car.model);
car.startEngine();

//creating and manipulating an array
/* const fruits =['apple', 'banana', 'mango'];
fruits.push('orange');
console.log(fruits); */

// Creating an Object
/* const person = {
    name: 'John',
    age: '30',
    occupation: 'Software Engineer'
} */

//Accessing Object Properties
/* console.log(person.name);
console.log(person.occupation);  */

//Creating an Array

/* const fruits = ['apple', 'banana', 'cherry']; */

//Accessing Array Element

/* console.log(fruits[1]);

//Adding Elemnts to na Array
fruits.push('date');
console.log(fruits);


//Arrow function
const add = (a, b) => a + b;
console.log(add(2, 3));


//Destructuring Object
const person = {
    name: 'john',
    age: 40,
    occupation: 'Software Engineer'
};
const{name, age} = person;
console.log(name);

//Destructuring Array

const fruits = ['apple', 'banana', 'cherry'];
const [firstFruit, secondFruit] = fruits
console.log(firstFruit);

//Template literals
const message = `Hello, my name is ${name} and Iam ${age} years old`;
console.log(message); */


//call backs

function fetchData(callback) {
    setTimeout(() => {
        callback('Data Received');
    }, 1000);
}
fetchData((data) => {
    console.log(data); //data recieved
})


//Promises
const fetchDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data Receied');
    }, 1000);
});
fetchDataPromise.then((data) => {
    console.log(data);
});

//Async/Await
async function fetchDataAsync() {
    const data = await fetchDataAsync;
    console.log(data); //Data Received
}

fetchDataAsync();

//Working with DOM
//Selecting an Element by ID
const header = document.getElementById('header');
header.textContent = 'Welcome!';

//Selecting Element by CSS selector

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => (p.style.color = 'blue'));

//Event Handling: Adding Event Listeners, Creating Interactive Elements

//Adding a Click Event Listener
const button = document.querySelector ('button');
button.addEventListener('click', () => {
    alert('Button Clicked!');
});

//Adding Mouseover Event Listener
const image = document.querySelector('image');
image.addEventListener('mouseover', () => {
    image.style.boder = '2px solid red';
});