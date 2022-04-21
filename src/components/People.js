import Card from "./Card";
import "./People.css";
const People = ({ people }) => {
  console.log(people);
  return (
    <div className="People">
      {people.map((person) => (
        <Card person={person} />
      ))}
    </div>
  );
};

export default People;
