// Gets the list of activities, and sanitizes the data to return either possible or not possible activities
// Path: src/hooks/useActivities.tsx

const useActivities = async (temperature: number, possible: boolean) => {
  const res = await fetch('https://dtnl-frontend-case.vercel.app/api/get-things-to-do', { next: { tags: ['weatherData'] } }).then((response) => response.json())

  let possibleActivities: Array<object> = [];
  let notPossibleActivities: Array<object> = [];

  res.activities.forEach((activity: any) => {
    if (activity.minTemp === null && activity.maxTemp != null) {
      activity.minTemp = -100;
    }
    if (activity.maxTemp === null && activity.minTemp === null) {
      activity.maxTemp = -100;
    }
    if (activity.minTemp === null && activity.maxTemp === null) {
      possibleActivities.push(activity);
    } else if (temperature >= activity.minTemp && temperature <= activity.maxTemp) {
      possibleActivities.push(activity);
    } else {
      notPossibleActivities.push(activity);
    }
  });

  if (possible) {
    return possibleActivities;
  } else {
    return notPossibleActivities;
  }
};

export default useActivities