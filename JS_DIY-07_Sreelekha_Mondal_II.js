/*
  Creating the array of objects to store the latitude and longitude values of some cities. Each objects contains the city name with 
  their coordinates.
*/
let cityInfo = 
[
  // City - Ranchi
  {
    name : 'Ranchi',
    cityId : 0, 
    lat : 23.34, 
    long : 85.29
  }, 

  // City - Raipur
  {
    name : 'Raipur', 
    cityId : 1,
    lat : 21.25,
    long : 81.62
  }, 

  // City - Medinipur
  {
    name : 'Medinipur', 
    cityId : 2,
    lat : 22.43, 
    long : 87.32
  }, 

  // City - Kollam
  {
    name : 'Kollam', 
    cityId : 3,
    lat : 8.89, 
    long : 76.61
  }, 

  // City - Bhubaneswar
  {
    name : 'Bhubaneswar', 
    cityId : 4,
    lat : 20.29, 
    long : 85.82
  }, 

  // City - Mumbai
  {
    name : 'Mumbai', 
    cityId : 5,
    lat : 19.07, 
    long : 72.87
  }, 

  // City - Delhi
  {
    name : 'Delhi', 
    cityId : 6,
    lat : 28.67, 
    long : 77.06
  }, 

  // City - Jaipur
  {
    name : 'Jaipur', 
    cityId : 7,
    lat : 26.907, 
    long : 75.73
  }
]

/*
  This function is created to get the latitude and longitude value from the user input.
  This function will take the array of object and id which will be the property of each object of the array.
  Then it will access the latitude and longitude for the particular city, then the function will return them.
*/
function getCoordinate (obj, uniqueId)
{
  // Accessing the value of latitude.
  let cityLat = obj[uniqueId].lat;

  // Accessing the value of longitude.
  let cityLong = obj[uniqueId].long;

  /*
    The function is returning multiple values of variables. So to return the multiple values, the values of the variables are stored in a
    array, then returning the array.
  */
  return [cityLat, cityLong];
}

/*
  This function is created to fetch data from the api. It will take the coordinates and then it will request the API with the coordinates 
  and then if the API response is true, it will return the data otherwise the function will through an error.
*/
async function fetchData(lat, long) 
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
    let ifTrue = await fetch('https://api.open-meteo.com/v1/forecast'+'?latitude='+lat+'&longitude='+long+'&current=temperature_2m'+'&timezone=auto');
    console.log(ifTrue);

    // When the API response will be true, it will return the data.
    let data = await ifTrue.json();
    console.log(data.current.temperature_2m);
    return data;
  } 

  // This part is optional, if there is any error during the fetching data, this part will throw the error to the user.
  catch (error) 
  {
    // The error message will display in the console.
    console.error('Error:', error);
  }
}

/*
  This function is created to take the user input, i.e, the city name. Then this function will display the desired output means the 
  current temperature.
  At first, the user input will be accessed.
  Then the City Id for the given City will be accessed.
  Then The coordinates will be accessed.
  Then the temperature will be fetched for the given coordinates.
*/
function displayTemp (obj)
{

  // The name of the city which is selected by the user from the dropdown list, will be stored in this variable.
  let cityName = document.getElementById("option").value;
  console.log(cityName);

  /*
    Initialize th cityId with -1, because all the objects are stored in the array index(s). And all the objects have a property called cityId,
    So when I am trying to get the data for the city 'Ranchi' the cityId will be 0, which is the index number where the object for the 
    city Ranchi, is stored. So the (-1) cityId and the index number is invalid. So it is initialized with the -1 value.
  */
  let cityId = (-1);

  // Storing the length of the array in this variable.
  let NoC = obj.length;

  // Initializing the loop counter.
  let i = 0;

  /*
    This loop will work until the user input and the object property will not be the same, when it will match, the cityId will be stored in 
    a variable.
  */
  while (i < NoC)
  {
    if ((obj[i].name) === cityName)
    {
      cityId = i;
      break;
    }

    i = (i + 1);
  }

  // The latitude and longitude according to the cityId will be stored inthese variables.
  [getLat, getLong] = getCoordinate (obj, cityId);
  console.log(getLat);
  console.log(getLong);

  // This asynchronous function is called to fetch the temperature for the given coordinates.
  fetchData(getLat, getLong);
  console.log (fetchData);
  return;
}


