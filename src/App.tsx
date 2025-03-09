import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ClassTimeTablePage from './pages/ClassTimetablePage';
import DigitalNotesSpace from './pages/DigitalNotesSpace';
import FeePaymentPage from './pages/FeePaymentPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/class-timetable" element={<ClassTimeTablePage />} />
        <Route path="/notes" element={<DigitalNotesSpace />} />
        <Route path="/fee-payment" element={<FeePaymentPage />} />
        {/* Add more routes as needed*/}
      </Routes>
    </Router>
  );
};

export default App;
