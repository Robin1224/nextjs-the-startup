interface Props {
  temperature: any;
}
const CurrentTemp = (props: Props) => {
  return (
    <section className="bg-rose pt-1 p-5 rounded-md flex flex-col md:w-full @temp/main:flex-row @temp/main:p-4 md:max-w-[37rem] md:mx-auto @main-full/main:!ml-[4.5rem]">
      <span className="text-[5.625rem] @temp/main:ml-2 @temp/main:mr-4 @temp/main:text-[5rem]">{props.temperature.temp}˚</span>
      <div className="flex flex-col @temp/main:my-auto">
        <h2 className="text-lg leading-7">
          {props.temperature.title_1}
          {props.temperature.temp}
          {props.temperature.title_2}
        </h2>
        <p className="font-light leading-7 mt-4 @temp/main:mt-1">
          {props.temperature.description}
        </p>
      </div>
    </section>
  );
};
export default CurrentTemp;
