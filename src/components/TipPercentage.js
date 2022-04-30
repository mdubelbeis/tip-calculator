import { useState, useEffect } from 'react';

import PercentageButton from './PercentageButton';

const TipPercentage = ({ setTip, setCustomTip, customTipAmount }) => {
  const [custom, setCustom] = useState('');

  const onCustomTipChange = (e) => {
    const value = e.target.value;

    setCustom(value);
    setCustomTip(value);
  };

  return (
    <div>
      <h2 className="text-dark-grayish-cyan font-semibold">
        Select Tip %
      </h2>
      <div className="mt-2 grid grid-cols-2 gap-4 text-center xl:grid-cols-3">
        <PercentageButton custom={custom} setTip={setTip} />
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              <input
                className="p-2 w-full text-right focus:outline-strong-cyan rounded-md font-semibold text-2xl hover:cursor-pointer bg-very-light-gray-cyan placeholder:text-very-dark-cyan"
                value={customTipAmount}
                onChange={(e) => onCustomTipChange(e)}
                placeholder="Custom"
                type="number"
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TipPercentage;
