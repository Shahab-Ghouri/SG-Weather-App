const form = document.querySelector("form");
const details = document.querySelector(".details");


const convert_Celcius = (kelvin)=>{
  celcius = Math.round(kelvin-273.15);
  return celcius;
}

const updateUI = (data) => {
  const city = data.name;
  const country = data.sys.country;
  const image = data.weather[0].icon;
  const imageSrc = `http://openweathermap.org/img/wn/${image}@2x.png`; 

  // const weather = data.weather;
  // console.log(city,weather);

  const IsDayTime = (icon) =>{
    if(icon.includes('d')){
      return true;
    }
    else{
      return false;
    }
  
    }

    let today = new Date();

    let month = today.getMonth()+1;
    let year = today.getFullYear();
    let date = today.getDate();

    let currentDate = month+"/"+date+"/"+year;

    function addZero(num){
        return num < 10 ? `0${num}` : num;
    }

    

  
  details.innerHTML = `
            <h5>${city}, ${country}</h5>
            <span class="date">${currentDate}</span>
            <div class="display-4 my-5 flex-box-container">
                <div class="temp">${convert_Celcius(data.main.temp)}<span>&deg;C</span></div>
                <div class="image-container card shadow mx-auto">
                   <img src="${imageSrc}" alt="">
                </div>
                <div class="humidity">${data.main.humidity}%<p>Humidity</p></div
                
            </div>
            <div class="weather">${data.weather[0].main}</div>
    `;
    
    const div = document.getElementById("changing");
    if(IsDayTime(image)){
        div.style.backgroundImage = `url(./images/sunny.jpg`;
    }
    else{
        div.style.backgroundImage = `url(./images/night.jpg)`;
    }

};


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = form.city.value.trim();
  form.reset();
  // console.log(city);

  getCity(city)
  .then((data)=>{
    console.log(data);
    updateUI(data);
  })
  .catch((error)=>{
    alert(error);
    location.reload();    // to reload the page
  })


  
});
