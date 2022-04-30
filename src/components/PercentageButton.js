const PercentageButton = ({ amount }) => {
  return (
    <div
      className={`p-2 rounded-md bg-very-dark-cyan font-semibold text-2xl text-pure-white hover:bg-strong-cyan hover:cursor-pointer`}
    >
      {amount === 'Custom' ? `${amount}` : `${amount}%`}
    </div>
  );
};

export default PercentageButton;
