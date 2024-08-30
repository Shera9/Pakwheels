// SectionWithColumns.jsx
import React from 'react';

const SectionWithColumns = ({ columns }) => {
  return (
    <div className="section" style={{display:'flex',color:'white'}}>
      {columns.map((column, index) => (
        <div key={index} className="column" style={{display:'flex'}}>
          {column.type === 'iconHeadingParagraph' && (
            <>
              <div className="icon">
                <img src={column.icon} alt="Icon" />
              </div>
              <div className="content">
                <h2>{column.heading}</h2>
                <p>{column.paragraph}</p>
              </div>
            </>
          )}
          {column.type === 'headingItemList' && (
            <div className="heading">
              <h2>{column.heading}</h2>
              <ul>
                {column.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWithColumns;
