import OptionList from "./components/OptionList";
import SelectedItem from "./components/SelectedItem";

const App = () => {
  return (
    <main>
      <section className="container mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Choose Your Skip Size</h1>
          <p className="border-b-2 border-gray-200 pb-4">Select the skip size that best suits your needs.</p>
        </header>
        <OptionList />
      </section>
      <SelectedItem />
    </main>
  )
};

export default App;
