import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState(true);
  const handleSubmitBlue = () =>{
    setColor(true);
  }
  const handleSubmitRed = () =>{
    setColor(false);
  }
  return (
    <main className="container">
      <div className="container-title">
        {
          color ? (
            <h1 className="main-text">Prueba Basica React JS</h1>
          ) : (
            <h1 className="main-text-2">Prueba Basica React JS</h1>
          )
        }
       
      </div>
      <div className="container-btn">
        <Button className="btn-blue" name="Blue" handleSubmit={handleSubmitBlue} />
        <Button className="btn-red" name="Red" handleSubmit={handleSubmitRed} />
      </div>
    </main>
  );
}

export default App;
