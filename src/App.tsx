import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Kakaroto", "Karl", "Naruto"];
  return (
    <Card>
      <CardBody title="This is a title." text="This is a text." />
      <List data={list} />
    </Card>
  );
}

export default App;
