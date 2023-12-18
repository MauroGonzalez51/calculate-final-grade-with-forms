import PropTypes from "prop-types";
import { isInput } from "@utils/isInput";
import { useSharedData } from "@hooks/useSharedData";
import { toArray } from "@utils/toArray";

export function Form({ children, ...props }) {
    const { saveData } = useSharedData();

    const validateElements = (...arrays) => {
        return arrays.every((array) =>
            array.some((element) => isInput(element)),
        );
    };

    const packData = (...arrays) => {
        const arrayToReturn = [];

        const maxLength = Math.max(...arrays.map((array) => array.length));

        for (let i = 0; i < maxLength; i++) {
            const obj = {};

            arrays.forEach((array, index) => {
                obj[`item${index + 1}`] = array[i].value;
            });

            arrayToReturn.push(obj);
        }

        return arrayToReturn;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const { elements } = event.currentTarget;

        const subjectName = toArray(elements.namedItem("subject-name"));
        const first = toArray(elements.namedItem("first"));
        const second = toArray(elements.namedItem("second"));
        const third = toArray(elements.namedItem("third"));
        const noCredits = toArray(elements.namedItem("noCredits"));

        if (!validateElements(subjectName, first, second, third, noCredits))
            return;

        saveData(packData(subjectName, first, second, third, noCredits));
    };

    return (
        <form {...props} onSubmit={(event) => handleFormSubmit(event)}>
            {children}
        </form>
    );
}

Form.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Form;
