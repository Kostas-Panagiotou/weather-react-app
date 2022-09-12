import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
import Descriptions from "./components/Descriptions";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg})` }}>
     <div className="overlay">
      <div className="container">
        <div className="section section_inputs">
          <input type="text" name="city" placeholder="Enter City .."/>
          <button>°C</button>
        </div>
      
        <div className="section section__temperature">
          <div className="icon">
            <h3>Athens, GR</h3>
            <img src="" alt=""
            />
            <h3>Cloudy</h3>
          </div>
          <div className="temperature">
            <h1>34 °C</h1>
          </div>
        </div>
        
      {/*bottom description*/}
      <Descriptions />
      </div>
     </div>
    </div> 
 
 
  );
}

export default App;
