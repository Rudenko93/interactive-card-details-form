import "./Button.scss"

interface IButtonProps {
  disable?: () => boolean
  span: string
}

export const Button: React.FC<IButtonProps> = ({
  disable = () => false,
  span,
}) => {
  return (
    <button disabled={disable()} className="button">
      {span}
    </button>
  )
}
