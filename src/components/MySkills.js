import React from "react";

// import global styles
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  BlueText,
} from "../styles/Global.styled";

//import MySkills styles
import { SkillsCardContainer, SkillsCard } from "../styles/MySkills.styled";

//import data
 import {Skills} from '../utils/Data.js';

const MySkills = () => {
  return (
    <PaddingContainer id="Skills" top="10%" bottom="10%">
      <FlexContainer fullWidthChild>
        {/* --left section-- */}
        <SkillsCardContainer>
            {Skills.map((skill, index)=> (
                <SkillsCard>
                    <IconContainer size = "5rem" color="blue">
                        {skill.icon}
                    </IconContainer>
                    <Heading as="h4" size="h4">{skill.tech}</Heading>
                </SkillsCard>
            ))}
        </SkillsCardContainer>
        <div>
            <Heading as ="h4" size="h4">
                My Skills
            </Heading>
            <Heading as ="h2" size="h2" top="0.5rem">
                What <BlueText>I can do</BlueText> 
            </Heading>

            <ParaText top = "2rem" bottom = "1.5rem">
                About Me text
            </ParaText>
            <ParaText>
                Further information
            </ParaText>

        </div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
