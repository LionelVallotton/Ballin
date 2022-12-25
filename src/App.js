import React, { Component } from 'react';
//import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PointCounter from './Components/Scoreboard/pointCounter';
import StatisticPage from './views/Statistics-Page';

class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/scoreboard">ScoreBoard</Link>
                        </li>
                        <li>
                            <Link to="/statistics">Statistics</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route exact path='/scoreboard' element={<PointCounter/>}></Route>
                        <Route exact path='/statistics'element={<StatisticPage/>}></Route>
                    </Routes>        
                </div>
            </Router>
    )}    
}
export default App;
