import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hasAccount: false,
      name: "",
      key: "",
      value: "",
    };
  }

  componentDidMount() {
    const db = firebase.database();
    // console.log(db);

    const name = db.ref("name");
    // console.log(name);

    // name.on("value", (elem) => {
    //   console.log(">>", elem.val());
    // });
    name.on("value", (elem) => {
      this.setState({ name: elem.val() });
    });
  }

  handleChange = ({ target: { value, id } }) => {
    // console.log("id--", id);
    // console.log("value--", value);
    this.setState({ [id]: value });
  };

  createAccount = () => {
    const { email, password } = this.state;

    //it's registration
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => console.error(error));

    //it's inter
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log();
        this.setState({ hasAccount: true });
      })
      .catch((error) => console.error(error));
  };

  sendData = () => {
    const { key, value } = this.state;
    const db = firebase.database();
    db.ref(key).push(value);
    console.log("db");
  };

  render() {
    // console.log(this.state);
    // console.log("hasAccount--", this.state.hasAccount);
    // const { hasAccount } = this.state;
    const { hasAccount, name } = this.state;
    console.log("-->>", name);
    return (
      <div className="container">
        {hasAccount ? (
          <div className="login">
            <input
              type="text"
              id="key"
              placeholder="enter key"
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="value"
              placeholder="enter value"
              onChange={this.handleChange}
            />
            <input
              style={{ color: "blue" }}
              type="submit"
              onClick={this.sendData}
            />
          </div>
        ) : (
          <div className="login">
            {/* <h1>TEST</h1> */}
            <input
              id="email"
              type="text"
              placeholder="email"
              onChange={this.handleChange}
            />
            <input
              id="password"
              type="password"
              placeholder="password"
              onChange={this.handleChange}
            />
            <input
              style={{ color: "red" }}
              type="submit"
              onClick={this.createAccount}
            />
          </div>
        )}
      </div>
    );
  }
}
