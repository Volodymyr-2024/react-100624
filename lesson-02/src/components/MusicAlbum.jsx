export default function MusicAlbum({ artist, title, tracks }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{artist}</p>
      <ul>
        {tracks.map((track) => (
          <li key={track.order}>{track.title}</li>
        ))}
      </ul>
    </div>
  );
}
