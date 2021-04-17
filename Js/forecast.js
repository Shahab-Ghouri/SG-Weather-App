const key = "bd50e64c5be03e1e30e8c74bcbff10d6";


// const baseURL =
//   "http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=bd50e64c5be03e1e30e8c74bcbff10d6";

// //  TO FETCH THE API
// fetch(baseURL)
//   .then((data) => {
//     console.log(data.json());
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getCity = async (city) => {
  const base = "http://api.openweathermap.org/data/2.5/weather"; // key of city;
  const query = `?q=${city}&appid=${key}`; // if api key of city is equal to key declared above --- q =  city name
  // NOTE : NO SPACE BETWEEN CONDITIONS!!!!

  const response = await fetch(base + query);

  // converting into JS object
  const data = await response.json();

  
  return data;
};

getCity("karachi");












// const getWeather = async (id) => {
//   const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//   const query = `${id}?apikey=${key}`;

//   const response = await fetch(base + query);
//   const data = await response.json();

//   return data[0];
// };


