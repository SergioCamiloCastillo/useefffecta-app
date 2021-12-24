import { useState } from "react/cjs/react.development";
import FetchCard from "./FetchCard";
import Lifecycle from "./Lifecycle";
import Resize from "./Resize";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
     <Lifecycle /> 
      {/* <FetchCard /> */}
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {/*       {show && <Resize />}
       */}
    </div>
  );
}

export default App;
