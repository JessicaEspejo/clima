
import { useState } from 'react';

 const WeatherCard = ({weather, temperature}) => {

    const [isCelsius, setIsCelsius ] = useState(true)

 const changeTemperature = () => setIsCelsius(!isCelsius)

 console.log(weather);
  return (
 <article className='card'>
    <h1 className='card_title'>weather app</h1>
    <h2 className='card_subtitle'> {`${weather?.name}, ${weather?.sys.country}`}</h2>
    <section className='card_first-section' >
        <img className='card_icon' src={weather? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png` : ''} alt="" />
    </section>
    <section className='card_second-section'>
        <h3 className='second_title'>"{weather?.weather[0].description}" </h3>
    <ul className='second_list'>
        <li className='second_item'><span  className='second_span'>wind speed</span>{weather?.wind.speed}m/s  </li>
        <li className='second_item'><span className='second_span'>clouds</span>{weather?.clouds.all}%</li>
        <li className='second_item'><span className='second_span'>pressure</span>{weather?.main.pressure}hPa</li>
    </ul>
    </section>
    <h2 className='card_temperature'>{isCelsius? `${temperature?.celsius} °C `: `${ temperature?.fareheir}°F`}</h2>
    <button className='card_btn' onClick={changeTemperature}>{isCelsius? "change to   °F" : "chage to °C"} </button>
 </article>
  )
}
export default WeatherCard