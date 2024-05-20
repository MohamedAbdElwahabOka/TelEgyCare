import React from 'react'
import Image from 'next/image';
import plusIcon from '../../_components/img/plus.png'

const TestFields = ({ testFields, onAddTestField }) => {
  return (
    <div className="flex grid grid-cols-1 gap-3 px-1">
      {testFields.map((field) => (
        <div key={field.id} className="test-field relative">
          <input
            type="text"
            class="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1 text-black"
            id="LabNote"
            placeholder="Enter the required test and x-rays"
            value={field.value}
            onChange={(e) => {/* handle field value change */ }}
          />
          <button type="button" onClick={onAddTestField} className="plus-icon absolute top-1/2 right-1 transform -translate-y-1/2">
            <Image src={plusIcon} alt="add" width={25} height={25} />
          </button>
        </div>
      ))}
    </div>

  );
};
export default TestFields;
