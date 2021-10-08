import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import {DailyJournal} from "./components/DailyJournal"

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <DailyJournal />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

