let userMessage = 'Select temperature for the sauna (in Fahrenheit)';
let input;
let tempFahrenheit;
let tempCelsius;

do {
    // Ask user for temperature in fahrenheit
    input = prompt(userMessage);
    tempFahrenheit = parseInt(input);

    // Get temperature in Celsius
    tempCelsius = fahrenheitToCelsius(tempFahrenheit);

    // Produce user message if needed, else undefined
    userMessage = createMessage(tempFahrenheit, tempCelsius);
} while (userMessage);

// Respons to the user
userMessage = `Temperature ${input} degrees Fahrenheit is good!`;
alert(userMessage);

// Log data
console.log(`Temperature set to ${tempCelsius.toFixed()} degrees celsius (~ ${input} degrees Fahrenheit)`);


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
    } else {
        response = '';
    }
    // console.log(`createMessage(${celsius}) => '${response}'`);

    return response;
}