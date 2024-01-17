let input;
let message = 'Select temperature (Fahrenheit)';
let fahrenheit;
let celsius;

do {
    // Ask for temperature (fahrenheit)
    input = prompt(message);
    fahrenheit = parseInt(input);
    // Get temperature in Celsius
    celsius = fahrenheitToCelsius(fahrenheit);
    // Produce user message if needed
    message = createMessage(fahrenheit, celsius);
} while (message);

// Responce to the user
message = `Temperature ${input} degrees Fahrenheit`;
alert(message + ' is good!');

// Log data
message += ` (~ ${celsius.toFixed(1)} celsius) is accepted`;
console.log(message);


function fahrenheitToCelsius(f) {
    celsius = (f - 32) / 1.8;
    // console.log(`fahrenheitToCelsius(${f}) => ${celsius}`);
    return celsius;
}

function createMessage(fahrenheit, celsius) {
    let response;

    if (celsius < 73) {
        response = `${fahrenheit} degrees Fahrenheit is to low temperature, please increase`;
    } else if (celsius > 77) {
        response = `${fahrenheit} degrees Fahrenheit is to high temperature, please decrease`;
    }
    // console.log(`createMessage(${celsius}) => '${response}'`);

    return response;
}