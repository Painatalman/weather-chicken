import getThemedChicken from "./utils/getThemedChicken"

const ThemedChicken = getThemedChicken("hotpink")
const RainyWeatherChicken:React.FC =  () => <ThemedChicken />

export default RainyWeatherChicken
