import React, { useEffect, useState } from 'react';

const initialForm = { name: '', email: '', course: '' };

const AddStudent = ({ onSubmit, selectedStudent }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (selectedStudent) {
      setForm({
        name: selectedStudent.name || '',
        email: selectedStudent.email || '',
        course: selectedStudent.course || ''
      });
    } else {
      setForm(initialForm);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    if (!selectedStudent) {
      setForm(initialForm);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
      <h3>{selectedStudent ? 'Update Student' : 'Add Student'}</h3>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Course:
          <input
            type="text"
            name="course"
            value={form.course}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">{selectedStudent ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default AddStudent;
