import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, Logo, MyText, LinkedInModal } from '../../components';
import { LinkedInKeys } from '../../constants/apikeys';
import { validateLinkedinAuthToken } from '../../api/api';

import styles from './styles.js'

class HomeScreen extends Component {
  linkedRef = React.createRef(LinkedInModal);

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      profileData: null
    }
  }

  login = () => {
    this.linkedRef.current.open();
  }

  logout = () => {
    this.setState({
      loading: true,
    });
    this.linkedRef.current.logoutAsync()
      .then(() => {
        this.setState({
          loading: false,
          profileData: null
        })
      })
  }

  handleLinkedInSuccess = (token) => {
    const { loginWithLinkedin } = this.props;

    this.setState({
      loading: true,
    });

    const accessToken = JSON.stringify({
      code: token.access_token
    });

    // modified by Erick.(loginWithLinkedin action is not a promise.)
    loginWithLinkedin(accessToken);
    // once login info changed, this.props.user changed....
    /*
    loginWithLinkedin(accessToken);
      .then(profileData => {
        this.setState({
          loading: false
        });
      })
      .catch(error => {
        console.log('Error: ', error);
        this.setState({
          loading: false
        });
      })*/
  }

  render() {
    // added by Erick
    console.log("Login User Info Form Store --->", this.props.user);
    
    const { loading, profileData } = this.state;
    if (loading) {
      return (
        <View style={styles.homeScreen}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.homeScreen}>
        <Logo style={styles.logo} />
        {!profileData ? <Button theme='control' style={styles.loginButton} onClick={this.login}>Login</Button> : <Button theme='control' style={styles.loginButton} onClick={this.logout}>Logout</Button>}
        <MyText style={styles.loginText}>with your LinkedIn account</MyText>
        <LinkedInModal
          ref={this.linkedRef}
          shouldGetAccessToken
          linkText=""
          clientID={LinkedInKeys.linkedinClientId}
          clientSecret={LinkedInKeys.linkedinSecretKey}
          redirectUri={LinkedInKeys.linkedinRedirectUri}
          onSuccess={token => this.handleLinkedInSuccess(token)}
          onError={error => console.log(error)}
        />
      </View>
    )
  }
}

export { HomeScreen };