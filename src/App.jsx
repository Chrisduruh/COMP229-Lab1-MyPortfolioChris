import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar  from './navbar';
import About  from './About';
import Footer from './FFooter';
//import Projects from './Projects';
import Services from './Services';
 //import { ThemeProvider } from '@material-ui/styles';
 import MainRouter from '../MainRouter';
 import Contact from './Contact';
import Projects from './Projects';
 //import theme from '../theme';
 //import { hot } from 'react-hot-loader'

const App = () => {
 return (
 <Router>
<Navbar/>
 <MainRouter />
<Footer/>
 </Router>
  
 );
 };

export default App;
