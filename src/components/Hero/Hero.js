import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          "Hey there, I'm Johannes Alexander Putra FullStack Developer & Android
          Developer"
        </SectionText>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;
