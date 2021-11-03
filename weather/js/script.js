const apiKey = 'c7bca27bebdbb605ecbe6d909da1bd51';

let city = document.querySelector('.weather__city');
let day = document.querySelector('.weather__day');
let humidity = document.querySelector('.weather__indicator_humidity');
let wind = document.querySelector('.weather__indicator_wind');
let pressure = document.querySelector('.weather__indicator_presure');
let temperature = document.querySelector('.weather__temperature');


console.log(city)



let getWeatherByCityName = async(city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    console.log(await response.json())

}

getWeatherByCityName('Buenos Aires');