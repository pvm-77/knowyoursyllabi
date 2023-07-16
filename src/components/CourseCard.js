import React, { useState } from 'react';
import './coursecard.css';

const CourseCard = ({ course }) => {
    const { title, code, logo, units, suggestedReading } = course;
    console.log('logo', logo)
    const [openUnits, setOpenUnits] = useState([]);

    const toggleUnit = (unitId) => {
        if (openUnits.includes(unitId)) {
            setOpenUnits(openUnits.filter((id) => id !== unitId));
        } else {
            setOpenUnits([...openUnits, unitId]);
        }
    };

    return (
        <div className="course-card card-shadow">
            <div className="course-header">
                <div className='course-header-contents'>
                    <p>{title}</p>
                    <p className='sub-heading'>Course Code: {code}</p>
                </div>
                <img src={logo} alt="Course Logo" width={40} className='course-logo' />
            </div>

            <div className="course-units">
                <p className="units-title">Units</p>
                <ul className="accordion">
                    {units.map((unit) => (
                        <li key={unit.id} className="unit-item">
                            <button className="btn unit-button" onClick={() => toggleUnit(unit.id)}>
                                {unit.name}
                                <span className={`arrow-icon ${openUnits.includes(unit.id) ? 'up' : ''}`}>
                                    {openUnits.includes(unit.id) ? '▲' : '▼'}
                                </span>
                            </button>
                            <ul className={`subtopics ${openUnits.includes(unit.id) ? 'open' : ''}`}>
                                {unit.topics.map((topic, index) => (
                                    <li className='subtopic-item' key={topic.id}>
                                        <span className="topic-number">{index + 1}.</span>
                                        {topic.name}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <div className="course-book">
                <h3 style={{ textAlign: 'center' }}>Recommended Books</h3>
                {suggestedReading.map((book) => (
                    <div key={book.title} className="book-wrapper">
                        <p>BookName: {book.title}</p>

                        <div className='book-detail'>
                            <p>Authors: {book.authors.join(', ')}</p>

                            <p>Year: {book.year}</p>
                            <p>Edition: {book.edition}</p>
                            <p>Publisher: {book.publisher}</p>
                            <p>Location: {book.location}</p>
                        </div>

                    </div>
                ))}
            </div> */}

        </div>
    );
};

export default CourseCard;


