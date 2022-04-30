import { useState } from 'react';

import person from '../images/icon-person.svg';
const Guests = () => {
  const [guests, setGuests] = useState(0);
  return (
    <form>
      <label htmlFor="guests">
        <h3 className="text-dark-grayish-cyan font-semibold">
          Number of People
        </h3>
        <div className="relative">
          <input
            className="relative w-full p-4 bg-very-light-gray-cyan mt-2 focus:outline-0 text-right text-very-dark-cyan font-semibold text-2xl"
            type="text"
            value={guests}
            id="guests"
            onChange={(e) => setGuests(e.target.value)}
            onClick={(e) => setGuests('')}
          />
          <img
            className="absolute top-[34px] left-4"
            src={person}
            alt="person icon"
          />
        </div>
      </label>
    </form>
  );
};

export default Guests;
