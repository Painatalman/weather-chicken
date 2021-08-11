import ChickenState from '~/types/ChickenState'

import ClearWeatherChicken from './Clear';
import CloudyWeatherChicken from './Cloudy';
import RainyWeatherChicken from './Rainy';

type WeatherChickenProps = {
  chickenState?: ChickenState
}

const WeatherChicken: React.FC<WeatherChickenProps> = (props) => {
  switch (props.chickenState) {
    case ChickenState.CLOUDY:
      return <CloudyWeatherChicken />
    case ChickenState.RAINY:
      return <RainyWeatherChicken />
    default:
      return <ClearWeatherChicken />
  }
  
}

export default WeatherChicken
