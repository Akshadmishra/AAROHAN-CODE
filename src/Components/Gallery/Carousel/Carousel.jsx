import React, { useState, useEffect } from 'react';
import Coverflow from 'react-coverflow';
import image1 from '../../../Images/Gallery/gallery1.jpg';
import image2 from '../../../Images/Gallery/gallery2.jpg';
import image3 from '../../../Images/Gallery/gallery3.jpg';
import image4 from '../../../Images/Gallery/gallery4.jpg';
import image5 from '../../../Images/Gallery/gallery5.jpg';
import image6 from '../../../Images/Gallery/gallery6.jpg';
import image7 from '../../../Images/Gallery/gallery7.jpg';
import image8 from '../../../Images/Gallery/gallery8.jpg';
import image9 from '../../../Images/Gallery/gallery9.jpg';
import image10 from '../../../Images/Gallery/gallery10.jpg';
import image11 from '../../../Images/Gallery/gallery11.jpg';
import image12 from '../../../Images/Gallery/gallery12.jpg';
import image13 from '../../../Images/Gallery/gallery13.jpg';
import image14 from '../../../Images/Gallery/gallery14.jpg';
import image15 from '../../../Images/Gallery/gallery15.jpg';
import image16 from '../../../Images/Gallery/gallery16.jpg';
import image17 from '../../../Images/Gallery/gallery17.jpg';
import image18 from '../../../Images/Gallery/gallery18.jpg';
import image19 from '../../../Images/Gallery/gallery19.jpg';
import image20 from '../../../Images/Gallery/gallery20.jpg';
import image21 from '../../../Images/Gallery/gallery21.jpg';
import image22 from '../../../Images/Gallery/gallery22.jpg';
import image23 from '../../../Images/Gallery/gallery23.jpg';
import image24 from '../../../Images/Gallery/gallery24.jpg';
import image25 from '../../../Images/Gallery/gallery25.jpg';
import image26 from '../../../Images/Gallery/gallery26.jpg';
import image27 from '../../../Images/Gallery/gallery27.jpg';
import image28 from '../../../Images/Gallery/gallery28.jpg';
import image29 from '../../../Images/Gallery/gallery29.jpg';
import image30 from '../../../Images/Gallery/gallery30.jpg';
import image31 from '../../../Images/Gallery/gallery31.jpg';
import image32 from '../../../Images/Gallery/gallery32.jpg';

function Carousel() {
  const winSize = window.innerWidth;
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (winSize < 390) setSmall(true);
  }, [winSize]);

  return (
    <Coverflow
      media={{
        '@media (max-width: 900px)': {
          width: '100vw',
          height: '100vh'
        },
        '@media (min-width: 900px)': {
          width: '100vw',
          height: '100vh'
        }
      }}
      displayQuantityOfSide={small ? 0 : 2}
      navigation={false}
      enableHeading={false}
      currentFigureScale={small ? 1 : 2}
      otherFigureScale={small ? 0.9 : 1}
    >
      <img src={image1} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image2} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image3} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image4} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image5} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image6} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image7} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image8} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image9} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image10} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image11} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image12} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image13} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image14} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image15} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image16} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image17} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image18} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image19} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image20} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image21} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image22} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image23} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image24} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image25} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image26} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image27} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image28} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image29} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image30} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image31} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
      <img src={image32} alt="title or description" style={{ display: 'block', width: '100%', height: '100%' }} />
    </Coverflow>
  );
}

export default Carousel;

// ReactDOM.render(
//   ,

//   document.querySelector('.content')
// );
