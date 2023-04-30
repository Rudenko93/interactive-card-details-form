import "./Section.scss"

export const Section = () => {
  return (
    <div className="section">
      <div className="form-container">
        <div className="form form-name">
          <label htmlFor="">Cardholder Name</label>
          <input type="text" placeholder="e.g. Card Number" />
        </div>
        <div className="form form-number">
          <label htmlFor="">Card number</label>
          <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
        </div>
        <div className="form-info">
          <div className="form form-date">
            <label htmlFor="">{`exp. date ${"mm/yy"}`}</label>
            <div className="form form-mm-yy">
              <input type="text" placeholder="MM" />
              <input type="text" placeholder="YY " />
            </div>
          </div>
          <div className="form form-cvc">
            <label htmlFor="">cvc</label>
            <input type="text" placeholder="e.g. 123" />
          </div>
        </div>
      </div>

      <div className="result"></div>
    </div>
  )
}
