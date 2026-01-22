/*
  Creating the array of objects to store the latitude and longitude values of some cities. Each objects contains the city name with 
  their coordinates.
*/
let cityInfo = 
[
  // City - Ranchi
  {
    name : 'Ranchi', 
    lat : 23.34, 
    long : 85.29
  }, 

  // City - Raipur
  {
    name : 'Raipur', 
    lat : 21.25,
    long : 81.62
  }, 

  // City - Medinipur
  {
    name : 'Medinipur', 
    lat : 22.43, 
    long : 87.32
  }, 

  // City - Kollam
  {
    name : 'Kollam', 
    lat : 8.89, 
    long : 76.61
  }, 

  // City - Bhubaneswar
  {
    name : 'Bhubaneswar', 
    lat : 20.29, 
    long : 85.82
  }, 

  // City - Mumbai
  {
    name : 'Mumbai', 
    lat : 19.07, 
    long : 72.87
  }, 

  // City - Delhi
  {
    name : 'Delhi', 
    lat : 28.67, 
    long : 77.06
  }, 

  // City - Jaipur
  {
    name : 'Jaipur', 
    lat : 26.907, 
    long : 75.73
  }
]

/* 
  When user will select any of the city name from thew dropdown list, the city name will be stored in this variable. By default the 
  name 'Ranchi' will be selected.
*/
let userSelectCity = document.getElementById("option").value;
console.log(userSelectCity);

/*
  This function is created to set a number for each city name as a unique identity. The identity will be number. 
  Here the numbers are 0, 1, 2, ...
  Because through these numbers we can access the exact object for each selected city names with the index number of the array.
  Means, if the city is 'Ranchi', then the object where the data of this city is present is stored in the 0th index of the array.
  And the unique id for 'Ranchi' will be 0, according to this function. So, in future, we can access the index number easily through the 
  unique id.
  The function will take the user input and it will return the cityId that will be the unique id.
*/
function uniqueIdForEachCity (cityName)
{
  let cityId;

  if (cityName === 'Ranchi')
  {
    cityId = 0;
  }

  else if (cityName === 'Raipur')
  {
    cityId = 1;
  }

  else if (cityName === 'Medinipur')
  {
    cityId = 2;
  }
 
  else if (cityName === 'Kollam')
  {
    cityId = 3;
  }

  else if (cityName === 'Bhubaneswar')
  {
    cityId = 4;
  }

  else if (cityName === 'Mumbai')
  {
    cityId = 5;
  }

  else if (cityName === 'Delhi')
  {
    cityId = 6;
  }

  else if (cityName === 'Jaipur')
  {
    cityId = 7;
  }

  return cityId;
}

//The return value (which will be the unique id) of the function uniqueIdForEachCity is stored in this variable.
let getId = uniqueIdForEachCity (userSelectCity);
console.log(getId);

/*
  This function is created to get the latitude and longitude value from the user input.
  This function will take the array of object and id which will be the index number of the array where the object is stored.
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
  As the function 'getCoordinate' is returning an array, so to store the returning values, we need an array, so in this array the function 
  is called. After getting the values, we can access them individually.
*/
let [getLat, getLong] = getCoordinate (cityInfo, getId);
console.log(getLat);
console.log(getLong);
