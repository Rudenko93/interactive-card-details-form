import { Button } from "../Button"
import { Result } from "../Result"
import "./Section.scss"

export const Section = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="form-wrapper">
          <div className="form form-name">
            <label htmlFor="">Cardholder Name</label>
            <input type="text" placeholder="e.g. Card Number" />
          </div>
          <div className="form form-number">
            <label htmlFor="">Card number</label>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
            <span>Wrong format, numbers only</span>
          </div>
          <div className="form-info">
            <div className="form form-date">
              <label htmlFor="">{`exp. date ${"mm/yy"}`}</label>
              <div className="form form-mm-yy">
                <input type="text" placeholder="MM" />
                <input type="text" placeholder="YY " />
              </div>
              <span>Cant'be blank</span>
            </div>
            <div className="form form-cvc">
              <label htmlFor="">cvc</label>
              <input type="text" placeholder="e.g. 123" />
              <span>Cant'be blank</span>
            </div>
          </div>
          <Button span={"Confirm"} />
        </div>
        <Result />
      </div>
    </div>
  )
}
