import { ReactNode } from "react";
import { Title } from "./Title";

export const TitleContent = ({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4 px-[6rem]">
      <Title title={title} />
      <div className="text-black text-center">{content}</div>
    </div>
  );
};
