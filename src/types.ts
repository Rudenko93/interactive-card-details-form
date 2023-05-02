export interface IInpClass {
  name: "success" | "error"
  number: "success" | "error"
  mm: "success" | "error"
  yy: "success" | "error"
  cvc: "success" | "error"
}

export type IInputName =
  | "card_number"
  | "card_date_yy"
  | "card_date_mm"
  | "card_cvc"

export interface IButtonProps {
  handleClick?: () => void
  disable?: () => boolean
  span: string
}

export interface IResultProps {
  handleClick: () => void
}
