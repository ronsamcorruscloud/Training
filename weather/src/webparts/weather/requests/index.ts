import axios from 'axios';


let apiKey = 'c10ae3722fc878e991240b74142c8bba';

export const getWeather = (zipcode: String): Promise<any> => {
    let api = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},in&appid=${apiKey}`;
    return (
        axios.get(api)
        .then(data => {
            console.log("Weather Date", data);
            return data;
        })
    )
}