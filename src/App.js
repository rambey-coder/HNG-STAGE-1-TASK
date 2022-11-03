import './App.css';
import Links from './Components/Links'
// import Error from './Components/Error';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
     <div className="container">
    <Routes>
      <Route path='/' element={<Links />} />
      <Route path='/contact' element={<Contact />} />
      {/* <Route path='*' element={<Error />} /> */}
     </Routes>
     </div>
     </Router>
  );
}

export default App;
