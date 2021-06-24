import React from 'react';

class Fibonacci extends React.Component {

    render() {
        let firstNumber = parseInt(prompt("1º: "));
        let secondNumber = parseInt(prompt("2º: "));

        let serie = [firstNumber, secondNumber];

        for(let i = 0; i<=100; i++) {
            let new_number = firstNumber + secondNumber;
            serie.push(new_number);
            firstNumber = secondNumber;
            secondNumber = new_number;
        }
        console.log(serie);

        return (
            <>
                <ul>
                    {
                        serie.map(x => <li>{ x }</li>)
                    }
                </ul>
            </>
        )
    };
}

export default Fibonacci;