import React, { useState } from 'react';
import { createCourse } from '../api';

const CourseForm = () => {
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCourse({ title, code, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" required />
            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Course Code" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Course Description" required />
            <button type="submit">Add Course</button>
        </form>
    );
};

export default CourseForm;
