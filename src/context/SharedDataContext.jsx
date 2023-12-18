import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SharedData = createContext();

export function SharedDataProvider({ children }) {
    const [data, setData] = useState([]);
    const [dataSent, setDataSent] = useState(false);

    const saveData = (newArray) => {
        setData(newArray);
        setDataSent(false);
    };

    const markDataAsSent = () => setDataSent(true);

    return (
        <SharedData.Provider
            value={{ data, saveData, dataSent, markDataAsSent }}
        >
            {children}
        </SharedData.Provider>
    );
}

SharedDataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SharedDataProvider;
