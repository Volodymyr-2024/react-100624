export default function TeamCard({ team }) {
  return (
    <li>
      <h3>{team.name}</h3>
      <ul className="member-list">
        {team.members.map((member) => {
          return <li key={member}>{member}</li>;
        })}
      </ul>
    </li>
  );
}
