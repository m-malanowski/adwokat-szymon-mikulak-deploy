
import React from "react"
import FormStyles from "./Form.module.scss"
import Button from "./Button"
import { Link } from "gatsby"


const Form = () => {
    return (
      <div className={FormStyles.contactForm} >
        <form method="POST" data-netlify="true">
          <div>
            <input
              type="text"
              name="name"
              autoComplete="off"
              required/>
            <label htmlFor="name">
              <span>Imię i Nazwisko</span>
            </label>
          </div>

          <div>
            <input
              type="text"
              name="email"
              autoComplete="off"
              required />
            <label htmlFor="email">
              <span>Email</span>
            </label>
          </div>

          <div>
            <input
              type="text"
              name="phone"
              autoComplete="off"
              required />
            <label htmlFor="phone">
              <span>Telefon</span>
            </label>
          </div>

          <div className={FormStyles.messageDiv}>
                        <textarea
                          type="text"
                          name="message"
                          autoComplete="off"
                          required
                          rows="10" />
            <label htmlFor="message">
              <span>Wiadomość</span>
            </label>
          </div>

          <p className={FormStyles.agreements}>
            Używając tego formularza zgadzam się na przetwarzanie przekazywanych danych w celu przygotowania i prezentacji oferty oraz akceptuję politykę prywatności.
          </p>

          {/*<input type="submit" value="elo"/>*/}
          {/*<Button type="submit" buttonDesc="wyślij"/>*/}

          <button type="submit" className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"/>
            </span>
            <span  className="button-text">Wyślij</span>
          </button>

        </form>

      </div>
    )
}
export default Form