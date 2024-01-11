import React, { useState } from 'react';

const Planner = () => {
  const [planData, setPlanData] = useState({
    date: '',
    time: '',
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanData({
      ...planData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/savePlan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(planData),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Plan saved successfully');
        // Optionally, you can handle further actions after successful plan saving
      } else {
        console.error('Plan saving failed');
      }
    } catch (error) {
      console.error('Error during plan saving:', error);
    }
  };

  return (
    <div>
      <h2>Planner</h2>
      <form>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={planData.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={planData.time}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={planData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={planData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Add Plan
        </button>
      </form>
    </div>
  );
};

export default Planner;
