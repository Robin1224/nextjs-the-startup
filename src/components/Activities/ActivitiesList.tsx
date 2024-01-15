import useActivities from "@/src/hooks/useActivities";
import ActivityItem from "./ActivityItem";

interface Props {
  possible: boolean;
  temperature: number;
}
const ActivitiesList = async (props: Props) => {
  const activities = await useActivities(props.temperature, props.possible);

  return (
    <>
      {activities.map((activity: any, index) => (
        <ActivityItem activity={activity} key={index} />
        
      ))}
    </>
  );
};
export default ActivitiesList;
