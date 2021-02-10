import React, { useEffect, useState } from "react";
import UserBar from "./UserBar";
import { useHistory } from "react-router-dom";
import { Container, Button, Spinner, Breadcrumb } from "react-bootstrap";
import objectIdToTimestamp from "objectid-to-timestamp";
import Axios from "axios";

const Note = ({ match }) => {
  const history = useHistory();
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(`http://localhost:8000/dashboard/${match.params.id}`)
      .then((res) => {
        setNote(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);

  const convertDate = (e) => {
    return new Date(e).toUTCString().substring(0, 12);
  };

  const handleClick = () => {
    Axios.delete(`http://localhost:8000/dashboard/${match.params.id}`);
    history.push("/dashboard");
  };

  return (
    <React.Fragment>
      <UserBar />
      {loading ? (
        <Container className="notes">
          <Spinner animation="border" />
        </Container>
      ) : (
        <React.Fragment>
          <Container className="mt-2 note-details">
            <div>
              <Breadcrumb>
                <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>{note.noteTitle}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="text-center">
              <h3 style={{ fontWeight: "700" }}>{note.noteTitle}</h3>
              <p style={{ fontSize: "0.8rem" }}>
                {convertDate(objectIdToTimestamp(note._id))}
              </p>
            </div>
            <hr />
            <div>
              <p>{note.noteContent}</p>
            </div>
            <div>
              <Button
                size="sm"
                variant="outline-secondary"
                onClick={handleClick}
                className="btn"
              >
                Delete
              </Button>
            </div>
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Note;
