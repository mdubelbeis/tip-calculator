import PercentageButton from './PercentageButton';

const TipPercentage = () => {
  return (
    <div>
      <h3 className="text-dark-grayish-cyan font-semibold">
        Select Tip %
      </h3>
      <div className="mt-2 grid grid-cols-2 gap-4 text-center xl:grid-cols-3">
        <PercentageButton amount={5} />
        <PercentageButton amount={10} />
        <PercentageButton amount={15} />
        <PercentageButton amount={25} />
        <PercentageButton amount={50} />
        {/* <PercentageButton amount={'Custom'} /> */}
        <div>
          <form action="">
            <label htmlFor="">
              <input
                className="p-2 w-32 text-right focus:outline-strong-cyan rounded-md font-semibold text-2xl hover:cursor-pointer bg-very-light-gray-cyan text-very-dark-cyan"
                type="input"
                placeholder="Custom"
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TipPercentage;
