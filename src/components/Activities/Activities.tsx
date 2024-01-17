import CurrentTemp from "./CurrentTemp";
import ActivitiesList from "./ActivitiesList";
import useTemperature from "@/src/hooks/useTemperature";

interface Props {}
const Activities = async (props: Props) => {
  const tempData = await useTemperature();

  return (
    <main className="p-5 md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-1">
      <CurrentTemp temperature={tempData} />
      <section className="flex flex-col">
        <span className="text-2xl mt-8 block">Some things you could do:</span>
        <ActivitiesList possible={true} temperature={tempData.temp} />
      </section>
      <section className="flex flex-col">
        <span className="text-2xl mt-8 block sm:mt-12">
          Some things you should not do:
        </span>
        <ActivitiesList possible={false} temperature={tempData.temp} />
      </section>
    </main>
  );
};
export default Activities;
