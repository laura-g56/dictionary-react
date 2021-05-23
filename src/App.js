import './App.css';
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        {/* <img src={logo} className="App-logo img-fluid" alt="logo" /> */}
        <h1> Online Dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="dictionary"/>
      </main>
        <Footer />
      </div>
    </div>
  );
}

