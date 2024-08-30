import React from 'react'
import Img1 from '../Images/NewBikesByMakeImages/344081787_624498899605301_3390518229988137800_n.jpg'
import Img2 from '../Images/NewBikesByMakeImages/BMW.png'
import Img3 from '../Images/NewBikesByMakeImages/Benelli.png'
import Img4 from '../Images/NewBikesByMakeImages/Honda.png'
import Img5 from '../Images/NewBikesByMakeImages/Kawasaki.png'
import Img6 from '../Images/NewBikesByMakeImages/Road-prince.png'
import Img7 from '../Images/NewBikesByMakeImages/Super-Power.png'
import Img8 from '../Images/NewBikesByMakeImages/SuperStar.png'
import Img9 from '../Images/NewBikesByMakeImages/Suzuki.png'
import Img10 from '../Images/NewBikesByMakeImages/United.png'
import Img11 from '../Images/NewBikesByMakeImages/Yamaha.png'
import Img12 from '../Images/NewBikesByMakeImages/benlng.png'
import Img13 from '../Images/NewBikesByMakeImages/colored-wheel.png'
import Img14 from '../Images/NewBikesByMakeImages/hi-Speed.png'
import NewBikesByMaking from './NewBikesByMaking'



const NewBikesMakingData = () => {
    const cards = [
        {
          image: `${Img1}`,
          title: 'Honda',
        
        },
        {
          image: `${Img2}`,
          title: 'Yamaha',
       
        },
        {
            image: `${Img3}`,
          title: 'Suzuki',
   
        },
        {
            image: `${Img4}`,
            title: 'Unique',
      
        },
        {
            image: `${Img5}`,
            title: 'Hi Speed',
      
          },
          {
            image: `${Img6}`,
            title: 'United',
        
          },
          {
            image: `${Img7}`,
            title: 'Road Prince',
           
          },
          {
            image: `${Img8}`,
            title: 'BMW',
          
          },
          {
            image: `${Img9}`,
            title: 'Benelli',
         
          },
          {
              image: `${Img10}`,
            title: 'Bingo Electric',
     
          },
          {
              image: `${Img11}`,
              title: 'Evee',
        
          },
          {
              image: `${Img12}`,
              title: 'Hero',
        
            },
            {
              image: `${Img13}`,
              title: 'Jolta Electric',
          
            },
            {
              image: `${Img14}`,
              title: 'KEEWAY',
             
            },

      ];
  return (
    <div>
      <NewBikesByMaking cards={cards}/>
    </div>
  )
}

export default NewBikesMakingData
