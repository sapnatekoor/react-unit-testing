import React, { useState } from 'react';

const OnChangeInput = () => {
  const [name, setName] = useState("Sapna");

  return (
    <div>
      <input
        type="text"
        value={name}
        id="name" // Updated to match the test's expected id
        placeholder="Enter your name" // Added placeholder
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default OnChangeInput;
