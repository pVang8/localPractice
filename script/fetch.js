import { prod, dev } from "./envir.js";

let urlOneCall_pt1 = 'https:api.openweathermap.org/data/2.5/onecall';
let lat = '?lat=';
let lon = '&lon=';
let apiKey;
if(prod.isLive){
    apiKey = prod.apiKey;
}else{
    apiKey = devapiKey;
}

function GetWeatherOneCall(cityName, latitude, longtitude){
    lat += latitude;
    lon += longtitude;

}

GetWeatherOneCall('Lodi', 38.1341, -121.2722)