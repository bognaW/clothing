/*
default

inverted

google sign

*/

import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sing-in',
    invered: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button 
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    )
};

export default Button;