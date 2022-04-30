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
        <PercentageButton amount={'Custom'} />
      </div>
    </div>
  );
};

export default TipPercentage;
