const API_KEY = "7629f3a2fc6899c2d598990b8fb22200";

const getFormattedWeatherData = async (city, units = "metric") => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

     console.log(data);
};


export { getFormattedWeatherData };