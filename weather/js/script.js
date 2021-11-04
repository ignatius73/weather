import api from './config';

const apiKey = api;
let search = document.querySelector('.weather__search');
let city = document.querySelector('.weather__city');
let day = document.querySelector('.weather__day');
let humidity = document.querySelector('.weather__indicator_humidity>.value');
let wind = document.querySelector('.weather__indicator_wind>.value');
let pressure = document.querySelector('.weather__indicator_presure>.value');
let temperature = document.querySelector('.weather__temperature>.temperature');

let getWeatherByCityName = async(city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    return await response.json();
    
}

search.addEventListener('keydown', async(e)=>{
    if( e.keyCode === 13){
        let weather = await getWeatherByCityName(search.value);
        console.log(weather)
        updateWeather(weather)
    }
})

let updateWeather = (data ) =>{
    city.textContent = data.name + ', ' + data.sys.country;
    let today = new Date().toLocaleDateString('en-EN', { weekday:'long'});
    day.textContent = today;
    humidity.textContent = data.main.humidity;
    let windDir;
    windDir = data.wind.deg;
    if( windDir > 45 && windDir <= 135){
        wind.textContent = 'East';
    }else if( windDir > 135 && windDir <= 225){
        wind.textContent = 'South';
    }else if( windDir > 225 && windDir <= 315){
        wind.textContent = "West";
    }else{
        wind.textContent = "North";
    }
    wind.textContent = wind.textContent + ' ' + data.wind.speed;
    temperature.textContent = data.main.temp > 0 ? 
                                '+' + Math.round(data.main.temp) :
                                Math.round(data.main.temp)

}