import React, { useRef } from 'react'
import './NavBar2.css'
import img from '../Images/image-amine.jpg'
import emailjs from '@emailjs/browser'
const Test = () => {
  const data = [
    {
      id: 1,
      name: 'certif react',
      img: '../Images/certifReact.png',
    },
    {
      id: 2,
      name: 'certif react',
      img: '../Images/certifReact.png',
    },
  ]
  const form = useRef()
  const sendEmail = (e) => {
    // console.log(e.target.value)
    console.log(form.current)
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ryfms2i',
        'template_slzoif6',
        form.current,
        '7NwTlwL_i8vXToi1E',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }
  return (
    <div
      className="myPage"
      data-spy="scroll"
      data-target=".navbar"
      data-offset="60"
    >
      {/* About Pages */}
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#myPage">
              {'</> Logo'}
            </a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#services">SERVICES</a>
              </li>
              <li>
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#certifications">CERTIFICATIONS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="about" class="jumbotron row">
        <div class="jumbotron text-center col-sm-6">
          <img
            style={{ borderRadius: '50%' }}
            src={img}
            alt="Img"
            width="300"
            height="300"
          />
        </div>
        <div class="jumbotron text-center col-sm-6">
          <h1>TAHRI Amine</h1>
          <p>specialize in the development of web applications.</p>
        </div>
      </div>

      {/* Services Pages */}

      <div id="services" className="container-fluid text-center">
        <h2>Services Page </h2>
        <div
          id="myCarousel"
          class="carousel slide text-center"
          data-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          {/* <!-- Wrapper for slides --> */}
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <h4>Front End.</h4>
            </div>
            <div class="item">
              <h4>Back End</h4>
            </div>
            <div class="item">
              <h4>Machine Learning / Deep Learning</h4>
            </div>
          </div>

          {/* <!-- Left and right controls --> */}
          <a
            class="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              class="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              class="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* Portfolio Pages */}

      <div id="portfolio" className="container-fluid text-center bg-grey">
        <h2>My Projects </h2>
        {[1, 2, 3].map((el, index) => (
          <div class="col-sm-4">
            <img src={require('../Images/projects.jpg')} alt="..." />
          </div>
        ))}
       
        
        
      </div>
      {/* Pricing Pages */}

      {/* <div id="certifications" className="container-fluid">
        <h1>certifications page</h1>
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
        certifications <br />
      </div> */}

      <div id="certifications" className="  text-center container-fluid">
        <h2>Certifications</h2>
        {[1, 2, 3, 4].map((el, index) => (
          <div class="col-sm-4">
            <img src={require('../Images/certifReact.png')} alt="..." />
            {/* <img src={el?.img} alt="..." /> */}
          </div>
        ))}
      </div>
      {/* Contact Pages */}

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
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
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
                  />
                </div>
              </div>
              <textarea
                class="form-control"
                id="comments"
                name="comments"
                placeholder="Comment"
                rows="5"
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
      {/* <img src="/w3images/map.jpg" class="w3-image w3-greyscale-min" style={{width:"100%"}}/> */}
      {/* <iframe
        width="100%"
        height="100%"
        title="map"
        className="absolute inset-0"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        style={{ filter: 'opacity(0.7)' }}
        src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      /> */}
    </div>
  )
}

export default Test
