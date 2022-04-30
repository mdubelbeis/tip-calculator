import Input from './Input';
import Output from './Output';

const App = () => {
  return (
    <div className="flex flex-col h-screen items-center xl:justify-center">
      <header className="p-8 text-center font-semibold tracking-[8px] xl:p-20">
        <div className="text-very-dark-cyan text-xl">
          <p>SPLI</p>
          <p>TTER</p>
        </div>
      </header>
      <main className="w-screen p-8 bg-pure-white rounded-t-3xl max-w-[500px] xl:grid xl:grid-cols-2 xl:gap-10 xl:max-w-[920px] xl:max-h-[481px]">
        <Input />
        <Output />
      </main>
    </div>
  );
};

export default App;
