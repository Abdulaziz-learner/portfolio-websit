import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const Home = lazy(()=> import('./pages/Home'));
const NavigationBar=lazy(()=>import('./components/Nav'));
const  Portfolio = lazy(()=>import ('./pages/portfolio'));
const About =lazy(()=>import('./pages/about'));
const Services=lazy(()=>import('./pages/services'));
const Blog=lazy(()=>import('./pages/blog'));
const Contact=lazy(()=>import('./components/footer'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<><h1 className='text-center'>404 NOT FOUND</h1></>}>
     
        <BrowserRouter>
        <header className='header'> <NavigationBar /></header>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/portfolio' component={Portfolio}/> 
            <Route exact path='/about' component={About}/>
            <Route exact path='/services' component={Services}/>
            <Route path='/blog' exact component={Blog}/>
          </Switch>
          <footer className='footer'><Contact/></footer>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
