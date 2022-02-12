import React from "react";

export default function Pictures(props) {
  console.log(props.pictures);
  if (props.pictures) {
    return (
      <div className="Pictures">
        <section>
          {props.pictures.map(function (picture, index) {
            return (
              <div key={index}>
                <a href={picture.src.original} target="_blank" rel="noreferrer">
                  <img src={picture.src.small} alt="pic" />
                </a>
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
