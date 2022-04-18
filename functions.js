 /**
  * currence convetor. 
  */

// function currencyConvat(amount, type) {
    
//     let reat = 0;

//     switch (type) {
//         case 'USD':
//             reat = 86;
//             break;
     
//             case 'CAD':
//             reat = 67;
//             break;
     
//             case 'pound':
//             reat = 114;
//             break;
     
//             case 'Euro':
//             reat = 76;
//             break;
     
           
     
//     }


//     console.log(`
    
//         ${amount} ${type},  = ${amount * reat} BDT.
//     `);

// }



/**
 * BMI Calculetion b   
 */ 

function bmiCal(name, weight, height ) {
    
    let bmi = weight / (height * height)

    if ( bmi < 18.5 ) {
        console.log(`
        Hi ${name}, Apnar obosta sess 
        `);
    } else if (bmi >= 18.5  && bmi < 25){
        console.log(`
        Hi ${name}, Apnar obosta sess ,,,,ja paben ura dura khite thakben,,,,,
        `);
    }else if (bmi >= 25  && bmi < 30){
        console.log(`
        Hi ${name}, Apnar obosta sess ,,,,ja paben ura dura khite thakben,,,,,
        `);
    }else if (bmi >= 30 ){
        console.log(`
        Hi ${name}, Apnar obosta sess ,,,,ja paben ura dura khite thakben,,,,,
        `);
    }
}

/**
 * Function declaration
 * Function experession
 * Arrow Function
 * **************
 * Callback Function
 * async awiat Function
 * promise Function
 * Constructor Function
 * 
 */



/**
 * Function declaration
 */
 
// function ageacal(name) {
//     return `My name is ${name}`
// }


/**
 * Function experession.....let / const 2tay baboha rkora jay.
 */
 

// let ageacal = function (name) {
//     return `My name is ${name}`
// }

// console.log(ageacal('Mujahid'));


/**
 * Arrow Function==
 */
//  let ageacal = () => {

//  }
//------------------>>





//  const ageacal = (name, year) => {

//     let age = 2022 - year

//     console.log(`Hi ${name }, you are ${ age }, years old`);
//  }

// ageacal('Mujahid', 1995);


//neom 1
//------>
// const devsInfo = (name, skill, age) => ` Hi ${name}, you are ${age}, years old & you are a ${skill}, developer`;

//neom 2
//---------->>
// const devsInfo = (name, skill, age) => {

//     return ` Hi ${name}, you are ${age}, years old & you are a ${skill}, developer`;
// }

// console.log(devsInfo('mujahid' , 'mearn Stack', 12));



/**
 * Create a function that will return the area of a rectangle, square, triangle
 */
const areaCal = (type, val1, val2 = null) => {

    let shape = '';
    let area = '';
    switch (type) {
            case 'r':
                shape = 'Rectangle'
                area = (val1 * val2);
                break;
        
            case 's':
                shape = 'Square'
                area = (val1 * val1);
                break;
        
            case 't':
                shape = 'Triangle'
                area = (.5 * val1 * val2);
                break;
        
             case 'c':
                shape = 'Circal'
                area = 3.1416 * ( val1 * val1);
                break;
        
            
    }


    console.log(`
    The are a of ${shape} is ${area}
    `);
}
 




