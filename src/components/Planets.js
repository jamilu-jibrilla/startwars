import Card2 from "./Card2";
import "./Planet.css";
const Planets = ({ planets }) => {
  console.log(planets);
  return (
    <div className="Planets">
      {planets.map((planet) => (
        <Card2 planet={planet} />
      ))}
    </div>
  );
};

export default Planets;
