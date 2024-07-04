import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Routing from "./routes/Routing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
