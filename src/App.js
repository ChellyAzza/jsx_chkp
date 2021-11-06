import "./App.css";
import Azza from "./srcimage.jpg";
function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxwidth: "100vw" }}> </div>
      <h1 className="title red">azza chelly</h1>
      <img src="publicimage.jpg" alt="a desk with ppl sitting around" />
      <img src={Azza} alt="myimage" />
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
