import React, { useEffect, useState } from "react";
import { Container, Button, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Axios from "axios";
import objectIdToTimestamp from "objectid-to-timestamp";

const Notes = ({ match }) => {
  const { currentUser } = useAuth();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.post("http://localhost:8000/dashboard", {
      uid: currentUser.uid,
    })
      .then((res) => {
        setNotes(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [currentUser.uid]);

  const convertDate = (e) => {
    return new Date(e).toUTCString().substring(0, 12);
  };

  return (
    <React.Fragment>
      {loading ? (
        <Container className="notes">
          <Spinner animation="border" />
        </Container>
      ) : (
        <React.Fragment>
          {notes.length === 0 ? (
            <Container className="notes">
              <div className="text-center">
                <p>
                  Nothing to display!
                  <br /> Add a new note by clicking the button below.
                </p>
                <Link to="/compose">
                  <Button variant="outline-dark" size="sm">
                    Create
                  </Button>
                </Link>
              </div>
            </Container>
          ) : (
            <Container className="note-details">
              <div className="user-details d-flex justify-content-center">
                <h3 style={{ fontWeight: "700" }}>Recent Notes</h3>
              </div>
              <div>
                <ListGroup variant="flush">
                  {notes.map((e) => {
                    return (
                      <ListGroup.Item key={e._id} className="note-item">
                        <Link
                          to={`/dashboard/${e._id}`}
                          style={{
                            textDecoration: "none",
                            color: "#212529",
                          }}
                        >
                          <h5 className="note-title">{e.noteTitle}</h5>
                        </Link>

                        <p className="note-date">
                          {convertDate(objectIdToTimestamp(e._id))}
                        </p>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </div>
            </Container>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Notes;
