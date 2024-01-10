import Image from "next/image";

interface Props {}
const ForecastItem = (props: Props) => {
  return (
    <>
      <span>Tuesday 25th Feb</span>
      <div className="flex">
        <Image
          src="/weather_icons/sun.svg"
          alt="Sun"
          width={24}
          height={24}
          priority
        />
          <span className="ml-1">19° /</span>
          <span>{" "}22°</span>
          <Image
          src="/weather_icons/precipitation.svg"
          alt="Precipitation"
          width={10}
          height={15}
          priority
        />
          <span>0.5mm</span>
          <span>N/W</span>
      </div>
    </>
  );
};
export default ForecastItem;
