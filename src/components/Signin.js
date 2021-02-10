import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const { signInWithGoogle } = useAuth();
  const history = useHistory();

  const handleClick = async () => {
    await signInWithGoogle();
    history.push("/dashboard");
  };

  return (
    <Container className="home-container">
      <Row>
        <Col sm={6} className="keep-info">
          <div>
            <h1 style={{ fontWeight: "700" }}>Jot</h1>
            <h4>Note Taking Made Easy!</h4>
            <p>
              Jot is a note taking service which is available as a web
              application. You can access <i>Jot</i> via mobile as well as
              desktop browsers. Jot makes it easy for you to manage all your
              notes in a single place. Say <i>goodbye</i> to the account
              creation process and directly sign in with your <b>Google </b>
              account by clicking the button below.
            </p>
          </div>
          <div className="signin">
            <Button variant="warning" onClick={handleClick}>
              Sign in with Google
            </Button>
          </div>
        </Col>
        <Col sm={6} className="keep-img">
          <Image
            src="/assets/art.png"
            alt="home-page-art"
            fluid
            className="keep-img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
