// App.jsx
import React from 'react';
import UsedCars from './UsedCars';


const UsedCarsData = () => {
  // Define sections data with their respective columns

  const data = {
    1: {
      images: ["vehicle5", "vehicle6", "vehicle3", "vehicle4", "vehicle1","vehicle2"],
      titles: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck','Help Me Choose'],
      lnk: ['Learn', 'Order', 'Get Started'],
      listLink: ['Inventory','Used Cars','Demo Drive','Trade In','Compare','Help Me Charge','Fleet','Semi','Roadster'],
    },
    2: {
     
      titles: ['Solar Panel', 'Solar Roof', 'Powerwall', 'Megapack'],
      lnk: ['Learn', 'Order', 'Get Started'],
      listLink: ['Schedule a Consultation','Why Solar','Incentives','Support','Partner with Tesla','Commercial','Utilities'],
    },
    3: {
     
      titles: ['Charging', 'Home Charging', 'Supercharging'],
      lnk: ['Learn', 'Order', 'Get Started'],
      listLink: ['Help Me Charge','Charging Calculator','Charging With NACS','Supercharger Voting','Host a Supercharger','Commercial Charging','Host Wall Connectors'],
    },
    4: {
      images: ['image4_1.jpg', 'image4_2.jpg', 'image4_3.jpg', 'image4_4.jpg', 'image4_5.jpg'],
      titles: ['Title 4.1', 'Title 4.2', 'Title 4.3', 'Title 4.4', 'Title 4.5'],
      lnk: ['Heading 4.1', 'Heading 4.2', 'Heading 4.3', 'Heading 4.4', 'Heading 4.5'],
      listLink: ['Inventory','Used Cars','Demo Drive','Trade In','Compare','Help Me Charge','Fleet','Semi','Roadster'],
    },
  };

  return (
    <div>
       
    <UsedCars {...data[1]} />
    </div>
  );
};

export default UsedCarsData;
