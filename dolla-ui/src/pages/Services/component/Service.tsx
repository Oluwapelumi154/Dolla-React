import React from 'react';
import { ServiceContainer,ServicesH1,ServicesP,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2 } from '../styles/service';
import Icon1 from '../../../assets/images/svg-3.svg';
import Icon2 from '../../../assets/images/svg-4.svg';
import Icon3 from '../../../assets/images/svg-6.svg';
const Services= ()=>{
return (<ServiceContainer id="services">
    <ServicesH1> Our Services</ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP> We help you increase your fee and reduce your overall revenue</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP> You can access our platform online anywhere in the world</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP> Unlock your membership card that returns 5% cash back</ServicesP>
        </ServicesCard>
    </ServicesWrapper>

</ServiceContainer>)
};
export default Services