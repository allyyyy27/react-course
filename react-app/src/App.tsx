//import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";
import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

/*
function App() {
  let items = ["New York", "Korea", "Japan", "Paris", "England"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
*/

/*
function App() {
  return (
    <div>
      <Alert>
        Hello <span>World!</span>
      </Alert>
    </div>
  );
}

export default App;

*/
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Buttons color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Buttons>
    </div>
  );
}

export default App;
