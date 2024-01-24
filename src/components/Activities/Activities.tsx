import CurrentTemp from "./CurrentTemp";
import ActivitiesList from "./ActivitiesList";
import useTemperature from "@/src/hooks/useTemperature";

interface Props {}
const Activities = async (props: Props) => {
  const tempData = await useTemperature();

  return (
    <main className="p-5 md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-1 @container/main">
      <div className="flex flex-col">
      <CurrentTemp temperature={tempData} />
      <section className="flex flex-col md:max-w-[37rem] md:mx-auto @main-full/main:!ml-[4.5rem]">
        <h3 className="text-2xl mt-8 block">Some things you could do:</h3>
        <ActivitiesList possible={true} temperature={tempData.temp} />
      </section>
      <section className="flex flex-col md:max-w-[37rem] md:mx-auto @main-full/main:!ml-[4.5rem]">
        <h3 className="text-2xl mt-8 block sm:mt-12">
          Some things you should not do:
        </h3>
        <ActivitiesList possible={false} temperature={tempData.temp} />
      </section>
      </div>
    </main>
  );
};
export default Activities;
