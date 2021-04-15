const form = document.querySelector("form");
const details = document.querySelector(".details");

const updateUI = (data) => {
  const city = data.cityDets;
  const weather = data.weather;
  console.log(city,weather);

    let today = new Date();

    let month = today.getMonth()+1;
    let year = today.getFullYear();
    let date = today.getDate();

    let currentDate = month+"/"+date+"/"+year;

    function addZero(num){
        return num < 10 ? `0${num}` : num;
    }

    

  
  details.innerHTML = `
            <h5>${city.EnglishName},${city.AdministrativeArea.CountryID}</h5>
            <span class="date">${currentDate}</span>
            <div class="display-4 my-5">
                <span class="temp">${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
            <div class="weather">${weather.WeatherText}</div>
    `;
    
    const div = document.getElementById("changing");
    if(weather.IsDayTime){
        div.style.backgroundImage = `url(./images/day.jpg)`;
    }
    else{
        div.style.backgroundImage = `url(./images/night.jpeg)`;
    }

};

const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return {
    cityDets,
    weather,
  };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = form.city.value.trim();
  form.reset();
  // console.log(city);

  updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log("errrorrr"));
});
