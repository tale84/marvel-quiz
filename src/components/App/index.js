import '../../App.css';
import Header from "../Header"
import Landing from "../Landing"
import Footer from "../Footer"
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Signup';
import ErrorPage from '../ErrorPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
