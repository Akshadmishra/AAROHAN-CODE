import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as BrowserRouter, Switch, Route } from 'react-router-dom';

import { auth } from './Utils/auth';
//
import Loader from './Components/Loader/Loader';

const BadTurn = lazy(() => import('./Components/404/BadTurn'));
const BehindTS = lazy(() => import('./Components/BehindTS/BehindTS'));
const Home = lazy(() => {
  return Promise.all([import('./Components/Home/Home'), new Promise((resolve) => setTimeout(resolve, 5000))]).then(
    ([moduleExports]) => moduleExports
  );
});
const Landing = lazy(() => import('./Components/Home/Landing/Landing'));
const Stats = lazy(() => import('./Components/Home/Stats/Stats'));
const SocialCause = lazy(() => import('./Components/Home/SocialCause/SocialCause'));
const About = lazy(() => import('./Components/Home/About/About'));
const Gallery = lazy(() => import('./Components/Gallery/Gallery'));
const GalleryInside = lazy(() => import('./Components/Gallery/GalleryInside/GalleryInside'));
const Events = lazy(() => import('./Components/Events/Events'));
const Sponsors = lazy(() => import('./Components/Sponsors/Sponsors'));
const Competitions = lazy(() => import('./Components/Competitions/Competitions'));
const Register = lazy(() => import('./Components/Submissions/Register/Register'));
const Login = lazy(() => import('./Components/Submissions/Login/Login'));
const Display = lazy(() => import('./Components/Submissions/Display/Display'));
const SubSponsor = lazy(() => import('./Components/Sponsors/SubSponsor'));

function App() {
  const setData = (user) => {
    localStorage.setItem('logged', true);
    localStorage.setItem('uid', user.uid);
    localStorage.setItem('name', user.displayName);
    localStorage.setItem('email', user.email);
    localStorage.setItem('photo', user.photoURL);
  };

  const unsetData = () => {
    localStorage.setItem('logged', false);
    localStorage.setItem('uid', '');
    localStorage.setItem('name', '');
    localStorage.setItem('email', '');
    localStorage.setItem('photo', '');
  };

  useEffect(() => {
    const authHandler = auth.onAuthStateChanged((user) => {
      if (user) setData(user);
      else unsetData(user);
    });

    return () => authHandler();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/landing" exact component={Landing} />
          <Route path="/about" exact component={About} />
          <Route path="/stats" exact component={Stats} />
          <Route path="/social" exact component={SocialCause} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/galleryin" exact component={GalleryInside} />
          <Route path="/competitions" exact component={Competitions} />
          <Route path="/sponsors" exact component={Sponsors} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/submissions" exact component={Display} />
          <Route path="/bts" exact component={BehindTS} />
          <Route path="/subsponsor" exact component={SubSponsor} />
          <Route path="/events" exact component={Events} />
          <Route path="*" component={BadTurn} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
