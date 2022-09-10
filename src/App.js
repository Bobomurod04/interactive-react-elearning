import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./components/pages/AboutUs";
import Contact from './components/pages/Contact';
import CourseDetail from './components/pages/CourseDetail';
import Courses from './components/pages/Courses';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />      
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/courses" exact>
            <Courses />
          </Route>
          <Route path="/courses/:id">
            <CourseDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>     
    </div>
  );
}

export default App;
