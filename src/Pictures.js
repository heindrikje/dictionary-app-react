import React from "react";

export default function Pictures(props) {
  if (props.data) {
    return (
      <div className="Pictures">
        <section>Hi</section>
      </div>
    );
  } else {
    return null;
  }
}
