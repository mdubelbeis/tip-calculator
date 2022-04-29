import { useState } from 'react';
const Guests = () => {
  const [guestsPaying, setGuestsPaying] = useState(0);
  return (
    <form>
      <label htmlFor="guests-paying">
        <input
          type="number"
          value={guestsPaying}
          id="guest-paying"
          onChange={(e) => setGuestsPaying(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Guests;
