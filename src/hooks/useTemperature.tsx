// Gets the current day's temperature, and sanitizes the data to return the temperature in celcius along with the appropriate weather info
// Path: src/hooks/useTemperature.tsx

const useTemperature = async () => {
  const res = await fetch('https://dtnl-frontend-case.vercel.app/api/get-weather', { cache: 'no-store', next: { tags: ['weatherData'] } }).then((response) => response.json())
  const sanitizedRes = {temp: 0, title_1: '', title_2: '', description: ''};
  const keyword = '{{ CELCIUS }}';

  if (res.temperature.metric === 'FAHRENHEIT') {
    res.temperature.temp = Math.round((res.temperature.temp - 32) * 5/9);
    res.temperature.metric = 'CELCIUS';
    sanitizedRes.temp = res.temperature.temp;
  } else {
    sanitizedRes.temp = res.temperature.temp;
  };

  res.weatherInfo.forEach((entry: any) => {
    if (entry.minTemp === null) {
      entry.minTemp = -100;
    }
    if (entry.maxTemp === null) {
      entry.maxTemp = 100;
    }
    if (res.temperature.temp >= entry.minTemp && res.temperature.temp <= entry.maxTemp) {
      const wordIndex = entry.title.indexOf(keyword);
      sanitizedRes.title_1 = entry.title.substring(0, wordIndex);
      sanitizedRes.title_2 = entry.title.substring(wordIndex + keyword.length);
      sanitizedRes.description = entry.description;
      console.log(sanitizedRes);
    }
  });

  return sanitizedRes;
};

export default useTemperature