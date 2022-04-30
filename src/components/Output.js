const Output = ({ tip, total }) => {
  return (
    <div className="mt-8 bg-very-dark-cyan py-6 px-6 space-y-8 rounded-2xl">
      <div className="mt-2 flex justify-between">
        <div>
          <h3 className="text-pure-white">Tip Amount</h3>
          <p className="text-dark-grayish-cyan text-sm ">/ person </p>
        </div>
        <div>
          <p className="text-strong-cyan text-2xl">{`$${tip}`}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <h3 className="text-pure-white">Total</h3>
          <p className="text-dark-grayish-cyan text-sm ">/ person </p>
        </div>
        <div>
          <p className="text-strong-cyan text-2xl">{`$${tip}`}</p>
        </div>
      </div>

      <div className="text-center w-full bg-strong-cyan text-lg rounded-md py-2">
        <button>RESET</button>
      </div>
    </div>
  );
};

export default Output;
