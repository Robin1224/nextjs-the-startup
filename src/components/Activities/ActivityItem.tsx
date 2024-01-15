import Separator from "../utility/Separator";
import Image from "next/image";

interface Props {
  activity: any;
}
const ActivityItem = (props: Props) => {
  return (
    <div className="w-full flex flex-col relative sm:flex-row">
      <Image
        src={props.activity.mainImageUrl}
        alt={`${props.activity.title} image`}
        className="mt-5 h-32 w-full sm:h-28 sm:w-28 sm:mr-5 sm:aspect-square"
        width={335}
        height={130}
        style={{objectFit: "cover",}}
      />
      <div className="mt-5 w-full flex flex-col">
        {/* TODO: Find a way to make better deal with this overflow, so that the user knows there is more text */}
        <div className="sm:h-20 flex flex-col overflow-hidden">
          <span className="text-lg">{props.activity.title}</span>
          <span className="mt-3 sm:mt-0 leading-7 font-light h-full">{props.activity.shortDescription}</span>
        </div>
        <Separator className="mt-5 sm:mt-[1.9rem] mb-1 sm:mb-0 bg-black-200 h-px" orientation="horizontal" />
      </div>
    </div>
  );
};
export default ActivityItem;
