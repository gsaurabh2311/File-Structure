import React, { useState } from "react";

const Folder = ({ dir }) => {
  const [show, setShow] = useState(false);

  const handlerClick = (e) => {
    setShow(!show);
    e.stopPropagation();
  };
  if (dir.type === "folder") {
    return (
      <div onClick={handlerClick}>
        <span className="folder">->{dir.name}</span>
        <div style={{ display: `${show ? "block" : "none"}` }}>
          {dir.items.map((item, index) => (
            <Folder dir={item} key={index} />
          ))}
        </div>
      </div>
    );
  } else {
    return <span className="file">{dir.name}</span>;
  }
};

export default Folder;
