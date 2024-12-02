import Button from '../../ui/Button';
import PropTypes from 'prop-types';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';
import { useDispatch } from 'react-redux';

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currentQuantity: PropTypes.number.isRequired,
};
