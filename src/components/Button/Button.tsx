import "./Button.scss"

export const Button = ({ span }: Record<string, string>) => {
  return <button className="button">{span}</button>
}
