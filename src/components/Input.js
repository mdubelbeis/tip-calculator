import BillAmount from './BillAmount';
import TipPercentage from './TipPercentage';
import Guests from './Guests';

const Input = () => {
  return (
    <div className="flex flex-col space-y-8">
      <BillAmount />
      <TipPercentage />
      <Guests />
    </div>
  );
};

export default Input;
