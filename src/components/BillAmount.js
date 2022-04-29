import { useState } from 'react';

const BillAmount = () => {
  const [bill, setBill] = useState(0);
  return (
    <form>
      <label htmlFor="bill-amount">
        <input
          type="text"
          value={bill}
          id="bill-amount"
          onChange={(e) => setBill(e.target.value)}
        />
      </label>
    </form>
  );
};

export default BillAmount;
