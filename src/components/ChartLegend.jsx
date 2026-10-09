import React from 'react';

const ChartLegend = ({ items }) => {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-700">{item.name}</span>
          </div>
          <span className="text-gray-500 font-medium">{item.value}%</span>
        </div>
      ))}
    </div>
  );
};

export default ChartLegend;;