export default function CompWithEvents() {
  function handleButtonClick(event) {
    alert("Button clicked!");
  }

  return (
    <div>
      <p>Component with events</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}
