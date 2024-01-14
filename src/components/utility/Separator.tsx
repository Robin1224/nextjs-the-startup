"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";

interface Props {
  orientation: "horizontal" | "vertical";
  className?: string;
}

const Separator = (props: Props) => {
  return (
    <SeparatorPrimitive.Root
      className={props.className}
      orientation={props.orientation}
    />
  );
};

export default Separator;