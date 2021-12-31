import React,{ Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import FormFour from './FormFour';
import Back from './Back';

class Routes extends Component {
  render(){
    return(
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/back" component={Back}/>
          <Route path="/formfour" component={FormFour}/>
          <Route path="/formthree" component={FormThree}/>
          <Route path="/formtwo" component={FormTwo}/>
          <Route exact path="/" component={FormOne}/>
        </Switch>
      </BrowserRouter>
    )
  }  
}

export default Routes;
