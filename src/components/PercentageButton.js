const PercentageButton = ({ amount }) => {
  const bgColor =
    amount === 'Custom'
      ? 'bg-very-light-gray-cyan'
      : 'bg-very-dark-cyan';

  const textColor =
    amount === 'Custom' ? 'text-very-dark-cyan' : 'text-pure-white';

  return (
    <div
      className={`p-2 rounded-md font-semibold text-2xl ${bgColor} ${textColor} hover:bg-strong-cyan`}
    >
      {amount === 'Custom' ? `${amount}` : `${amount}%`}
    </div>
  );
};

export default PercentageButton;
