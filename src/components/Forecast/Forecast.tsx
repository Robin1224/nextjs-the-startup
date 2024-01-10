import useForecast from "@/src/hooks/useForecast";
import ForecastItem from "./ForecastItem";

interface Props {}
const Forecast = async (props: Props) => {
  const forecastData = await useForecast({ days: 5 });

  return (
    <section className="p-5 bg-black-50">
      <h3 className="mt-5 mb-9 text-lg text-medium">Upcoming 5 days</h3>
      <ForecastItem data={forecastData[0]} />
      <ForecastItem data={forecastData[1]} />
      <ForecastItem data={forecastData[2]} />
      <ForecastItem data={forecastData[3]} />
      <ForecastItem data={forecastData[4]} />
    </section>
  );
};

export default Forecast;