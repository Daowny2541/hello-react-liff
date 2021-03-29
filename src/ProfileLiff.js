
class ProfileLiff extends React.Component() {
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

    initialize() {
        liff.init((data) => {
            let profile = await liff.getProfile();
            this.setState({
                displayName : profile.displayName,
                userId : profile.userId,
                pictureUrl : profile.pictureUrl,
                statusMessage : profile.statusMessage
            });
        });
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

    render() {
        return (
            <div>
                <div style={{height:'20px'}}/>
                <p className="App-intro">
                    Display Name : {this.state.displayName} <br/>
                    User ID : {this.state.userId} <br/>
                    Status Msg : {this.state.statusMessage}
                </p>
                 <Button color="primary" onClick={this.closeApp}>Close</Button>
            </div>
        );
    }

}

export default ProfileLiff;