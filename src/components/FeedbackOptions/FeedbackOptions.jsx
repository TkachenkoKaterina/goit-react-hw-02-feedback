import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<ul>
        {options.map(optionKey => {
            return <li key={optionKey}>
                <button type="button" name={optionKey} onClick={onLeaveFeedback}>{ optionKey }</button>
                    </li>
        })}
    </ul>)
}

Notification.propTypes = {
    message: PropTypes.string
}