import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactForm = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src=""
            class="pr-4 pb-3 img-fluid"
            alt="Candice Whiskey"
          />
          <h4>
            Recent grad of the Full Stack Web Development Bootcamp at UCF. 
            Actively seeking employment and have included my contact details here. 
            Thank you!
          </h4>
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:347-111-2222">
            <MDBIcon icon="phone-alt" /> 347-111-2222
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:candicewhiskey77@gmail.com">
            <MDBIcon icon="envelope" /> candicewhiskey77@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactForm;
