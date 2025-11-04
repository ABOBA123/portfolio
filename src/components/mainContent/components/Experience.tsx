import { Markup } from "../../markup";
import { FC } from "react";
import { MapToMarkupDto } from "../../sideBar/types";

interface ExperienceProps {
  data: MapToMarkupDto;
}

export const Experience: FC<ExperienceProps> = ({ data }) => {
  return (
    <Markup
      leftRender={
        <div className="">
          <img src={data.image} alt={data.desc} />
        </div>
      }
      rightRender={
        <div className="small-margin">
          <p>{data.name}</p>
          <a className="name-props">{data.desc}</a>
        </div>
      }
    />
  );
};