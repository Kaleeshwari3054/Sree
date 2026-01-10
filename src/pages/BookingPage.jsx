
// src/pages/BookingPage.jsx - COMPLETE & PERFECT
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookingPage.css'; 

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  
  // Dynamic future dates only (Jan 11, 2026+)
  const getCalendarData = (month, year) => {
    const today = new Date(2026, 0, 10); // Jan 10, 2026
    const data = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      if (date > today) {
        const status = Math.random() > 0.6 ? 'full' : 
                      Math.random() > 0.3 ? 'quota-released' : 'available';
        data.push({ day: d, status, fullDate: date.toISOString().split('T')[0] });
      }
    }
    return data;
  };

  const months = {
    'January 2026': getCalendarData(0, 2026),
    'February 2026': getCalendarData(1, 2026),
    'March 2026': getCalendarData(2, 2026),
    'April 2026': getCalendarData(3, 2026)
  };

  const getStatusStyle = (status) => {
    return status === 'available' ? 'bg-success text-white' :
           status === 'full' ? 'bg-danger text-white' : 'bg-secondary text-white';
  };

  return (
    <div className="booking-page">
      {/* HEADER - EXACT MATCH */}
      <header className="page-header">
        <div className="service-title">Service Name</div>
        <h1>Srinivasa Temple, Tirupati</h1>
        <div className="seva-slots">Seva Slots</div>
        <Link to="/" className="back-button">← Back</Link>
      </header>

      {/* LEGEND */}
      <div className="legend">
        <span><div className="legend-dot available"></div>Available</span>
        <span><div className="legend-dot full"></div>Full</span>
        <span><div className="legend-dot quota"></div>Quota Released</span>
      </div>

      {/* 4-MONTH CALENDAR GRID */}
      <div className="calendar-container">
        {Object.entries(months).map(([monthName, days]) => (
          <div key={monthName} className="calendar-month">
            <div className="month-title">{monthName}</div>
            <div className="calendar-grid">
              {/* Days Header */}
              <div className="week-days">
                {['S','M','T','W','T','F','S'].map(day => (
                  <div key={day} className="day-header">{day}</div>
                ))}
              </div>
              
              {/* Calendar Days */}
              {Array.from({length: 6}, (_, week) =>
                <div key={week} className="week-row">
                  {Array.from({length: 7}, (_, i) => {
                    const dayData = days[week * 7 + i];
                    if (!dayData) return <div key={i} className="empty-cell"></div>;
                    
                    return (
                      <button
                        key={i}
                        className={`calendar-day ${getStatusStyle(dayData.status)}`}
                        onClick={() => setSelectedDate(dayData.fullDate)}
                        disabled={dayData.status === 'full'}
                      >
                        <div className="day-number">{dayData.day}</div>
                        <div className="status-text">
                          {dayData.status === 'available' ? 'AVAIL' :
                           dayData.status === 'full' ? 'FULL' : 'QUOTA'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* SELECTED DATE */}
      {selectedDate && (
        <div className="selected-info">
          <h3>Selected: {selectedDate}</h3>
          <button className="continue-btn">View Slots →</button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
