import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data.js";

function App() {
  const entryElement = data.map((entry) => {
    return (
      <Entry
        key = {entry.id}
        entry = {entry}
      />
    );
  });

  return (
    <>
      <Header />
      <main className="container">
        {entryElement}
      </main>
    </>
  );
}

export default App;
