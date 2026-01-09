// Accessing the input field with id 'place', i.e, an html elemet and stored it in the variable Place.
const Place = document.getElementById("place");

// Accessing the input field with id 'temp', i.e, an html elemet and stored it in the variable Temp.
const Temp = document.getElementById("temp");

// Accessing the html elemet for storing the string which will be created with the values of the variables place and Temp.
let str = document.getElementById("weather");

/* 
  This function is created to access the values of the input field and then generate the string with the data given by the user
  and then display the string through the html element dynamically .
*/
function displayString()
{
  // Accessing the value of the input field which is labeled as place.
  const city = Place.value;

  // Accessing the value of the input field which is labeled as temp.
  const tempC = Temp.value;

  // When user will not give any input for place, there will be an alert.
  if (city === '')
  {
    alert("Please enter the valid Place");
    return;
  }

  // When user will not give any input for temp, there will be an alert.
  if (tempC === '')
  {
    alert("Please enter the valid temperature");
    return;
  }

  // Storing the value of the variables 'city', 'tempC' using template literals to the variable 'text'.
  text = `City : ${city}, Temp : ${tempC}°C`;

  // Added the string in the html element dynamically.
  str.innerHTML = text;
}

// When user will click the RESET button , this function will work. This function will clear all the input fields and also the output.
function clearInput ()
{
  // The value of the input field labeled as 'place' which is accessed here with the variable 'Place' will be replaced with the empty string.
  Place.value = '';

  // The value of the input field labeled as 'temp' which is accessed here with the variable 'Temp' will be replaced with the empty string.
  Temp.value = '';

  // The content of the element which is accessed in the variable 'str' will be replaced with the empty string.
  str.innerHTML = '';
}

//This function is used to displaying the fetched data in the browser.
function displayData (weatherData)
{
  // Accessing the main div of the html document.
  let parent = document.getElementById("parent");

  /* 
    All the fatched data are stored in different variables, to access them as the array elements and display them within a loop, using 
    the index number of the elements.
  */

  let latitude = weatherData.latitude;

  let longitude = weatherData.longitude;

  let timezone = weatherData.timezone;

  let time = ((weatherData.current.time) + (weatherData.current_units.time));

  let interval = ((weatherData.current.interval) + (weatherData.current_units.interval));

  let temperature = ((weatherData.current.temperature_2m) + (weatherData.current_units.temperature_2m));

  // Creating the array with the variables.
  let A = [latitude, longitude, timezone, time, interval, temperature];

  // Calculating the length of the array.
  let length = A.length;

  // Initializing the loop counter
  let i = 0;
  while (i < length)
  {
    // Creating the div element within the main div.
    let child = document.createElement("div");

    // Adding the content of the variables which are used as the elements in the array, to the child div dynamically.
    child.innerHTML = A[i];
    parent.appendChild(child);

    // Update the loop counter.
    i = (i + 1);
  }
}

// The keyword async before a function, that means the function will return a promise. 
async function fetchData() 
{
  // Here the try-catch block is used to handle the error (if there) during the fetching of the data.

  /*
    The try-catch block gives the flexibility to execute the program, if there any error occurs in the try block this part will be skipped, 
    the catch block will be executed and it will throw any message of error instead of terminating the program. 
  */
  try 
  {
    // Requesting to the web server to fetch the data from the API.
    // The await is the keyword, is used to wait for a promise to resolve.
    let ifTrue = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m');
    console.log(ifTrue);

    // The data is fetched successfully.
    let data = await ifTrue.json();
    console.log(data);

    // Call the displayData function, to display the fetched data to the user.
    displayData(data);
  } 

  // This part is optional, if there is any error during the fetching data, this part will throw the error to the user.
  catch (error) 
  {
    // The error message will display in the console.
    console.error('Error:', error);
  }
}

// Call the function
fetchData();
