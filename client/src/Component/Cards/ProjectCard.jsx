import React from "react";
import style from "./ProjectCard.module.css";
import avatar from "../../assets/passport_photo.jpg";

function ProjectCard(props) {
  return (
    <div className={style.card_container}>
      <header>
        <img src={avatar} alt={props.name} />
      </header>
      <h1 className={style.bold_text}>{props.name}</h1>
      <h2 className={style.bold_text}>
        <span className={style.normal_text}>Working on </span>
        {props.project}
      </h2>
      <div className={style.container}>
        <div className={style.start}>
          <h1 className={style.bold_text}>Start date</h1>
          <h2 className={style.smaller_text}>{props.start}</h2>
        </div>

        <div className={style.end}>
          <h1 className={style.bold_text}>End date</h1>
          <h2 className={style.smaller_text}>{props.end}</h2>
        </div>
      </div>
      <div className={style.normal_text}>{props.discription}</div>
      <div className={style.update_button}>update</div>
    </div>
  );
}

export default ProjectCard;
