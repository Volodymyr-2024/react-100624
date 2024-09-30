import TeamCard from "./TeamCard";
import "./teamCards.css";

export default function CardsList({ teams }) {
  return (
    <ul className="team-list">
      {teams.map((team) => (
        <TeamCard key={team.name} team={team} />
      ))}
    </ul>
  );
}
