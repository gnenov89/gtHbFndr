import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import About from './components/pages/About'
import { GithubProvider } from './components/context/github/GithubContext'
import { AlertProvider } from './components/context/alert/AlertContext'
import Alert from './components/layout/Alert'
import User from './components/pages/User'
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>

                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/notfound' element={<NotFound />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
                <Route path='/user/:login' element={<User />}></Route>

              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
