import PropTypes from "prop-types";
import { twJoin } from "tailwind-merge";

export function Button({ children, className, ...props }) {
    return (
        <button
            {...props}
            className={twJoin("border border-solid p-4 rounded-md flex-grow outline-none", className)}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Button;
