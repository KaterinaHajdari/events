import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Header from './Header'
import Signup from './Signup';

const App=()=>{
return (

<BrowserRouter>

<Header />
    <Route  path="/signup" component={Signup}/>
</BrowserRouter>

)
}
export default App;