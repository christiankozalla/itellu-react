import React from "react";
import axios from "axios";

// react-bootstrap imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const styles = {
  button: {
    width: 125,
    height: 50,
    float: "right",
    textTransform: "uppercase",
  },
  buttonErr: {
    width: 125,
    height: 50,
    float: "right",
    textTransform: "uppercase",
    backgroundColor: "#F36954",
    fontSize: "0.8rem",
  },
  inputErr: {
    backgroundColor: "#F36954",
    opacity: 0.5,
  },
  alert: {
    height: 50,
    float: "left",
    textTransform: "uppercase",
    fontSize: "0.85rem",
  },
};

class Forms extends React.Component {
  state = {
    email: "",
    name: "",
    message: "",
    sent: false,
    err: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value, err: "" });
  };

  sendMessage = (event, url = "http://localhost:4001/message") => {
    const { email, name, message } = this.state;
    event.preventDefault();

    const config = {
      method: "post",
      url: url,
      data: {
        email: email,
        name: name,
        message: message,
      },
      headers: {
        "Content-type": "application/json",
      },
      responseType: "text",
    };

    if (config.data.email && config.data.name && config.data.message) {
      axios(config)
        .then((response) => {
          if (response.data.dateName) {
            console.log(response);
            this.setState({
              email: "",
              name: "",
              message: "",
              sent: true,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({ err: "Unvollständig" });
    }
  };

  render() {
    const { email, name, message, sent, err, validated } = this.state;

    return (
      <div className="row">
        <div className="col my-auto mx-auto">
          <Form noValidate validated={validated} onSubmit={this.sendMessage}>
            <Form.Group>
              <Form.Control
                as="input"
                name="email"
                id="user-email"
                placeholder="DEINE E-MAIL"
                value={email}
                onChange={this.handleChange}
                style={err ? styles.inputErr : null}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                as="input"
                name="name"
                id="user-name"
                placeholder="DEIN NAME"
                value={name}
                onChange={this.handleChange}
                style={err ? styles.inputErr : null}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                as="textarea"
                name="message"
                id="user-message"
                placeholder="DEINE NACHRICHT"
                value={message}
                onChange={this.handleChange}
                style={err ? styles.inputErr : null}
              />
            </Form.Group>
            <Button
              style={!err ? styles.button : styles.buttonErr}
              type="submit"
            >
              {!err ? "Senden" : err}
            </Button>
            <Alert variant="secondary" show={sent} style={styles.alert}>
              Nachricht erhalten!
            </Alert>
          </Form>
        </div>
        <div className="col my-auto mx-auto">
          <Alert style={{ lineHeight: "1.8rem" }}>
            Erzähl uns von deinem Forschungsprojekt. Zusammen entwerfen wir eine
            Geschichte, die um die Welt gehen wird.
          </Alert>
        </div>
      </div>
    );
  }
}

export default Forms;
