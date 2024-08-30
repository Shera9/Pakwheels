// App.jsx
import React from 'react';
import HoverableSection from './HoverableSection'; // Assuming you'll create HoverableSection.jsx

const NavbarContents = () => {
  // Define sections data with their respective columns
  const sections = [
    {
      id: 'used-cars',
      title: 'Used Cars',
      columns: [
        {
          type: 'iconHeadingParagraph',
          icon: 'icon-url',
          heading: 'Car 1',
          paragraph: 'Description of Car 1'
        },
        {
          type: 'iconHeadingParagraph',
          icon: 'icon-url',
          heading: 'Car 2',
          paragraph: 'Description of Car 2'
        },
        {
          type: 'headingItemList',
          heading: 'Popular Used Cars',
          items: ['Car 3', 'Car 4', 'Car 5']
        },
        {
          type: 'headingItemList',
          heading: 'Latest Used Cars',
          items: ['Car 6', 'Car 7', 'Car 8']
        }
      ]
    },
    {
      id: 'new-cars',
      title: 'New Cars',
      columns: [
        {
          type: 'iconHeadingParagraph',
          icon: 'icon-url',
          heading: 'New Car 1',
          paragraph: 'Description of New Car 1'
        },
        {
          type: 'iconHeadingParagraph',
          icon: 'icon-url',
          heading: 'New Car 2',
          paragraph: 'Description of New Car 2'
        },
        {
          type: 'headingItemList',
          heading: 'Popular New Cars',
          items: ['New Car 3', 'New Car 4', 'New Car 5']
        }
      ]
    },
    {
      id: 'bikes',
      title: 'Bikes',
      columns: [
        {
          type: 'iconHeadingParagraph',
          icon: 'icon-url',
          heading: 'Bike 1',
          paragraph: 'Description of Bike 1'
        },
        {
          type: 'iconHeadingParagraph',
          icon: 'icon-url',
          heading: 'Bike 2',
          paragraph: 'Description of Bike 2'
        },
        {
          type: 'headingItemList',
          heading: 'Popular Bikes',
          items: ['Bike 3', 'Bike 4', 'Bike 5']
        },
        {
          type: 'headingItemList',
          heading: 'Latest Bikes',
          items: ['Bike 6', 'Bike 7', 'Bike 8']
        }
      ]
    },
    {
      id: 'auto-stores',
      title: 'Auto Stores',
      columns: [
        {
          type: 'headingItemList',
          heading: 'Auto Stores List',
          items: ['Store 1', 'Store 2', 'Store 3', 'Store 4']
        }
      ]
    }
  ];

  return (
    <div className="app" style={{display:'flex'}}>
      {sections.map((section) => (
        <HoverableSection key={section.id} title={section.title} columns={section.columns} />
      ))}
    </div>
  );
};

export default NavbarContents;
