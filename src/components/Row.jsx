import PropTypes from "prop-types";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";

export function Row({ rowId, addRow, removeRow }) {
    return (
        <div className="flex gap-4 p-4 border border-solid border-blue-500 rounded-md m-4 flex-col md:flex-row">
            <div className="flex flex-wrap gap-2 flex-grow">
                <Input
                    placeholder="Nombre asignatura ..."
                    checkCases={false}
                    name="subject-name"
                    autoComplete="off"
                    required
                />

                <Input
                    placeholder="Primer corte ..."
                    checkCases={true}
                    minRange={0.0}
                    maxRange={5.0}
                    name="first"
                    autoComplete="off"
                    required
                />

                <Input
                    placeholder="Segundo corte ..."
                    checkCases={true}
                    minRange={0.0}
                    maxRange={5.0}
                    name="second"
                    autoComplete="off"
                    required
                />

                <Input
                    placeholder="Tercer corte ..."
                    checkCases={true}
                    minRange={0.0}
                    maxRange={5.0}
                    name="third"
                    autoComplete="off"
                    required
                />

                <Input
                    placeholder="No. creditos ..."
                    checkCases={true}
                    minRange={1}
                    maxRange={10}
                    name="noCredits"
                    autoComplete="off"
                    required
                />
            </div>

            <Button
                onClick={() => removeRow({ id: rowId })}
                className="border-red-600 bg-red-400 text-white hover:bg-red-500 transition-colors"
            >
                Eliminar linea
            </Button>

            <Button
                onClick={() => addRow()}
                className="border-green-600 bg-green-400 text-black hover:bg-green-600 transition-colors"
            >
                Agregar Linea
            </Button>
        </div>
    );
}

Row.propTypes = {
    rowId: PropTypes.string.isRequired,
    addRow: PropTypes.func.isRequired,
    removeRow: PropTypes.func.isRequired,
};

export default Row;
