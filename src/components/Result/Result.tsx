import { IResultProps } from "../../types"
import { Button } from "../Button"
import "./Result.scss"

export const Result: React.FC<IResultProps> = ({ handleClick }) => {
  return (
    <div className="result">
      <img src="./images/icon-complete.svg" alt="complete" />
      <h1>thank you!</h1>
      <span>We've added your card details</span>
      <Button handleClick={handleClick} span={"Continue"} />
    </div>
  )
}
