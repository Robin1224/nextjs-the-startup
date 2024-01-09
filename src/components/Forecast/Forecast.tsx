import ForecastItem from "./ForecastItem";

interface Props {}
const Forecast = (props: Props) => {
  return (
    <section className="p-5 bg-black-50">
      <h3 className="mt-5 mb-9 text-lg text-medium">Upcoming 5 days</h3>
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
    </section>
  );
};
export default Forecast;