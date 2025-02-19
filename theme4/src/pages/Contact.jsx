import React from 'react'
import HomeCO from '../components/contact/HomeCO'
import Form from '../components/contact/Form'
import Ctext from '../components/contact/Ctext'
import NewsletterCO from '../components/contact/NewsletterCO'
import Map from '../components/contact/Map'
function Contact() {
  return (
    <div>
        <HomeCO/>
        <Map/>
        <Form/>
        <Ctext/>
        <NewsletterCO/>
    </div>
  )
}
export default Contact
