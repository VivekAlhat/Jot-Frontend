import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import UserBar from "./UserBar";
import Axios from "axios";

const Compose = () => {
  const history = useHistory();
  const { currentUser } = useAuth();
  const [note, setNote] = useState({
    noteTitle: "",
    noteContent: "",
    uid: "",
  });

  const handleClick = () => {
    if (note.noteTitle !== "" || note.noteContent !== "") {
      Axios.post("http://localhost:8000/compose", note)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setNote({ noteTitle: "", noteContent: "" });
      history.push("/dashboard");
    } else {
      alert("Note must not be empty");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => {
      return { ...prev, [name]: value, uid: currentUser.uid };
    });
  };

  return (
    <React.Fragment>
      <UserBar />
      <Container className="compose-container">
        <Form.Control
          type="text"
          placeholder="New note title here .."
          className="input title"
          value={note.noteTitle}
          onChange={handleChange}
          name="noteTitle"
          required={true}
        />
        <Form.Control
          as="textarea"
          rows={15}
          placeholder="Write your note content here .."
          className="input textarea"
          value={note.noteContent}
          onChange={handleChange}
          name="noteContent"
          required={true}
        />

        <Button
          variant="secondary"
          size="sm"
          className="btn-c"
          onClick={handleClick}
        >
          Publish
        </Button>

        <Link to="/dashboard">
          <Button variant="secondary" size="sm" className="btn-c">
            Cancel
          </Button>
        </Link>
      </Container>
    </React.Fragment>
  );
};

export default Compose;
