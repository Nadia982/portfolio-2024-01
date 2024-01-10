//import global styles
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";

//import Showcase styles
import {
  ShowcaseImageCard,
  ShowcaseParticleContainer,
  Particle 
} from "../styles/Showcase.styled";

//import React icons
import { BsLinkedin, BsGithub } from "react-icons/bs";

//import assets
import ShowcaseImg from '../assets/showcase-img.jpg'; 
import BackgroundImg from '../assets/particle.png';

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%" >
      <FlexContainer align="center" fullWidthChild gap="1vw" justify="center">
        {/* --left-content-- */}
        <div>
          <Heading as="h1" size="h2" top="0.3rem">
            Natalie Gillam
          </Heading>
          <Heading as="h1" size="h2" top="0">
          <BlueText> React Developer</BlueText>
          </Heading>
          <ParaText as="p" top="2rem" bottom="4rem">
            I am a frontend web developer based near London, UK and have been
            building websites with React and JavaScript since 2022. I love
            creating sites and apps that solve real-world problems, which
            engage and delight users.
          </ParaText>

          {/* --Social icons-- */}
          <FlexContainer gap="20px">
            <IconContainer color="blue" size="1.5rem">
              <BsLinkedin />
            </IconContainer>
            <IconContainer color="blue" size="1.5rem">
              <BsGithub />
            </IconContainer>
          </FlexContainer>
        </div>
        {/* --right-content-- */}
        <FlexContainer>
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              {/* <img src={ShowcaseImg} style={{objectFit: "cover"}} background="#fff" height="300px" width="180px" alt="Natalie Gillam, a female wearing a beige coloured headscarf"/> */}
            </ShowcaseImageCard>
            <Particle src={BackgroundImg} alt="triangular particle" top="-80px" left="20px" rotate="60deg"/>
            <Particle src={BackgroundImg} alt="triangular particle" top="50px" right="-70px" rotate="0deg"/>
            <Particle src={BackgroundImg} alt="triangular particle" bottom="10px" left="-70px" rotate="50deg"/>
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
