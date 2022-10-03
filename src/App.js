import data from "./data";
import Header from "./Header";
import Entry from "./Entry";

function App() {
  const entries = data.map((item) => {
    return <Entry {...item} />;
  });

  return (
    <div>
      <Header />
      <main className="entries">{entries}</main>
    </div>
  );
}

export default App;
