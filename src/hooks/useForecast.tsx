// Gets the upcoming weather forecast for the specified amount of days (max 7) in CELCIUS
// Path: src/hooks/useForecast.tsx

interface Params {
  days: number;
}
const useForecast = async (params: Params) => {
  const res = await fetch('https://dtnl-frontend-case.vercel.app/api/get-forecast', { next: { tags: ['weatherData'] } }).then((response) => response.json())

  res.forecast.forEach((entry: any) => {
    if (entry.metric === 'FAHRENHEIT') {
      entry.minTemp = (entry.minTemp - 32) * 5/9;
      entry.maxTemp = (entry.maxTemp - 32) * 5/9;
      entry.metric = 'CELCIUS';
    };
  });

  const finalRes = res.forecast.slice(0, params.days);

  // console.log(finalRes[0]);

  return finalRes;
};

export default useForecast