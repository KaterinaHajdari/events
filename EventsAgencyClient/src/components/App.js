import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './Header'
import Footer from './Footer';
import About from './About';
import{Route} from 'react-router-dom'
import Home from'./Home'
const App=()=>{
return (
<div> 
<BrowserRouter>

<Header />


<Route path="/Home"  component={Home}></Route>
<Route path="/About" component={About}></Route>

        


<Footer />

</BrowserRouter>
</div>
)
}
export default App;