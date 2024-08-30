// HoverableSection.jsx
import React, { useState } from 'react';
import SectionWithColumns from './SectionWithColumns'; // Assuming you'll create SectionWithColumns.jsx
import styled from 'styled-components';

const HoverableSection = ({ title, columns }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <HoverableSectionWrapper
      className="hoverable-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SectionTitle>{title}</SectionTitle>
      {isHovered && <SectionWithColumns columns={columns} />}
    </HoverableSectionWrapper>
  );
};

export default HoverableSection;
const HoverableSectionWrapper = styled.div`
  position: relative;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover .section {
    display: block;
  }
`;

const SectionTitle = styled.h3`
  margin: 0;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
