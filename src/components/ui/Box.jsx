import PropTypes from "prop-types";
import { twJoin } from "tailwind-merge";
import { DisplayFinalGrade } from "@components/ui/DisplayFinalGrade";

export function Box({ className, title, finalGrade, ...props }) {
    return (
        <div
            className={twJoin("flex p-4 border border-solid gap-2 h-28", className)}
            {...props}
        >
            <span className="font-bold">{title}</span>
            <DisplayFinalGrade finalGrade={finalGrade} />
        </div>
    );
}

Box.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    finalGrade: PropTypes.number.isRequired,
};

export default Box;
