import dollar from '../images/icon-dollar.svg';

const BillAmount = ({ setBill, billAmount }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <span className="text-dark-grayish-cyan font-semibold">
        Bill
      </span>
      <div className="relative">
        <label htmlFor="bill-amount"></label>
        <input
          className="relative w-full p-4 bg-very-light-gray-cyan mt-2 rounded-md focus:outline-hover-cyan active:outline-hover-cyan text-right text-very-dark-cyan font-semibold text-2xl"
          type="number"
          value={billAmount}
          id="bill-amount"
          placeholder="0.00"
          onChange={(e) => setBill(e.target.value)}
        />
        <img
          className="absolute top-[34px] left-4"
          src={dollar}
          alt="dollar sign"
        />
      </div>
    </form>
  );
};

export default BillAmount;
