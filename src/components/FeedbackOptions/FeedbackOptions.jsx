import PropTypes from 'prop-types';
import {
  ListOptionsRef,
  ListItemsOptionsRef,
  ButtonOptionsRef,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <ListOptionsRef>
      {options.map(optionKey => {
        console.log(optionKey);
        return (
          <ListItemsOptionsRef key={optionKey}>
            <ButtonOptionsRef type="button" name={optionKey} onClick={onLeaveFeedback}>
              {optionKey}
            </ButtonOptionsRef>
          </ListItemsOptionsRef>
        );
      })}
    </ListOptionsRef>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
