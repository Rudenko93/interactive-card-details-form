import { useRef, useState } from "react"
import { Button } from "../Button"
import { Result } from "../Result"
import "./Section.scss"

export const Section = () => {
  const ref = useRef({
    name: "success",
    number: "success",
    mm: "success",
    yy: "success",
    cvc: "success",
  })

  const [inpClass, setInpClass] = useState({
    name: ref.current.name,
    number: ref.current.number,
    mm: ref.current.mm,
    yy: ref.current.yy,
    cvc: ref.current.cvc,
  })

  const handleBlur = (inp: any, value: any) => {
    if (value.length < 10)
      setInpClass({
        name: "error",
        number: ref.current.number,
        mm: ref.current.mm,
        yy: ref.current.yy,
        cvc: ref.current.cvc,
      })
  }

  return (
    <div className="section">
      <div className="container">
        <div className="form-wrapper">
          <div className="form form-name ">
            <label htmlFor="cardholder_name">Cardholder Name</label>
            <input
              className={inpClass.name}
              name="cardholder_name"
              type="text"
              placeholder="e.g. Card Number"
              onBlur={(e) => handleBlur("name", e.target.value)}
            />
          </div>
          <div className="form form-number">
            <label htmlFor="card_number">Card number</label>
            <input
              className={inpClass.number}
              name="card_number"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
            />
            {inpClass.number === "error" ? (
              <span>Wrong format, numbers only</span>
            ) : null}
          </div>
          <div className="form-info">
            <div className="form form-date success">
              <label htmlFor="card_date">{`exp. date ${"mm/yy"}`}</label>
              <div className="form form-mm-yy">
                <input
                  className={inpClass.mm}
                  name="card_date"
                  type="text"
                  placeholder="MM"
                  maxLength={2}
                />
                <input
                  className={inpClass.yy}
                  name="card_date"
                  type="text"
                  placeholder="YY"
                  maxLength={2}
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
                type="text"
                placeholder="e.g. 123"
                maxLength={3}
              />
              {inpClass.cvc === "error" ? <span>Cant'be blank</span> : null}
            </div>
          </div>
          <Button span={"Confirm"} />
        </div>
        <Result />
      </div>
    </div>
  )
}
