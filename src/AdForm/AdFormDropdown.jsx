
import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
`;

const DropdownOptions = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: calc(100% - 16px);
  padding: 8px;
  margin: 8px;
  font-size: 14px;
`;

const Option = styled.option`
  padding: 8px;
`;

const AdFormDropdown = ({ options, onChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
  
  
    const filteredOptions = options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <DropdownContainer>
        <Select onClick={() => setIsOpen(!isOpen)} onChange={onChange}>
          <option value="">Select</option>
          {filteredOptions.map((option, index) => (
            <Option key={index} value={option}>{option}</Option>
          ))}
        </Select>
        {/* {isOpen && (
          <div>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            {filteredOptions.length === 0 && (
              <p>No matching options</p>
            )}
            {filteredOptions.length > 0 && (
              <ul>
                {filteredOptions.map((option, index) => (
                  <li key={index} onClick={() => handleSelectChange({ target: { value: option } })}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )} */}
      </DropdownContainer>
    );
  };

export default AdFormDropdown;
