import "./Card2.css";
const Card2 = ({ planet }) => {
  return (
    <div className="Card">
      <h4>{planet.name}</h4>
      <h4>
        climate
        <br />
        <span>{planet.climate}</span>
      </h4>
      <h4>
        diameter
        <br />
        <span>{planet.diameter}</span>
      </h4>
      <h4>
        population
        <br />
        <span>{planet.population}</span>
      </h4>
    </div>
  );
};

export default Card2;
