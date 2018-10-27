import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ teksti, handler }) => {
  return (
    console.log(handler),
    <button onClick={handler}>
      {teksti}
    </button>
  )
}


const Statistics = ({ arvosana, monta }) => {
  return (
    <div>{arvosana + ": " + monta}</div>
  )
}


const Statistic = ({ muuttuja, summa, maara }) => {
  return (
  <div>{muuttuja + ": " + summa / maara}</div>
  )
}


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  render() {
    if (this.state.hyva + this.state.neutraali + this.state.huono === 0) {
      return (
        <div>
          <div>
            <h1>Anna palautetta</h1>
            <Button teksti="Hyvä" handler={() => { this.setState({ hyva: this.state.hyva + 1 })}} />
            <Button teksti="Neutraali" handler={() => { this.setState({ neutraali: this.state.neutraali + 1 }) }} />
            <Button teksti="Huono" handler={() => { this.setState({ huono: this.state.huono + 1 }) }} />
            <h2>Tilasto</h2>
            <div>ei yhtään palautetta annettu</div>
          </div>
        </div>   
      )
    }
    return (
      <div>
        <div>
          <h1>Anna palautetta</h1>
          <Button teksti="Hyvä" handler={() => { this.setState({ hyva: this.state.hyva + 1}) }} />
          <Button teksti="Neutraali" handler={() => { this.setState({ neutraali: this.state.neutraali + 1 }) }} />
          <Button teksti="Huono" handler={() => { this.setState({ huono: this.state.huono + 1 }) }} />
          <h2>Tilasto</h2>
          <Statistics arvosana="Hyvä" monta={this.state.hyva} />
          <Statistics arvosana="Neutraali" monta={this.state.neutraali} />
          <Statistics arvosana="Huono" monta={this.state.huono} />
          <Statistic muuttuja="Keskiarvo"
            summa={this.state.hyva * 1 + this.state.huono * (-1)}
            maara={this.state.hyva + this.state.huono + this.state.neutraali} />
          <Statistic muuttuja="Positiivisia"
            summa={this.state.hyva}
            maara={this.state.hyva + this.state.huono + this.state.neutraali} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)