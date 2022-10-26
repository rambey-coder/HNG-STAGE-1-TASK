import './App.css';
import Links from './Components/Links'
// import Error from './Components/Error';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
     <div className="container">
    <Routes>
      <Route path='/' element={<Links />} />
      {/* <Route path='*' element={<Error />} /> */}
     </Routes>
     </div>
     </Router>
  );
}

export default App;
