import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import People from "./components/People";
import Home from "./Home";
import Planets from "./components/Planets";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
    };
  }
  componentDidMount() {
    const urls = [
      "https://swapi.dev/api/people",
      "https://swapi.dev/api/planets",
    ];

    const fetchData = async () => {
      const [people, planets] = await Promise.all(
        urls.map(async (url) => {
          const res = await fetch(url);
          const data = await res.json();
          return data.results;
        })
      );
      this.setState({
        people: people,
        planets: planets,
      });
    };
    fetchData();
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/People"
            element={<People people={this.state.people} />}
          />
          <Route
            path="/Planets"
            element={<Planets planets={this.state.planets} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
