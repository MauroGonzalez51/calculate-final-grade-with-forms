import PropTypes from "prop-types";
import { twJoin } from "tailwind-merge";
import { useState } from "react";
import { valueInRange } from "@utils/valueInRange";

export function Input({ checkCases, minRange, maxRange, ...props }) {
    const [isValid, setIsValid] = useState(true);

    if (!checkCases) {
        return (
            <input
                {...props}
                className="border border-solid outline-none p-4 rounded-md transition-colors flex-grow h-16 placeholder:italic border-black hover:border-blue-600"
            />
        );
    }

    const handleInputChange = (event) => {
        const currentValue = event.target.value;

        setIsValid(
            valueInRange({
                value: parseFloat(currentValue),
                minRange,
                maxRange,
            }),
        );
    };

    return (
        <input
            {...props}
            className={twJoin(
                "border border-solid outline-none p-4 rounded-md transition-colors flex-grow h-16 placeholder:italic",
                isValid ? "border-black" : "border-red-500 text-red-500",
            )}
            onChange={handleInputChange}
        />
    );
}

Input.propTypes = {
    checkCases: PropTypes.bool.isRequired,
    minRange: PropTypes.number,
    maxRange: PropTypes.number,
};

Input.defaultProps = {
    checkCases: false,
    minRange: 0.0,
    maxRange: 5.0,
};

export default Input;
