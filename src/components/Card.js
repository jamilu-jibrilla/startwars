import "./Card.css";
const Card = ({ person }) => {
  return (
    <div className="Card">
      <h4>{person.name}</h4>
      <h4>
        height
        <br />
        <span>{person.height}</span>
      </h4>
      <h4>
        Mass
        <br />
        <span>{person.mass}</span>
      </h4>
      <h4>
        hair color
        <br />
        <span>{person.hair_color}</span>
      </h4>
    </div>
  );
};

export default Card;
