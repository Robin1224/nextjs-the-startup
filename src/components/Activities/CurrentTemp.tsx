interface Props {
  temperature: any;
}
const CurrentTemp = (props: Props) => {
  return (
    <section className="bg-rose pt-1 p-5 rounded-md">
      <span className="text-[5.625rem]">{props.temperature.temp}˚</span>
      <h2 className="text-lg leading-7">
        {props.temperature.title_1}
        {props.temperature.temp}
        {props.temperature.title_2}
      </h2>
      <p className="font-thin leading-7 mt-4">
        {props.temperature.description}
      </p>
    </section>
  );
};
export default CurrentTemp;
