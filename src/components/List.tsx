import { MouseEvent } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const handleClick = (e: string) => {
    console.log(e);
  };

  return (
    <ul className="list-group">
      {data.map((element) => (
        <li
          onClick={() => handleClick(element)}
          key={element}
          className="list-group-item"
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;
