import { useState } from 'react';

import person from '../images/icon-person.svg';
const Guests = ({ setGuests, noOfGuests }) => {
  // const [noOfGuests, setNoOfGuests] = useState(1);

  const borderColor = noOfGuests < 1 ? 'border-red-500' : '';
  const borderSize = noOfGuests < 1 ? 'border-2' : '';
  const outlineColor =
    noOfGuests < 1
      ? 'focus:outline-red-500'
      : 'focus:outline-hover-cyan';

  // const onInputChange = (e) => {
  //   const value = parseInt(e.target.value);
  //   setNoOfGuests(value);
  //   setGuests(value);
  // };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center justify-between">
        <span className="text-dark-grayish-cyan font-semibold">
          Number of People
        </span>
        {noOfGuests < 1 && (
          <p className="text-[12px] text-red-500 mt-1">
            Can't be zero
          </p>
        )}
      </div>
      <div className="relative">
        <label htmlFor="guests"></label>
        <input
          className={`relative w-full p-2 bg-very-light-gray-cyan mt-2 ${borderSize} ${borderColor} ${outlineColor} text-right text-very-dark-cyan font-semibold text-2xl rounded-md`}
          type="number"
          value={noOfGuests}
          id="guests"
          placeholder="0"
          onChange={(e) => setGuests(e.target.value)}
        />
        <img
          className="absolute top-[24px] left-4"
          src={person}
          alt="person icon"
        />
      </div>
    </form>
  );
};

export default Guests;
