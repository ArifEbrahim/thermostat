document.addEventListener("DOMContentLoaded", function() {

  const updateTemperature = function() {
    document.querySelector('#temperature').innerText = thermostat.temperature
    document.querySelector('#temperature').className = thermostat.energyUsage();
  };

  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#temperature-up').addEventListener('click', function(){
    thermostat.up();
    updateTemperature();
  });

  document.querySelector('#temperature-down').addEventListener('click', function() {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector('#temperature-reset').addEventListener('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector('#powersaving-on').addEventListener('click', function() {
    thermostat.switchPowerSavingModeOn();
    document.querySelector('#powersaving-on').style.borderColor = 'black';
    document.querySelector('#powersaving-off').style.borderColor = 'white';
    alert('Maximum temperature limited to 25 degrees');
  });

  document.querySelector('#powersaving-off').addEventListener('click', function() {
    thermostat.switchPowerSavingModeOff();
    document.querySelector('#powersaving-on').style.borderColor = 'white';
    document.querySelector('#powersaving-off').style.borderColor = 'black';
    alert('Maximum temperature limited to 32 degrees');
  });

  document.querySelector('#select-city').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value;
    displayWeather(city);

  });

  const displayWeather = (city) => {
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=270db9edbd73bc5d95ee1794826b870e&units=metric`

    fetch(url)
    .then(response => response.json())
    .then(data => document.querySelector('#current-temperature').innerText = Math.round(data.main.temp))

    fetch(url)
    .then(response => response.json())
    .then(data => document.querySelector('#current-location').innerText = data.name)

  };
  displayWeather('London');
});