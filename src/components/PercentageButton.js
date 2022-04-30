import { useState, useEffect } from 'react';

const tipAmounts = [5, 10, 15, 25, 50];

const PercentageButton = ({ setTip, custom }) => {
  const [activeButton, setActiveButton] = useState('');

  const onButtonClick = (value, index) => {
    setTip(value / 100);
    setActiveButton(index);
    // Conditional to check if custom input has value:
  };

  const buttons = tipAmounts.map((tip, index) => (
    <button
      key={index}
      className={`p-2 rounded-md font-semibold text-2xl text-pure-white bg-very-dark-cyan hover:bg-strong-cyan hover:cursor-pointer
      ${activeButton === index ? 'selected' : 'nonSelected'}
      ${custom > tip ? 'nonSelected' : 'null'}`}
      onClick={() => onButtonClick(tip, index)}
    >
      {tip}
    </button>
  ));

  return buttons;
};

export default PercentageButton;
