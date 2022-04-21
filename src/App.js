import "./App.css";
import Navbar from "./Navbar";
import People from "./components/People";
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
        <People people={this.state.people} />
        {/* <Planet planets={this.state.planets} /> */}
      </div>
    );
  }
}

export default App;
