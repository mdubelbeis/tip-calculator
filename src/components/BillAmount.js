import { useState } from 'react';

import dollar from '../images/icon-dollar.svg';

const BillAmount = () => {
  const [bill, setBill] = useState(0);

  return (
    <form>
      <label htmlFor="bill-amount">
        Bill
        <div className="relative">
          <input
            className="relative w-full p-4 bg-very-light-gray-cyan mt-2 focus:outline-0 text-right text-very-dark-cyan font-semibold text-2xl"
            type="text"
            value={bill}
            id="bill-amount"
            onChange={(e) => setBill(e.target.value)}
            onClick={(e) => setBill('')}
          />
          <img
            className="absolute top-[34px] left-4"
            src={dollar}
            alt="dollar sign"
          />
        </div>
      </label>
    </form>
  );
};

export default BillAmount;
