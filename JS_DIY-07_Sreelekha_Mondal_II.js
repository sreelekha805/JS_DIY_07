// Creating the array.
const city = `City: Delhi, Temp: 30°C`;

document.getElementById("weather").innerHTML = city;

async function fetchData() 
{
  try 
  {
    let ifTrue = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
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
