import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    transmitter: '',
    email: '',
    message: '',
  })

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_jbc9wpl',
        'template_slzoif6',
        formData,
        '7NwTlwL_i8vXToi1E',
      )
      .then(
        (result) => {
          console.log(result.text)
          setFormData({
            transmitter: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          console.log(error.text)
        },
      )
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }
  return (
    <div id="contact" class="container-fluid bg-grey">
      <h2 class="text-center">CONTACT</h2>
      <div class="row">
        <div class="col-sm-5">
          <p>
            <span class="glyphicon glyphicon-map-marker"></span> 23 Av. Habib
            Thameur. Tunis 2000
          </p>
          <p>
            <span class="glyphicon glyphicon-phone"></span> +216 29354835
          </p>
          <p>
            <span class="glyphicon glyphicon-envelope"></span>{' '}
            aminetahrilfsi1@gmail.com
          </p>
        </div>

        <div class="col-sm-7 slideanim">
          <form ref={form} onSubmit={sendEmail}>
            <div class="row">
              <div class="col-sm-6 form-group">
                <input
                  class="form-control"
                  id="transmitter"
                  name="transmitter"
                  placeholder="Name"
                  type="text"
                  required
                  onChange={handleChange}
                  value={formData.transmitter}
                />
              </div>
              <div class="col-sm-6 form-group">
                <input
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
            <textarea
              class="form-control"
              id="message"
              name="message"
              placeholder="Message "
              rows="5"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            <br />
            <div class="row">
              <div class="col-sm-12 form-group">
                <button class="btn btn-default pull-right" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
