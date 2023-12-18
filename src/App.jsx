import { Row } from "@components/Row";
import { Form } from "@components/Form";
import { Footer } from "@components/Footer";
import { useState } from "react";
import { useSharedData } from "@hooks/useSharedData";
import { Button } from "@components/ui/Button";

function App() {
    const [noRows, setNoRows] = useState([window.crypto.randomUUID()]);
    const { markDataAsSent } = useSharedData();

    const addRow = () =>
        setNoRows((prev) => [...prev, window.crypto.randomUUID()]);

    const removeRow = ({ id }) => {
        const newRows = noRows.filter((rowId) => rowId !== id);
        setNoRows(newRows);
    };

    return (
        <Form>
            {noRows.map((id) => (
                <Row
                    key={id}
                    rowId={id}
                    addRow={addRow}
                    removeRow={removeRow}
                />
            ))}

            <div className="flex m-4">
                <Button
                    onClick={() => setTimeout(markDataAsSent, 0)}
                    className="border-gray-600 bg-gray-500 text-slate-200 hover:bg-gray-600 transition-colors"
                >
                    Calcular
                </Button>
            </div>
            <Footer />
        </Form>
    );
}

export default App;
