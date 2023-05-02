import { IButtonProps } from "../../types"
import "./Button.scss"

export const Button: React.FC<IButtonProps> = ({
  handleClick = () => "",
  disable = () => false,
  span,
}) => {
  return (
    <button onClick={handleClick} disabled={disable()} className="button">
      {span}
    </button>
  )
}
