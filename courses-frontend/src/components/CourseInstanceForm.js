import React, { useState } from 'react';
import { createCourseInstance } from '../api';

const CourseInstanceForm = () => {
    const [courseId, setCourseId] = useState('');
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCourseInstance({ course: courseId, year, semester });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={courseId} onChange={(e) => setCourseId(e.target.value)} placeholder="Course ID" required />
            <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
            <input type="text" value={semester} onChange={(e) => setSemester(e.target.value)} placeholder="Semester" required />
            <button type="submit">Add Course Instance</button>
        </form>
    );
};

export default CourseInstanceForm;
