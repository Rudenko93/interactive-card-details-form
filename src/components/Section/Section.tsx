import { useState } from "react"
import { Button } from "../Button"
import { Result } from "../Result"
import "./Section.scss"

export const Section = () => {
  const [inpClass, setInpClass] = useState<Record<string, string>>({
    name: "success",
    number: "success",
    mm: "success",
    yy: "success",
    cvc: "success",
  })

  const [showResult, setShowResult] = useState(false)

  const handleDisabled = (): boolean => {
    let disabled = true
    for (let key in inpClass) {
      if (inpClass[key] === "success") disabled = false
      else {
        disabled = true
        break
      }
    }
    return disabled
  }

  const handleClick = () => {
    setShowResult((prev) => !prev)
  }

  const handleBlur = (inp: any, value: any) => {
    if (inp === "card_number")
      if (value.length === 16) {
        setInpClass((prev) => {
          return { ...prev, number: "success" }
        })
      } else {
        setInpClass((prev) => {
          return { ...prev, number: "error" }
        })
      }
    if (inp === "card_date_yy")
      if (value.length === 0 || value < 0)
        setInpClass((prev) => {
          return { ...prev, yy: "error" }
        })
      else
        setInpClass((prev) => {
          return { ...prev, yy: "success" }
        })

    if (inp === "card_date_mm")
      if (value.length === 0 || value < 0 || value > 12)
        setInpClass((prev) => {
          return { ...prev, mm: "error" }
        })
      else
        setInpClass((prev) => {
          return { ...prev, mm: "success" }
        })

    if (inp === "card_cvc")
      if (value.length === 0 || value < 0)
        setInpClass((prev) => {
          return { ...prev, cvc: "error" }
        })
      else
        setInpClass((prev) => {
          return { ...prev, cvc: "success" }
        })
  }

  return (
    <div className="section">
      <div className="container">
        {showResult ? (
          <Result handleClick={handleClick} />
        ) : (
          <div className="form-wrapper">
            <div className="form form-name ">
              <label htmlFor="cardholder_name">Cardholder Name</label>
              <input
                className={inpClass.name}
                name="cardholder_name"
                type="text"
                placeholder="e.g. Card Number"
                onBlur={(e) => handleBlur(e.target.name, e.target.value)}
              />
            </div>
            <div className="form form-number">
              <label htmlFor="card_number">Card number</label>
              <input
                className={inpClass.number}
                name="card_number"
                type="number"
                placeholder="e.g. 1234 5678 9123 0000"
                onBlur={(e) => handleBlur(e.target.name, e.target.value)}
              />
              {inpClass.number === "error" ? (
                <span>Wrong format, numbers only</span>
              ) : null}
            </div>
            <div className="form-info">
              <div className="form form-date success">
                <label htmlFor="card_date_yy">{`exp. date ${"mm/yy"}`}</label>
                <div className="form form-mm-yy">
                  <input
                    className={inpClass.mm}
                    name="card_date_mm"
                    type="number"
                    placeholder="MM"
                    onBlur={(e) => handleBlur(e.target.name, e.target.value)}
                  />
                  <input
                    className={inpClass.yy}
                    name="card_date_yy"
                    type="number"
                    placeholder="YY"
                    onBlur={(e) => handleBlur(e.target.name, e.target.value)}
                  />
                </div>
                {inpClass.mm === "error" || inpClass.yy === "error" ? (
                  <span>Cant'be blank</span>
                ) : null}
              </div>
              <div className="form form-cvc">
                <label htmlFor="">cvc</label>
                <input
                  className={inpClass.cvc}
                  name="card_cvc"
                  type="number"
                  placeholder="e.g. 123"
                  onBlur={(e) => handleBlur(e.target.name, e.target.value)}
                />
                {inpClass.cvc === "error" ? <span>Cant'be blank</span> : null}
              </div>
            </div>

            <Button
              handleClick={handleClick}
              disable={handleDisabled}
              span={"Confirm"}
            />
          </div>
        )}
      </div>
    </div>
  )
}
