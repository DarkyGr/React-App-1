type Props = {
  data: string[];
};

function List({ data }: Props) {
  return (
    <ul className="list-group">
      {data.map((element) => (
        <li key={element} className="list-group-item">
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;
