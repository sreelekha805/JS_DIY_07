// Creating the array.
const city = `City: Delhi, Temp: 30°C`;

document.getElementById("weather").innerHTML = city;

async function fetchData() 
{
  try 
  {
    let ifTrue = await fetch('https://open-meteo.com/');
    console.log(ifTrue);
    let data = await ifTrue.json();
    console.log(data);
  } 
  catch (error) 
  {
    console.error('Error:', error);
  }
}

fetchData();
