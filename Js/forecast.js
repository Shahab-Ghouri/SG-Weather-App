const key = "KhO7uwjLzcZ9oxMCZOHkj2TsXNX28A9V";

const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search"; // key of city;
  const query = `?apikey=${key}&q=${city}`; // if api key of city is equal to key declared above --- q =  city name
  // NOTE : NO SPACE BETWEEN CONDITIONS!!!!

  const response = await fetch(base + query);

  // converting into JS object
  const data = await response.json();

  return data[0];
};

// getCity("karachi")
//   .then((data) => {
//     console.log(data);
//     return getWeather(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error");
//   });

// getWeather(261158)
// .then((data)=>{console.log(data);
// })
// .catch((err)=>{console.log("error");
// })
