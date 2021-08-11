import ChickenState from '~/types/ChickenState'
import axios, { AxiosResponse } from 'axios'

type OpenWeatherAPIData = {
  weather: {
    main: string
  }[]
}

const { DEFAULT, RAINY, CLOUDY } = ChickenState

function getWeatherFromOpenWeatherData(data:OpenWeatherAPIData):ChickenState {
  
  
  const apiValueToWeather:Record<string, ChickenState> = {
    'Clouds': CLOUDY,
    'Rain': RAINY
  }
  
  const mainWeather = data.weather[0].main
  
  return apiValueToWeather[mainWeather] || DEFAULT
}

async function getWeather(): Promise<ChickenState> {
  return await axios.get(
    'https://api.openweathermap.org/data/2.5/weather?q=Faro&appid=7f4bfe8eaa8afdd402dadf661ce1a6ad'
  ).then(
    (response: AxiosResponse<OpenWeatherAPIData>) => {
      return getWeatherFromOpenWeatherData(
        response.data
      )
    } 
  ).catch(() => DEFAULT)
 }

const openWeather = {
  getWeather
}

export default openWeather
