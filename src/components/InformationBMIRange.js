import React from "react";


const InformationBMIRange = () => {
    return (
        <>
            <h3>Zakresy wartości BMI:</h3>
                <p className="bmirange">mniej niż 16 - wygłodzenie
                16 - 16.99 - wychudzenie
                17 - 18.49 - niedowaga
                18.5 - 24.99 - wartość prawidłowa
                25 - 29.99 - nadwaga
                30 - 34.99 - I stopień otyłości
                35 - 39.99 - II stopień otyłości
                powyżej 40 - otyłość skrajna</p>
        </>
)
}

export default InformationBMIRange;