import React from 'react';
import { Link } from 'react-router-dom';
import './styles/designs.css';

const GDDesigns = (props) => {
  const { heading, text, images } = props;

  return (
    <>
      <h1 className='allText animated-buttonH'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {heading}
      </h1>

      <p className="f_para" style={{ margin: '0 2%' }}>{text}</p>

      <div className='designImg'>
        {images.map((img, index) => (
          <img key={index} src={img.url} alt={`mywork${index}`} />
        ))}
      </div>
       {/* <div className='designImg' > 
   <img src={props.img1} alt="mywork" />
   <h1 className='workDescpHead'>{props.title1}</h1>
   <p className='workPara f_para'>{props.descp1}</p>
   <img src={props.img2} alt="mywork" />
   <h1 className='workDescpHead'>{props.title2}</h1>
   <p className='workPara f_para'>{props.descp2}</p>
   <img src={props.img3} alt="mywork" />
   <h1 className='workDescpHead'>{props.title3}</h1>
   <p className='workPara f_para'>{props.descp3}</p>
   <img src={props.img4} alt="mywork" />
   <h1 className='workDescpHead'>{props.title4}</h1>
   <p className='workPara f_para'>{props.descp4}</p>
   <img src={props.img5} alt="mywork" />
   <h1 className='workDescpHead'>{props.title5}</h1>
   <p className='workPara f_para'>{props.descp5}</p>
   <img src={props.img6} alt="mywork" />
   <h1 className='workDescpHead'>{props.title6}</h1>
   <p className='workPara f_para'>{props.descp6}</p>
   <img src={props.img7} alt="mywork" />
   <h1 className='workDescpHead'>{props.title7}</h1>
   <p className='workPara f_para'>{props.descp7}</p>
   <img src={props.img8} alt="mywork" />
   <h1 className='workDescpHead'>{props.title8}</h1>
   <p className='workPara f_para'>{props.descp8}</p>
   <img src={props.img9} alt="mywork" />
   <h1 className='workDescpHead'>{props.title9}</h1>
   <p className='workPara f_para'>{props.descp9}</p>
   <img src={props.img10} alt="mywork" />
   <h1 className='workDescpHead'>{props.title10}</h1>
   <p className='workPara f_para'>{props.descp10}</p>
   <img src={props.img11} alt="mywork" />
   <h1 className='workDescpHead'>{props.title11}</h1>
   <p className='workPara f_para'>{props.descp11}</p>
   <img src={props.img12} alt="mywork" />
   <h1 className='workDescpHead'>{props.title12}</h1>
   <p className='workPara f_para'>{props.descp2}</p>
   <img src={props.img13} alt="mywork" />
   <h1 className='workDescpHead'>{props.title13}</h1>
   <p className='workPara f_para'>{props.descp13}</p>
   <img src={props.img14} alt="mywork" />
   <h1 className='workDescpHead'>{props.title14}</h1>
   <p className='workPara f_para'>{props.descp14}</p>
   <img src={props.img15} alt="mywork" />
   <h1 className='workDescpHead'>{props.title15}</h1>
   <p className='workPara f_para'>{props.descp15}</p>
   <img src={props.img16} alt="mywork" />
   <h1 className='workDescpHead'>{props.title16}</h1>
   <p className='workPara f_para'>{props.descp16}</p>
   <img src={props.img17} alt="mywork" />
   <h1 className='workDescpHead'>{props.title17}</h1>
   <p className='workPara f_para'>{props.descp17}</p>
   <img src={props.img18} alt="mywork" />
   <h1 className='workDescpHead'>{props.title18}</h1>
   <p className='workPara f_para'>{props.descp18}</p>
   <img src={props.img19} alt="mywork" />
   <h1 className='workDescpHead'>{props.title19}</h1>
   <p className='workPara f_para'>{props.descp19}</p>
   <img src={props.img20} alt="mywork" />
   <h1 className='workDescpHead'>{props.title20}</h1>
   <p className='workPara f_para'>{props.descp20}</p>
   <img src={props.img21} alt="mywork" />
   <h1 className='workDescpHead'>{props.title21}</h1>
   <p className='workPara f_para'>{props.descp21}</p>
   <img src={props.img22} alt="mywork" />
   <h1 className='workDescpHead'>{props.title22}</h1>
   <p className='workPara f_para'>{props.descp22}</p>
   <img src={props.img23} alt="mywork" />
   <h1 className='workDescpHead'>{props.title23}</h1>
   <p className='workPara f_para'>{props.descp23}</p>
   </div> */}
       
    </>
  );
}

export default GDDesigns;
