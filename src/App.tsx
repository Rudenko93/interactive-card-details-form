import { Section } from "./components/Section"
import "./App.scss"

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="background-img">
        <div className="cards">
          <div className="card-front">
            <img src="./images/bg-card-front.png" alt="card-front" />

            <div className="card-info">
              <h1 className="card-number">0000 0000 0000 0000</h1>
              <div className="card-desc">
                <span className="name">Jane Appleseed </span>
                <span className="date">00/00</span>
              </div>
            </div>
          </div>
          <div className="card-back">
            <img src="./images/bg-card-back.png" alt="card-back" />
            <div className="cvc">
              <span>123</span>
            </div>
          </div>
        </div>
      </div>
      <Section />
    </div>
  )
}

export default App
