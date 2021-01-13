import { useState } from "react";
import Popup from "./component/popup";

function App() {
  const [trigger, setTrigger] = useState(false)
  return (
    <div className="App">
      <main>
        <button onClick={() => setTrigger(true)}>Open Poup Up</button>
      
        <Popup trigger={trigger} onClose={setTrigger}>
          <h2>Button Popup</h2>
          <p>This is a Button popup.</p>
        </Popup>
      </main>
    
    </div>
  );
}

export default App;
