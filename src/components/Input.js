import BillAmount from './BillAmount';
import TipPercentage from './TipPercentage';
import Guests from './Guests';

const Input = ({
  setBill,
  setGuests,
  setTip,
  setCustomTip,
  billAmount,
  noOfGuests,
  customTipAmount,
}) => {
  return (
    <div className="flex flex-col space-y-8">
      <BillAmount setBill={setBill} billAmount={billAmount} />
      <TipPercentage
        setTip={setTip}
        customTipAmount={customTipAmount}
        setCustomTip={setCustomTip}
      />
      <Guests setGuests={setGuests} noOfGuests={noOfGuests} />
    </div>
  );
};

export default Input;
