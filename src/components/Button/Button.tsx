import "./Button.scss"

interface IButtonProps {
  handleClick?: () => void
  disable?: () => boolean
  span: string
}

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
