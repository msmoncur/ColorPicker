import React, { useState } from 'react';
import './App.css'
import ColorPicker from './components/ColorPicker';

const App = () => {
  const colors = ['Red', 'Blue', 'Green', 'Yellow'];
  const defaultColor = 'white';
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleReset = () => {
    setSelectedColor(defaultColor);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Color Picker</h1>
        <ColorPicker
          colors={colors}
          selectedColor={selectedColor}
          onColorSelect={handleColorSelect}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default App;