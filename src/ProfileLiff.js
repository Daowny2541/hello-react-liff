import React, { Component } from 'react';

const liff = window.liff;  
class ProfileLiff extends Component {

        constructor(props) {
            super(props);
            this.state = {
            displayName : '',
            userId : '',
            pictureUrl : '',
            statusMessage : ''
            };
            this.initialize = this.initialize.bind(this);
            this.closeApp = this.closeApp.bind(this);
        }
    
      componentDidMount() {
        window.addEventListener('load', this.initialize);
      }

      closeApp(event) {
        event.preventDefault();
        liff.sendMessages([{
          type: 'text',
          text: "Thank you, Bye!"
        }]).then(() => {
          liff.closeWindow();
        });
      }
  
      initialize = async() => {
        await liff.init({ liffId: '1655806906-enpjdqz7' }).catch(err=>{throw err});
        if (liff.isLoggedIn()) {
            let profile = await liff.getProfile();
            this.setState({
            //   name: getProfile.displayName,
            //   userLineID: getProfile.userId,
            //   pictureUrl: getProfile.pictureUrl,
                displayName : profile.displayName,
                userId : profile.userId,
                pictureUrl : profile.pictureUrl,
                statusMessage : profile.statusMessage
            });
        }else{
            liff.login();
        }
        }

        render() {
            return (
                <div>
                    <div style={{height:'20px'}}/>
                    <img alt='logo' src={this.state.pictureUrl} className='App-img-circle'/>
                    <p className="App-intro">
                    Display Name : {this.state.displayName} <br/>
                    User ID : {this.state.userId} <br/>
                    Status Msg : {this.state.statusMessage}
                    </p>
                    {/* <Button color="primary" onClick={this.closeApp}>Close</Button> */}
                </div>
            );
        }

}

export default ProfileLiff;