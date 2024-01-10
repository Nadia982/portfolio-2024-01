import styled from 'styled-components';

export const ShowcaseParticleContainer = styled.div`
    position: relative;
` 

export const ShowcaseImageCard = styled.div`
    border: 1px solid white; 
    width: max-content; 
    display: block;
    line-height: 0;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    /* margin-right: 2vw; */
`

export const ShowcaseImg = styled.div`
    object-fit: cover; 
`

export const Particle = styled.img`
    position: absolute;
    top: ${({top}) => top};
    left: ${({left}) => left};
    right: ${({right}) => right};
    bottom: ${({bottom}) => bottom};
    transform: rotate(${({rotate}) => rotate});
    opacity: 0.5;    
`