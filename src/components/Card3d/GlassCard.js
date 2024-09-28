import React, { useState } from 'react';
import profile from '../../images/sanjivani.jpg'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'


const StyledImg = styled.img`
        width:200px;
        height:auto;
        margin:auto;
        display:flex;
        border :2px solid gray;
        border-radius:50%
    `;
const StyledH1 = styled.h1`
        line-height:1.3;
        text-align:center;
        letter-spacing:1.5;
    `
const StyledH3 = styled.h1`
         line-height:1.3;
           text-align:center;
      letter-spacing:1.5;
    `
const ContainerMy = styled(animated.div)`
        align-items:center;
        justify-content:center;
        display:inline-block;
        padding:3em;
        border:2px solid transparent;
        position:relative;
        background: #C7D2FE66;
        border-radius:10px;
        backdrop-filter:blur(10px);
        cursor:pointer;
    `;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [data, setData] = useState(null);
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: {
            mass: 10, tension: 500,
            friction: 50
        }
    }))

    return <ContainerMy
        style={{
            transform: props.xys.interpolate(trans)
        }}
        onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xys: calc(x, y) })
        }}
        onMouseLeave={() => {
            set({ xys: [0, 0, 1] })
        }}
    >
        <StyledImg src={profile} />
        <StyledH1>Arjun more</StyledH1>
        <StyledH3>Full stack developer</StyledH3>
    </ContainerMy>;
};
export default GlassCard;
