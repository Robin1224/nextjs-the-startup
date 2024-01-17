import useForecast from "@/src/hooks/useForecast";
import ForecastItem from "./ForecastItem";
import SubscribeForm from "../SubscribeForm";

interface Props {}
const Forecast = async (props: Props) => {
  const forecastData = await useForecast({ days: 5 });

  return (
    <section className="p-5 bg-black-50 md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1 md:h-full lg:grid lg:grid-cols-subgrid lg:gap-3 lg:col-start-1 lg:col-span-12 lg:px-0">
      <h3 className="mt-6 mb-11 text-lg text-medium lg:col-start-2 lg:col-span-9">Upcoming 5 days</h3>
      <ForecastItem data={forecastData[0]} />
      <ForecastItem data={forecastData[1]} />
      <ForecastItem data={forecastData[2]} />
      <ForecastItem data={forecastData[3]} />
      <ForecastItem data={forecastData[4]} />
      <SubscribeForm />
    </section>
  );
};

export default Forecast;