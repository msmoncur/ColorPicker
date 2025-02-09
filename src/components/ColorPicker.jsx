import React from 'react';

const ColorPicker = ({ colors, selectedColor, onColorSelect, onReset }) => {
    return (
        <div
            className="p-20"
            style={{ backgroundColor: selectedColor }}
        >
            <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-4">
                {colors.map((color) => (
                    <button
                        key={color}
                        onClick={() => onColorSelect(color)}
                        className={`
              p-4 text-black font-medium
              ${selectedColor === color ? 'ring-4 ring-white' : ''}
            `}
                        style={{ backgroundColor: color }}
                    >
                        {color}
                    </button>
                ))}
            </div>
            <button
                onClick={onReset}
                className="w-full mt-4 py-2 px-4 bg-gray-200 text-gray-800 
                 hover:bg-gray-300 font-medium"
            >
                Reset
            </button>
        </div>
    );
};

export default ColorPicker;