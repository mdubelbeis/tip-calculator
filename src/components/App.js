import { useState, useEffect } from 'react';

import Input from './Input';
import Output from './Output';

const App = () => {
  const [billAmount, setBillAmount] = useState('');
  const [noOfGuests, setNoOfGuests] = useState('');
  const [tipAmount, setTipAmount] = useState('');
  const [customTipAmount, setCustomTipAmount] = useState('');
  const [tipPerPerson, setTipPerPerson] = useState('0.00');
  const [totalPerPerson, setTotalPerPerson] = useState('0.00');

  const setBill = (value) => {
    setBillAmount(value);
  };

  const setGuests = (value) => {
    setNoOfGuests(value);
  };

  const setTip = (value) => {
    setTipAmount(value);
    setCustomTipAmount('');
  };

  const setCustomTip = (value) => {
    setTipAmount('');
    setCustomTipAmount(value);
  };

  const calculateOutput = () => {
    const tip =
      (billAmount * (tipAmount || customTipAmount / 100)) /
      noOfGuests;
    const total = billAmount / noOfGuests + tip;

    if (noOfGuests < 1) {
      setTipPerPerson('0.00');
      setTotalPerPerson('0.00');
    } else {
      setTipPerPerson(tip.toFixed(2));
      setTotalPerPerson(total.toFixed(2));
    }
  };

  const resetValues = () => {
    setBillAmount('');
    setNoOfGuests('');
    setTipAmount('');
    setCustomTipAmount('');
  };

  useEffect(() => calculateOutput());

  return (
    <div className="flex flex-col h-screen items-center xl:justify-center">
      <header className="p-8 text-center font-semibold tracking-[8px] xl:pt-0 xl:pb-20">
        <div className="text-very-dark-cyan text-2xl">
          <h1 className="flex flex-col">
            <span>SPLI</span>
            <span>TTER</span>
          </h1>
        </div>
      </header>
      <main className="w-screen p-8 bg-pure-white rounded-t-3xl max-w-[500px] xl:grid xl:grid-cols-2 xl:gap-10 xl:max-w-[920px] xl:max-h-[481px] xl:rounded-3xl xl:shadow-xl">
        <Input
          setBill={setBill}
          setGuests={setGuests}
          setTip={setTip}
          setCustomTip={setCustomTip}
          billAmount={billAmount}
          noOfGuests={noOfGuests}
          tipAmount={tipAmount}
          customTipAmount={customTipAmount}
        />
        <Output
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
          resetValues={resetValues}
        />
      </main>
    </div>
  );
};

export default App;
