import React from 'react'
import Img1 from '../Images/NewCarsMakingImages/1.jpg'
import Img2 from '../Images/NewCarsMakingImages/580b57fcd9996e24bc43c498.png'
import Img3 from '../Images/NewCarsMakingImages/Audi.png'
import Img4 from '../Images/NewCarsMakingImages/BMW.png'
import Img5 from '../Images/NewCarsMakingImages/DFSK.png'
import Img6 from '../Images/NewCarsMakingImages/Honda.png'
import Img7 from '../Images/NewCarsMakingImages/Isuzu.png'
import Img8 from '../Images/NewCarsMakingImages/Suzuki.png'
import Img9 from '../Images/NewCarsMakingImages/Tyota.png'
import Img10 from '../Images/NewCarsMakingImages/United.png'
import Img11 from '../Images/NewCarsMakingImages/hyundai.png'
import Img12 from '../Images/NewCarsMakingImages/kia.png'
import Img13 from '../Images/NewCarsMakingImages/mercedes.png'
import Img14 from '../Images/NewCarsMakingImages/porche.png'
import NewCarsByMaking from './NewCarsByMaking'



const NewCarsMakingData = () => {
    const cards = [
        {
          image: `${Img1}`,
          title: 'Suzuki',
        
        },
        {
          image: `${Img2}`,
          title: 'Toyota',
       
        },
        {
            image: `${Img3}`,
          title: 'Honda',
   
        },
        {
            image: `${Img4}`,
            title: 'KIA',
      
        },
        {
            image: `${Img5}`,
            title: 'Hyundai',
      
          },
          {
            image: `${Img6}`,
            title: 'MG',
        
          },
          {
            image: `${Img7}`,
            title: 'Changan',
           
          },
          {
            image: `${Img8}`,
            title: 'BMW',
          
          },
          {
            image: `${Img9}`,
            title: 'Audi',
         
          },
          {
              image: `${Img10}`,
            title: 'Proton',
     
          },
          {
              image: `${Img11}`,
              title: 'United',
        
          },
          {
              image: `${Img12}`,
              title: 'Porsche',
        
            },
            {
              image: `${Img13}`,
              title: 'Mercedes',
          
            },
            {
              image: `${Img14}`,
              title: 'Prince',
             
            },

      ];
  return (
    <div>
      <NewCarsByMaking cards={cards}/>
    </div>
  )
}

export default NewCarsMakingData
