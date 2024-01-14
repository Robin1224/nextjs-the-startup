import Separator from "../utility/Separator";
import Image from "next/image";

interface Props {
  activity: any;
  key: number;
}
const ActivityItem = (props: Props) => {
  return (
    <div className="w-full flex flex-col relative">
      <Image
        src={props.activity.mainImageUrl}
        alt={`${props.activity.title} image`}
        className="mt-5 h-32"
        width={335}
        height={130}
        style={{objectFit: "cover",}}
      />
      <span className="mt-5 text-lg">{props.activity.title}</span>
      <span className="mt-3 leading-7 font-light">{props.activity.shortDescription}</span>
      <Separator className="mt-5 mb-1 bg-black-200 h-px" orientation="horizontal" />
    </div>
  );
};
export default ActivityItem;
