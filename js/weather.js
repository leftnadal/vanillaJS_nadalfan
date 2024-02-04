const API = "d19a83f1695bd852e8cf82603c0170f";

function onGeoOk(position) {
    const lat = position.coords.latitude; 
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.8260942&lon=127.1679248&appid=afef36490b69dfd9f1b2e43d9017fd29&units=metric `;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

       city.innerText = data.name;
       weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you, No weather for you.");
}



navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);