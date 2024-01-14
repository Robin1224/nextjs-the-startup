import CurrentTemp from "./CurrentTemp";
import ActivitiesList from "./ActivitiesList";
import useTemperature from "@/src/hooks/useTemperature";

interface Props {}
const Activities = async (props: Props) => {
  const tempData = await useTemperature();

  return (
    <main className="p-5">
      <CurrentTemp temperature={tempData}/>
      <span className="text-2xl mt-8 block">Some things you could do:</span>
      <ActivitiesList possible={true} temperature={tempData.temp}/>
      <span className="text-2xl mt-8 block">Some things you should not do:</span>
      <ActivitiesList possible={false} temperature={tempData.temp}/>
    </main>
  );
};
export default Activities;
