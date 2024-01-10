//Gets the upcoming weather forecast for the specified amount of days (max 7) in CELCIUS
// Path: src/hooks/useForecast.tsx

interface Params {}
const useForecast = async (params: Params) => {
    const res = await fetch('https://dtnl-frontend-case.vercel.app/api/get-forecast', { next: { tags: ['weatherData'] } }).then((response) => response.json())

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }

}
export default useForecast