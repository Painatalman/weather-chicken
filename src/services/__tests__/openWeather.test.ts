import server from '~/msw'
import service from '~/services/openWeather'
import ChickenState from '~/types/ChickenState'
import { rest } from 'msw'

import clearWeather from './__data__/clearWeatherResponse.json'
import cloudyWeather from './__data__/cloudyWeatherResponse.json'
import rainyWeather from './__data__/rainyWeatherResponse.json'
import unknownWeather from './__data__/unknownWeatherResponse.json'

describe('openWeatherService', () => {
  it('sets default state (sunny) in case of error', async () => {
    server.use(
      rest.get('https://api.openweathermap.org/data/2.5/weather', (_req, res, ctx) => res(
        ctx.status(403),
        ctx.json({}),
      )
    ))
    expect(await service.getWeather()).toBe(ChickenState.DEFAULT)
  })
  it('sets default state (sunny) for clear weather', async () => {
    server.use(
      rest.get('https://api.openweathermap.org/data/2.5/weather', (_req, res, ctx) => res(
        ctx.status(200),
        ctx.json(clearWeather),
      )
    ))
    expect(await service.getWeather()).toBe(ChickenState.DEFAULT)
  })
  it('sets default state (sunny) for unknown weather', async () => {
    server.use(
      rest.get('https://api.openweathermap.org/data/2.5/weather', (_req, res, ctx) => res(
        ctx.status(200),
        ctx.json(unknownWeather),
      )
    ))
    expect(await service.getWeather()).toBe(ChickenState.DEFAULT)
  })
  it('sets rainy state for rainy weather', async () => {
    server.use(
      rest.get('https://api.openweathermap.org/data/2.5/weather', (_req, res, ctx) => res(
        ctx.status(200),
        ctx.json(rainyWeather),
      )
    ))
    expect(await service.getWeather()).toBe(ChickenState.RAINY)
  })
  it('sets cloudy state for cloudy weather', async () => {
    server.use(
      rest.get('https://api.openweathermap.org/data/2.5/weather', (_req, res, ctx) => res(
        ctx.status(200),
        ctx.json(cloudyWeather),
      )
    ))
    expect(await service.getWeather()).toBe(ChickenState.CLOUDY)
  })
})
