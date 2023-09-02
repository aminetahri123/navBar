import React from 'react'
import "./Services.css"
const Services = () => {
  return (
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
            <h4>Front-End Development</h4>
            {/* As a skilled Front-End developer, I bring user interfaces to life
            with interactivity and aesthetics using cutting-edge web
            technologies. My expertise in HTML, CSS, and JavaScript allows me to
            design seamless user experiences, ensuring each website or
            application is both responsive and visually appealing. */}
          </div>
          <div class="item">
            <h4>Back-End Development</h4>
            {/* With a strong background in Back-End development, I build the robust
            foundations that power web applications. I work with technologies
            like Node.js and Python to create efficient servers and
            high-performing APIs, ensuring speed, security, and reliability for
            server-side functionality. */}
          </div>

          <div class="item">
            <h4> Artificial Intelligence and Machine Learning</h4>
            {/* Fuelled by a passion for artificial intelligence and machine
            learning, I develop predictive models and intelligent systems that
            enable applications to learn and improve over time. I work with
            libraries like TensorFlow and scikit-learn to create innovative and
            tailored machine learning solutions. */}
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
  )
}

export default Services
