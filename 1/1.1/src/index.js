import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }

    const Otsikko = (props) => {
        return (
            <div>
                <h1>{props.name}</h1>
            </div>
        )
    }
    const Sisalto = (props) => {
        return (
            <div>
                <p>{props.osat} {props.tehtavat}</p>
            </div>
        )
    }
    const Yhteensa = (props) => {
        return (
            <div>
                <p>Yhteensä {props.osat} tehtävää.</p>
            </div>
        )
    }
        return (
            <div>
                <Otsikko name={kurssi.nimi}/>
                <Sisalto osat={kurssi.osat[0].nimi} tehtavat = {kurssi.osat[0].tehtavia}/>
                <Sisalto osat={kurssi.osat[1].nimi} tehtavat = {kurssi.osat[1].tehtavia}/>
                <Sisalto osat={kurssi.osat[2].nimi} tehtavat = {kurssi.osat[2].tehtavia}/>
                <Yhteensa osat={kurssi.osat[0].tehtavia+kurssi.osat[1].tehtavia+kurssi.osat[2].tehtavia}/>
            </div>
    )
}

ReactDOM.render(
<App />,
 document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
