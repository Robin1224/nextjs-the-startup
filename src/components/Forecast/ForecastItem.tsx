import Image from "next/image";
import { DateTime } from "luxon";

interface Props {
  data: any;
}
const ForecastItem = (props: Props) => {
  const date = DateTime.fromISO(props.data.date);
  const weekday = date.weekdayLong;
  const month = date.monthShort;

  switch (date.day) {
    case 1:
    case 21:
    case 31:
      var day = `${date.day}st`;
      break;
    case 2:
    case 22:
      var day = `${date.day}nd`;
      break;
    case 3:
    case 23:
      var day = `${date.day}rd`;
      break;
    default:
      var day = `${date.day}th`;
  }

  return (
    <>
      <span className="font-normal">{`${weekday} ${day} ${month}`}</span>
      <div className="flex pr-8 mb-4 mt-1">
        <Image
          src="/weather_icons/sun.svg"
          alt="Sun"
          width={24}
          height={24}
          priority
        />
        <div className="w-20">
        <span className="ml-1 font-light">{`${props.data.minTemp}° /`}</span>
        <span className="ml-2">{` ${props.data.maxTemp}°`}</span>
        </div>
        <Image
          src="/weather_icons/precipitation.svg"
          alt="Precipitation"
          className="ml-5"
          width={12}
          height={18}
          priority
        />
        <span className="ml-6 w-16 font-light">{`${props.data.precipitation}mm`}</span>
        <span className="ml-5 w-8 font-light">{props.data.windDirection}</span>
        <Image
          src="/weather_icons/wind_direction.svg"
          alt="Wind direction north-west"
          className="ml-2"
          width={15}
          height={15}
          priority
        />
      </div>
    </>
  );
};
export default ForecastItem;
