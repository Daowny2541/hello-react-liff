import React, { Component } from "react";

const liff = window.liff;
class ProfileLiff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      userId: "",
      pictureUrl: "",
      statusMessage: "",
      email: "",
    };
    this.initialize = this.initialize.bind(this);
    this.closeApp = this.closeApp.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.initialize);
  }

  closeApp(event) {
    event.preventDefault();
    liff
      .sendMessages([
        {
          type: "text",
          text: "Thank you, Bye!",
        },
      ])
      .then(() => {
        liff.closeWindow();
      });
  }

  initialize = async () => {
    await liff.init({ liffId: "1655806906-enpjdqz7" }).catch((err) => {
      throw err;
    });
    if (liff.isLoggedIn()) {
      let profile = await liff.getProfile();
      let getEmail = await liff.getDecodedIDToken();
      this.setState({
        displayName: profile.displayName,
        userId: profile.userId,
        pictureUrl: profile.pictureUrl,
        statusMessage: profile.statusMessage,
        email: getEmail.email,
      });
    } else {
      liff.login();
    }
  };

  render() {
    return (
      <div>
        <div style={{ height: "20px" }} />
        <p className="App-header">
          <img
            alt="logo"
            src={this.state.pictureUrl}
            className="App-img-circle"
          />
          Display Name : {this.state.displayName} <br />
          {/* User ID : {this.state.userId} <br /> */}
          Status Msg : {this.state.statusMessage} <br/>
          email : {this.state.email}
        </p>
        {/* <Button color="primary" onClick={this.closeApp}>Close</Button> */}
      </div>
    );
  }
}

export default ProfileLiff;
