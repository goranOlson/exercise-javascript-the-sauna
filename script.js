

let input;
let message = 'Select temperature (Fahrenheit)';
let celsius;

do {
    input = prompt(message);

    celsius = fahrenheitToCelsius( parseInt(input) );

    message = getRespons(celsius);
} while (message);

alert('The temperature is good!');



function fahrenheitToCelsius(f) {
    celsius = (f - 32) / 1.8;
     console.log(`fahrenheitToCelsius(${f}) => ${celsius}`);
    return celsius;
}

function getRespons(celsius) {
    let response;

    if (celsius < 73) {
        response = "To low temperature, please increase";
    } else if (celsius > 77) {
        response = "To high temperature, please decrease";
    }
    console.log(`getRespons(${celsius}) => '${response}'`);

    return response;
}