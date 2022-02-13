import React from "react";
import "./Pictures.css";

export default function Pictures(props) {
  console.log(props.pictures);
  if (props.pictures) {
    return (
      <div className="Pictures">
        <section className="row">
          {props.pictures.map(function (picture, index) {
            return (
              <div key={index} className="col-3">
                <a href={picture.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={picture.src.landscape}
                    alt={picture.src.photographer}
                    className="img-fluid"
                  />
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
