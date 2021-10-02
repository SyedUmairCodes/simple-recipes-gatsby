import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Let's Chat!</h3>
            <p>
              Chambray dreamcatcher yuccie, activated charcoal organic shaman
              selfies pour-over. Hammock mlkshk direct trade humblebrag tote bag
              bushwick etsy vape migas keffiyeh vexillologist. Cliche shaman
              kinfolk banjo, migas flannel williamsburg skateboard paleo
              crucifix pug. 3 wolf moon chia pok pok brunch activated charcoal
              bicycle rights 90's distillery vice you probably haven't heard of
              them kale chips.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"></input>
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit" className="btn block">
                Send Message
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact
