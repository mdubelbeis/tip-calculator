const Output = ({ tipPerPerson, totalPerPerson, resetValues }) => {
  return (
    <div className="mt-8 bg-very-dark-cyan py-6 px-6 space-y-8 flex flex-col justify-between rounded-2xl xl:mt-0 xl:space-y-0 xl:p-8">
      <div className="space-y-6 xl:space-y-12">
        <div className="mt-2 flex justify-between flex-wrap">
          <div>
            <h3 className="text-pure-white">Tip Amount</h3>
            <p className="text-dark-grayish-cyan text-sm ">
              / person{' '}
            </p>
          </div>
          <div>
            <p className="text-strong-cyan text-4xl font-semibold">{`$${tipPerPerson}`}</p>
          </div>
        </div>

        <div className="flex justify-between flex-wrap">
          <div>
            <h3 className="text-pure-white">Total</h3>
            <p className="text-dark-grayish-cyan text-sm ">
              / person{' '}
            </p>
          </div>
          <div>
            <p className="text-strong-cyan text-4xl font-semibold">{`$${totalPerPerson}`}</p>
          </div>
        </div>
      </div>

      <div
        className="hover:cursor-pointer"
        onClick={() => resetValues()}
      >
        <button className="bg-strong-cyan text-lg rounded-md py-2 w-full text-center hover:bg-hover-cyan">
          RESET
        </button>
      </div>
    </div>
  );
};

export default Output;
