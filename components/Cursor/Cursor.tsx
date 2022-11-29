import { useEffect, useState } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import _ from "lodash";

const Cursor = () => {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const { x, y } = useMousePosition();

  useEffect(() => {
    document.addEventListener("mousemove", (e) =>
      setTimeout(() => {
        setCoord({ x: e.clientX, y: e.clientY });
      }, 50)
    );

    return () => {
      document.removeEventListener("mousemove", (e) =>
        setTimeout(() => {
          setCoord({ x: e.clientX, y: e.clientY });
        }, 50)
      );
    };
  }, []);

  return (
    <div
      className="w-8 h-8 bg-white rounded-full fixed mix-blend-difference z-50 pointer-events-none"
      style={{
        left: `${coord.x}px`,
        top: `${coord.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};

export default Cursor;
