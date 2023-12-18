import { twJoin } from "tailwind-merge";
import PropTypes from "prop-types";

export function DisplayFinalGrade({ finalGrade }) {
    return (
        <span
            className={twJoin(
                finalGrade >= 3.0 ? "bg-green-500" : "bg-red-600",
                "cursor-default px-6 py-1 text-white rounded-md",
            )}
        >
            {finalGrade}
        </span>
    );
}

DisplayFinalGrade.propTypes = {
    finalGrade: PropTypes.number.isRequired,
};
