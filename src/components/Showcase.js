import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";

import { BsLinkedin, BsGithub } from "react-icons/bs";

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer align="center" fullWidthChild>
        {/* --left-content-- */}
        <div>
          <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
            Natalie Gillam -<BlueText> React Developer</BlueText>
          </Heading>
          <ParaText as="p" top="2rem" bottom="4rem">
            I am a frontend web developer based near London, UK and have been
            building websites with React and JavaScript since 2022. I love
            creating sites and apps that solve real-world problems, while
            engaging and delighting users.
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
        
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
