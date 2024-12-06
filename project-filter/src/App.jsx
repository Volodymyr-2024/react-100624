import SmartList from "./components/SmartList";

function App() {
  return (
    <div>
      <SmartList />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7108.822292723512!2d13.35544429407112!3d52.50252586448267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb0e85329a1%3A0xa141f1e83418ee88!2sIT%20Career%20Hub!5e0!3m2!1sen!2skz!4v1733483184300!5m2!1sen!2skz"
        loading="lazy"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "12px",
        }}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default App;
