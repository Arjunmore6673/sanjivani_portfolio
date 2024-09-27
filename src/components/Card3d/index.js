import React, {useState} from 'react';
import BackImg from '../../images/back.jpeg'
import GlassCard from "./GlassCard";
const Card3d = () => {
    const [data, setData] = useState(null);


    return <div className={''}
      style={{
          width :'100vw',
          height:'100vh',
          backgroundImage : `url(${BackImg})`,
          backgroundPosition:'center',
          backgroundSize:'cover',
          backgroundRepeat :'no-repeat',
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
      }
      }>
        <GlassCard/>
    </div>;
};
export default Card3d;
