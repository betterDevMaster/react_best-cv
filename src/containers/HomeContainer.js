import { connect } from 'react-redux';
import { HomeScreen } from '../screens';
import { loginWithLinkedin } from '../actions';

const mapStateToProps = state => ({
  user: state.loginReducer,
});

const mapDispatchToProps = dispatch => ({
  loginWithLinkedin: (accessToken) => {
    dispatch(loginWithLinkedin(accessToken))
  }
})

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(HomeScreen);