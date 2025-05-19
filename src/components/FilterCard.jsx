import React from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
  },
];

const FilterCard = ({ selectedFilters, setSelectedFilters }) => {
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className='w-full bg-white p-3 rounded-md shadow-sm sticky top-5'>
      <h1 className="text-4xl font-bold mb-3">
              <span className="text-[#6A38C2]">Filter</span> Jobs
            </h1>
      <hr className='mt-3 mb-4' />
      
      {filterData.map((data, index) => (
        <div key={index} className="mb-6">
          <h1 className='font-bold text-md mb-3'>{data.filterType}</h1>
          <RadioGroup 
            value={selectedFilters[data.filterType]}
            onValueChange={(value) => handleFilterChange(data.filterType, value)}
          >
            {data.array.map((item, idx) => {
              const itemId = `${data.filterType}-${idx}`;
              return (
                <div key={itemId} className='flex items-center space-x-2 my-2'>
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId} className="cursor-pointer">
                    {item}
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;