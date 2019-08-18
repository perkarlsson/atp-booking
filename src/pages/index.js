import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <form
      name="contact" 
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      >
      <input type="hidden" name="bot-field"/>
      <input type="hidden" name="form-name" value="contact"/>
      <input name="name" placeholder="Your Name" type="text"/>
      <input name="email" placeholder="name@name.com" type="email"/>
      <textarea name="message" id=""></textarea>
      <button>Send</button>
    </form>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
