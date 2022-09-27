import axios from "axios";
import { useEffect, useState  } from "react";
import "./App.css";
import Loading from "./components/Loading"
import WeatherCard from "./components/WeatherCard";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWheater] = useState();
  const [temperature, setTemperture] = useState(); 

  useEffect(() => {
    //esta es la a cccion qiue se ejecuta cuando llega la informacion de nuestra ubicacion
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };

      setCoords(obj);
    };

    //esto hace el llamadoi ala appi del naVEGADOR PARA USAR LÑA UBICACION ACTIAL
    navigator.geolocation.getCurrentPosition(success);
  }, []);

console.log(coords);
  //-------------PETICION DEL CLIMA--------

  useEffect(() => {

    if (coords) {
      const APIKEY = '6f8c07cca763fea8f0a37d355132cd11';
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`;
      
      axios.get(URL)
      .then(res =>{
        const celsius = (res.data.main.temp - 273.15).toFixed(0)
        const fareheir = (celsius * 9/5+32).toFixed(0)
        setTemperture({celsius,fareheir})
        setWheater(res.data) 
      } )

      .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div className="App">
 
      {
        weather?
        <WeatherCard weather={weather} temperature={temperature}/>
        :
        <Loading/>
      }
      </div>
  )
}

export default App;
