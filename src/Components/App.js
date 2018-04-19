import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';


const mapStateToProps = state => ({
  appName: state.appName
 });

class App extends Component {

  render() {
    return (
        <div>
            <Header appName={this.props.appName} />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/login" component={Login} />
            </Switch>
        </div>
          
    );
  }
}

//  App.contextTypes = {
//    router: PropTypes.object.isRequired
//    };
   
export default connect(mapStateToProps, () => ({}) )(App);

