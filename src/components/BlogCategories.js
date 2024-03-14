import React from 'react'
import { useParams } from 'react-router-dom';
import BlogContent from './BlogContent';

const BlogCategories = () => {
    const { category } = useParams();
    let workProps = {};
    const defaultCategory = 'graphicdesigning';
    const selectedCategory = category || defaultCategory;
    switch (selectedCategory) {
      case 'graphicdesigning':
        workProps = {
          heading:'Graphic Design',
          text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci ullam dolore qui doloribus. Voluptas, perferendis illo eveniet inventore nesciunt culpa consequatur sunt, omnis quis assumenda ab ea sequi vel quod perspiciatis natus adipisci totam quos rem dicta porro. Architecto optio error assumenda adipisci et. Velit sunt consequatur mollitia hic porro veritatis saepe, tenetur officia assumenda recusandae, deleniti aspernatur itaque omnis quo? Placeat labore, nesciunt aut perspiciatis illum obcaecati deserunt repellat sit nostrum? Itaque excepturi vitae dolor nihil vero, accusamus eaque odio error temporibus illum saepe unde in odit laborum dolorum, aspernatur, consequuntur at voluptatem. Vero sapiente modi fugit exercitationem magni aliquam reprehenderit illum voluptate laudantium quis, nesciunt voluptatibus atque consequatur a nisi eius cum beatae minus temporibus? Laborum vel commodi nisi ducimus obcaecati blanditiis, maiores nulla placeat nihil qui earum. Atque dicta recusandae dignissimos voluptas magni aperiam iusto vel! Tempore quo sunt architecto alias omnis dignissimos perferendis laboriosam harum quos, ad tempora modi esse, aliquam ex molestias voluptas dolor itaque hic! Eaque modi minus libero alias at doloremque laboriosam ut tempore? Pariatur vero odio itaque quo velit laboriosam facere mollitia cum quasi et dolores voluptas error animi magni porro consectetur, neque nihil voluptatibus nam deleniti omnis consequatur! Officia ad iste quos laboriosam dolorem quae aut, expedita iure non. Incidunt magnam ex aliquam minima recusandae nemo est velit quidem itaque aspernatur blanditiis asperiores in, eius qui vel voluptates molestiae ipsa corporis eveniet fugit doloribus nihil perferendis. Libero quia nostrum vero a rem veritatis numquam qui sed ipsa aliquid culpa sequi ut eveniet id, quasi quos atque magni labore maxime, quisquam consectetur. Ipsum ex sequi laborum iste natus vero, quisquam nobis sint, magni nam porro voluptatibus molestiae cum facilis iusto possimus dolor nemo, aliquid est. Inventore, sunt assumenda dolore voluptatum fugiat temporibus ipsam maxime soluta placeat est, quaerat ullam delectus vel tempore veritatis dolorum numquam unde hic commodi a. Recusandae tempora odio, culpa aut, quis facilis eaque autem animi commodi ducimus alias quisquam unde a, itaque rem magni modi. Quae, reprehenderit vel fuga nisi sed animi laborum suscipit et dicta necessitatibus natus nobis, odit accusantium quia velit a saepe porro fugit, aperiam expedita id ipsam culpa repellendus ipsum? Aliquid a delectus molestiae nostrum nobis odio expedita incidunt in, ratione ullam rerum cum vel quod sed. Maiores ipsam vero recusandae, molestiae ipsum officia quasi, animi incidunt labore voluptate quibusdam cumque, nemo atque ex debitis rerum voluptatem ea quisquam at qui cupiditate laborum reiciendis esse beatae. Culpa quam libero possimus commodi. Aliquid sunt minima ducimus error? Sapiente soluta autem ad ducimus. Distinctio consectetur nesciunt, quos molestias illo magni tempora aspernatur est. Cupiditate alias atque, consequatur amet exercitationem debitis obcaecati aliquam, culpa illo animi quasi dignissimos officia sed, ipsa eaque voluptate voluptatibus distinctio iste quidem placeat commodi possimus? Harum, aspernatur. Iusto dolorem voluptate eligendi blanditiis possimus, unde similique sed obcaecati velit exercitationem mollitia accusamus non aut neque sapiente temporibus vero quidem laboriosam tenetur ut sunt porro iste quo. Possimus eligendi ab dolores neque qui. Minima error praesentium cum quasi quis est dolor, facere repudiandae alias reiciendis, perspiciatis voluptatum itaque tempore tenetur laboriosam eveniet? Sequi officiis iure labore eaque debitis, cumque porro consectetur beatae assumenda odio magni maiores dolorum, libero sed? Quam reprehenderit beatae doloribus quis quidem magni suscipit voluptatum, qui minima quo optio pariatur doloremque? Laudantium molestias quas molestiae cumque vel ex. Dolorum reiciendis quidem laborum ducimus dolore itaque repellendus aliquid, eaque, unde facere aut iusto ea veritatis repudiandae at recusandae velit vel earum odio inventore doloremque fugiat! Perspiciatis quaerat odit, cum natus maiores nobis illum dolorem qui, maxime laudantium architecto sint labore minus culpa numquam quis commodi suscipit ab possimus odio modi ad.',
          
        //   images: [
        //     { url: w1 }, { url: w2 }, { url: w3 }, { url: cp}, { url: bd }
        //   ]  
          };
        break;
      case 'shopifydev':
        workProps = {
          heading:'Shopify Expert',
          text:'Explore our curated collection of Shopify success stories. Our portfolio showcases beautifully crafted online stores, seamless e-commerce integrations, and customized solutions. From small businesses to established brands, discover how we’ve transformed digital visions into thriving online experiences.',
        //   images: [
        //     { url: s1 }, { url: s2 }, { url: s3 }, { url: s4 }, { url: s5 }, { url: s6 }, { url: s7 }, { url: s8 }, { url: s9 }, { url: s10 }, { url: s11 }, { url: s12 },
        //     { url: s13 }, { url: s14 }, 
        //     // Add more image objects as needed
        //   ]  
        };
        break;
      case 'marketing':
        workProps = {
          heading:'Marketing Services',
          text:'Explore our diverse marketing services portfolio, showcasing successful campaigns, brand transformations, and growth-driven strategies. From SEO to social media management, discover how we’ve empowered businesses to thrive in the digital landscape. Let’s elevate your brand together! 🚀',
        //   images: [
        //     { url: sm1 }, { url: sm2 }, { url: sm3 }, { url: sm4 }, { url: sm5 }, 
        //   ]  
        };
        break;
      case 'videoediting':
        workProps = {
          heading:'Video Editing',
          text:'We transform raw footage into professional videos that resonate. Our storytelling and visual effects expertise ensures that your message is conveyed effectively and beautifully. Experience the magic we create at Fair ServiceX.',
        //   videos: [
        //     { url: v1 }, { url: v2 }, { url: v3 }, { url: v4 },  
        //   ]  
        };
        break;
      case 'webdevelopment':
        workProps = {
          heading:'Web Development',
          text:'Dive into Fair ServiceX’s Web Development Portfolio. We craft responsive, user-friendly websites that drive your digital presence. Our team’s proficiency in the latest technologies ensures your website stands out. Discover the blend of creativity and functionality in our web development projects.',
        //   images: [
        //     { url: wp1 }, { url: wp2 }, { url: wp3 }, { url: wp4 }, { url: w5 }, { url: w6 }, { url: w7 }, { url: w8 }, { url: w9 }, { url:w10 }, { url: w11 }, { url: w12 },
        //     { url: w13 },
        //     // Add more image objects as needed
        //   ]     
    };
        break;
        case 'seo':
        workProps = {
          heading:'Search Engine Optimization',
          text:'Dive into Fair ServiceX’s Web Development Portfolio. We craft responsive, user-friendly websites that drive your digital presence. Our team’s proficiency in the latest technologies ensures your website stands out. Discover the blend of creativity and functionality in our web development projects.',
        //   images: [
        //     { url: seo1 }, 
        //     // Add more image objects as needed
        //   ]    
     };
        break;
        case 'writingservices':
        workProps = {
          heading:'Writing Services',
          text:'Discover our Writing Services Portfolio. We offer compelling content and copywriting solutions that captivate audiences and drive engagement. Our skilled writers craft content that is SEO-friendly, creative, and tailored to your brand’s voice. Experience the power of words with Fair ServiceX.',
        //   img1:w1, title1:'Social Media Marketing Poster', descp1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
        //   img2:w2, title2:'Graphic Design Poster', descp2:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
        //    img3:w3, title3:'Graphic Design Poster', descp3:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, ste aut placeat voluptate quam in perferendis, cum laboriosam!',
          //  img4:w4,title4:'Graphic Design Poster', descp4:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
        };
        break;
      default:
        workProps = {
          heading:'Graphic Design',
          text:'Explore our Graphic Design Portfolio at FAIR ServiceX. It showcases our creativity and expertise in transforming ideas into visually compelling designs. Each piece is a testament to our commitment to excellence and ability to deliver designs that meet and exceed client expectations.',
        //   img1:w3, title1:'Digital Marketing ', descp1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
        //   img2:w2, title2:'Graphic Design Poster', descp2:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
          //  img3:w4, title3:'Graphic Design Poster', descp3:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
        //    img4:w1,title4:'Graphic Design Poster', descp4:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
        };
    }
  return (
    <>
   <BlogContent {...workProps} />
   
    </>
  )
}

export default BlogCategories