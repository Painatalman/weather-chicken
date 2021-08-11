import { render, screen } from '@testing-library/react';
import WeatherChicken from '~/components/WeatherChicken';
import ChickenState from '~/types/ChickenState'

jest.mock('~/components/WeatherChicken/Clear', () => function MockClear() { return <div data-testid="clear" />})
jest.mock('~/components/WeatherChicken/Rainy', () => function MockRainy() { return <div data-testid="rainy" /> })
jest.mock('~/components/WeatherChicken/Cloudy', () => function MockCloudy() { return <div data-testid="cloudy" /> })

describe('Weather Chicken', () => {
  it('renders as clear by default', () => {
    render(<WeatherChicken />);
    screen.getByTestId('clear');
  });
  it('renders as clear when specified', () => {
    render(<WeatherChicken chickenState={ChickenState.DEFAULT} />);
    screen.getByTestId('clear');
  });
  it('renders as rainy when specified', () => {
    const Component = () => <WeatherChicken chickenState={ChickenState.RAINY} />
    render(<Component />);
    screen.getByTestId('rainy');
  });
  it('renders as cloudy when specified', () => {
    render(<WeatherChicken chickenState={ChickenState.CLOUDY} />);
    screen.getByTestId('cloudy');
  });
})
