import "./cv-right-side.css";
const CvRightSide = () => {
  return (
    <div>
      <div class="name-container">
        {" "}
        <p class="name"> Géza Szórádi </p>
        <p class="web-developer">Web developer</p>
      </div>
      <div class="experience-container">
        <div class="second-title">
          <h5>Education</h5>
        </div>
        <div class="line"></div>
        <div class="first-experience">
          <div class="duration">
            {" "}
            2011 -<br></br>2016
          </div>
          <div class="education-name">
            <a>Network installer, Secondary Technical School of Informatic</a>
          </div>
        </div>
        <div class="education">
          <div class="duration">
            {" "}
            2016 -<br></br> 2020
          </div>
          <div class="education-name">
            Bachelor of Computer Science, University of Pannonia
          </div>
        </div>
        <div class="line"></div>
        <div class="second-title">
          <h5>Experiences</h5>
        </div>
        <div class="line"></div>
        <div class="first-experience">
          <div class="duration">
            {" "}
            2021 -<br></br>present
          </div>
          <div class="present-work-name">
            <a>Accenture - Frontend developer</a>
            <br></br>
          </div>
        </div>
        <div class="work-description">
          <a>
            // I've been working on a web application, where we designed every
            <br />
            // little of the application together with the team.
          </a>
        </div>
        <div class="experience">
          <div class="duration">
            {" "}
            2018 -<br></br>2021
          </div>
          <div class="present-work-name">
            <a>Continental Automotive Hungary Kft.</a>
            <br></br>
          </div>
        </div>
        <div class="work-description">
          <a>
            // Embedded system developer and full stack dev. <br />
            // I gained experience in C, React, Angular and Python flask.
          </a>
        </div>
        <div class="line"></div>
        <div class="second-title">
          <h5>Projects</h5>
        </div>
        <div class="line"></div>
        <div>
          <div class="project-name">
            <a>British Vodafone</a>
          </div>
          <div class="project-description">
            <a>
              // The application follows microservice architecture style. <br />
              // Our team was responsible for developing the support part of the
              application <br /> and processing of company orders.
              <br />
              // We also contributed to the creation of the homepage.
              <br />
              <p style={{ color: "rgb(255,186,47)" }}>
                www.vbp.vodafone.co.uk/explore/business-details{" "}
              </p>
            </a>
            <div class="programming-language">
              <a>
                <ul class="programming-ul">
                  <li>ReactJS</li>
                  <li>Expess</li>
                  <li>AWS cloud services</li>
                </ul>
              </a>
            </div>
          </div>
          <div class="first-project-name">
            <a>Application for supporting job interview</a>
          </div>
          <div class="project-description">
            <a>
              // The application can randomly generate a test from a series of
              questions. <br></br>
              // The generated test can be printed or started on the web page.{" "}
              <br></br>
              // Once the tests are completed, they will be automatically
              evaluated, <br></br> and the results are saved by the application
              for future reference.
            </a>
            <div class="programming-language">
              <a>
                <ul class="programming-ul">
                  <li>Angular</li>
                  <li>Python Flask</li>
                  <li>MySQL</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="more-project-text">
            <a>More project information on my github page.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvRightSide;
