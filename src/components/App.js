import Input from './Input';
import Output from './Output';

const App = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <header className="p-8 text-center font-semibold  tracking-[8px]">
        <div className="text-very-dark-cyan text-xl">
          <p>SPLI</p>
          <p>TTER</p>
        </div>
      </header>
      <main className="w-screen h-screen p-8 bg-pure-white rounded-t-3xl max-w-[500px]">
        <Input />
        <Output />
      </main>
    </div>
  );
};

export default App;
