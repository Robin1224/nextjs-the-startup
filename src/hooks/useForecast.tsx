// Gets the upcoming weather forecast for the specified amount of days (max 7) in CELCIUS
// Path: src/hooks/useForecast.tsx

interface Params {
  days: number;
}
const useForecast = async (params: Params) => {
  const res = await fetch('https://dtnl-frontend-case.vercel.app/api/get-forecast', { next: { tags: ['weatherData'] } }).then((response) => response.json())

  res.forecast.forEach((entry: any) => {
    if (entry.metric === 'FAHRENHEIT') {
      entry.minTemp = Math.round((entry.minTemp - 32) * 5/9);
      entry.maxTemp = Math.round((entry.maxTemp - 32) * 5/9);
      entry.metric = 'CELCIUS';
    };

    if (entry.windDirection.length > 1) {
      entry.windDirection = entry.windDirection.slice(0, 1) + "/" + entry.windDirection.slice(1);
    }
    
  });

  const sanitizedRes = res.forecast.slice(0, params.days);

  return sanitizedRes;
};

export default useForecast