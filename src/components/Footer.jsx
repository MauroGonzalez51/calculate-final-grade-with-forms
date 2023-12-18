import { useSharedData } from "@hooks/useSharedData";
import { roundToPrecision } from "@utils/roundToPrecision";
import { useState, useEffect } from "react";
import { Box } from "@components/ui/Box";

export function Footer() {
    const { data, dataSent } = useSharedData();
    const [finalGrades, setFinalGrades] = useState([]);
    const [finalGrade, setFinalGrade] = useState(0.0);

    const calculateSubjectGrade = (first, second, third) =>
        first * 0.3 + second * 0.35 + third * 0.35;

    useEffect(() => {
        setFinalGrades([]);

        data.forEach(
            ({
                item1: subjectName,
                item2: first,
                item3: second,
                item4: third,
                item5: noCredits,
            }) => {
                const finalGrade = roundToPrecision(
                    calculateSubjectGrade(first, second, third),
                    1,
                );

                setFinalGrades((prevGrades) => [
                    ...prevGrades,
                    {
                        finalGrade,
                        subjectName,
                        noCredits: parseInt(noCredits),
                        id: window.crypto.randomUUID(),
                    },
                ]);
            },
        );
    }, [data]);

    useEffect(() => {
        if (!finalGrades.length) return;

        const totalCredits = finalGrades.reduce((acc, { noCredits }) => {
            return acc + noCredits;
        }, 0);

        const totalQualityPoints = finalGrades.reduce(
            (acc, { finalGrade, noCredits }) => {
                return acc + finalGrade * noCredits;
            },
            0,
        );

        setFinalGrade(roundToPrecision(totalQualityPoints / totalCredits, 1));
    }, [finalGrades]);

    return (
        <div className="m-4 flex gap-4 flex-col md:flex-row">
            {dataSent &&
                finalGrades.map(({ subjectName, finalGrade, id }) => {
                    return (
                        <Box
                            key={id}
                            className="flex flex-col p-6 flex-grow border-gray-600 rounded-md justify-start items-center"
                            title={subjectName}
                            finalGrade={finalGrade}
                        />
                    );
                })}

            <Box
                className="border-blue-600 hover:border-blue-400 transition-colors rounded-md flex justify-center items-center flex-col flex-grow"
                title="Promedio Final"
                finalGrade={finalGrade || 0}
            />
        </div>
    );
}

Footer.propTyopes = {};

export default Footer;
