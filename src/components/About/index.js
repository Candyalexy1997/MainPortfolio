import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="https://gentle-lowlands-00665.herokuapp.com/"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Candice Whiskey"
          />
          <p style={{ fontSize: "26px" }}>
            Hi There, My name is Candice and I recently completed a Full Stack Engineer bootcamp at the University of Central Florida.  I am hoping to further my career by the new skills I have acquired.  I look forward to working amongst the developer community and a life long career or always learning the ever evolving technologies.  In my spare time, I do enjoy speding time with my family and traveling.`
           
          </p>
          <p style={{ fontSize: "26px" }}>
            I am familiar with the HTML,CSS, Javascript, SQL, NoSQL, Express, Node.js and React.  I am detail focused and an ambitious problem solver with
            a passion for learning new skills.
          </p>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe