import "antd/dist/reset.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Sidebar from "./Sidebar";


function App() {

  return (
    <div style={{ display: "flex", flexDirection: "column",flex:1 ,height:"100vh" }}>
    <Header/>
    <div style={{ display: "flex", flexDirection: "row",flex:1 }}>
    <Sidebar/>
    <Content />

    </div>
      <Footer/>
      
    </div>
  );
}

export default App;
