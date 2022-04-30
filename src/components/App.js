import Input from './Input';
import Output from './Output';

const App = () => {
  return (
    <div className="flex flex-col">
      <header className="p-10 text-center font-semibold tracking-[8px]">
        <div className="text-very-dark-cyan">
          <p>SPLI</p>
          <p>TTER</p>
        </div>
      </header>
      <main>
        <Input />
        <Output />
      </main>
    </div>
  );
};

export default App;
