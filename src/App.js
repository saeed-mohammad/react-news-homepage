import "./App.scss";
import CardList from "./component/CardList";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <CardList />
      <Sidebar />
    </div>
  );
}

export default App;
