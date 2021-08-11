import { Story, Meta } from '@storybook/react';
import ChickenState from '~/types/ChickenState';

import WeatherChicken from '.'
import ClearWeatherChicken from './Clear';
import CloudyWeatherChicken from './Cloudy';
import RainyWeatherChicken from './Rainy';

export default {
  component: WeatherChicken,
  title: 'WeatherChicken',
  argTypes: {
    chickenState: {options: [
      ChickenState.DEFAULT,
      ChickenState.CLOUDY,
      ChickenState.RAINY,
    ], control: {type: 'radio'}}
  }
} as Meta;

export const Default:Story = ({ ...args }) => <WeatherChicken {...args} />;
Default.parameters = {
  options: { showPanel: true } 
}

export const Clear:Story = () => <ClearWeatherChicken />;
Clear.parameters = {
  options: { showPanel: false } 
}
export const Rainy:Story = () => <RainyWeatherChicken />;
Rainy.parameters = {
  options: { showPanel: false } 
}
export const Cloudy:Story = () => <CloudyWeatherChicken />;
Cloudy.parameters = {
  options: { showPanel: false } 
}
