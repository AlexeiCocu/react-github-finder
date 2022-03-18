import {BrowserRouter  as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import {GithubProvider} from "./context/github/GithubContext";
import {AlertProvider} from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";

function App() {
  return (
      <GithubProvider>
          <AlertProvider>
              <Router>
                  <div className="flex flex-col justify-between h-screen">
                      <Navbar />

                      <main className='container mx-auto px-3 pb-12'>

                          <Alert/>

                          <Routes>
                              <Route path='/' element={<Home/>} />
                              <Route path='/user/:login' element={<User/>} />
                              <Route path='/about' element={<About/>} />
                              <Route path='/404' element={<Page404/>} />
                              <Route path='/*' element={<Page404/>} />
                          </Routes>
                      </main>

                      <Footer/>
                  </div>
              </Router>
          </AlertProvider>
      </GithubProvider>
  );
}

export default App;
