//for (initialization; condition; increment) {
    // code to be executed}



    /*for (let i = 1; i <= 5; i++) {
        console.log(i);};*/

        /*const fruits =['apple', 'banana', 'cherry'];
        for(let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }*/

//while loop

/*while (condition) {
//code to be executed
}*/

/*let i = 1;
while (i <= 5) {
    console.log(i);
        i++;
}

const fruits = ['apple', 'banana', 'cherry'];
let index =0;
while (index < fruits.length) {
    console.log(fruits[index]);
    index+++;
}*/


//do while loop

/*do {
    //code to be executed
} while (condition);*/




//print number from 1 - 5

/*let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);*/


/*let i = 6;
do{
    console.log(i);
    i++
} while (i <=5 );*/


// Print numbers from 1 to 5, but stop when reaching 3

/*for (let i =1; i <=5; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}*/


//print numbers from 1 - 5, but skip 3

/*for (let i = 1; i<= 5; i++) {
    if (i===3) {
        continue;
    }
    console.log(i);
};*/


/* let i = 1;

// Break Example 

while (i <= 5) {
    if (i === 3) {
        break;
    }
    console.log(i);
    i++;
} */

/* 
    function greet(name) {
        return `hello, ${name}!`;
    }
    console.log(greet('Ali')); */


    // function expression

    /* const greet = function(name) {
        return `Hello, ${name}!`;
    }
    console.log(greet('john doe')); */

    //Parameters and Arguments

   /*  function add(a, b) {
        return a + b;
    }
    console.log(add(3, 4)); */

   /*  function multiply(a, b){
    return a * b
    }
    let result = multiply(4, 5);
    console.log(result); */

    // Arrow function  (ES6+)

    /* const greet = (name) => `Hello, ${name}!`;
    console.log (greet('Charlie'));

    const add = (a, b) => a + b;
    console.log(add(3, 4)); */

    //Event listener

   /*  const button = document.getElementById ('myButton');
    button.addEventListener('click', function() {
        alert('Button Clicked');
    });

    //Mouse Hoveringand Mouse out

    const hoverDiv = document.getElementById ('hoverDiv');
    hoverDiv.addEventListener('mouseover', function() {
        hoverDiv.style.backgroundColor = 'yellow';
    });
    hoverDiv.addEventListener('mouseout', () => {
        hoverDiv.style.backgroundColor = 'lightblue';
    });
 */


/*     const targetButton = document.getElementById ('targetButton');
    const addlistener = document.getElementById('addListener');
    const removeListener = document.getElementById ('removeListener');

    function clickHandler() {
        alert('Target Button Clicked')
    };
    addlistener.addEventListener('click', () => {
        targetButton.addEventListener('click', clickHandler);
    });

    removeListener.addEventListener('click', () => {
        targetButton.removeEventListener('click', clickHandler);
    }); */

    const targetButton = document.getElementById('targetButton');
    const addListener = document.getElementById('addListener');
    const removeListener = document.getElementById('removeListener');
    
    function clickHandler() {
        alert('Target Button Clicked');
    };
     function target () {
        targetButton.addEventListener('click', clickHandler() );
     };

    addListener.addEventListener('click', () => {
        target ()
    });
    
    removeListener.addEventListener('click', () => {
        target ()
    });
    
