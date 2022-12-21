import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';

export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
  return (
    <div style={{ border: '1px solid black' }}>
      <h2>{name}</h2>
      <div>
        <div>
          <BsAlarm size="" />
          {time}min
        </div>
        <div>
          <HiOutlineChartPie />
          {servings}
        </div>
        <div>
          <HiOutlineChartBar />
          {calories}
        </div>
      </div>
      <div>
        <h3>Difficulty</h3>
        <div>
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>
    </div>
  );
};

// shape - means component receives an object of this particular "shape"
// with this particular properties, did not use "exact" here
Recipe.propTypes = {
  recipe: PropTypes.shape({
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      servings: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }).isRequired,
};
