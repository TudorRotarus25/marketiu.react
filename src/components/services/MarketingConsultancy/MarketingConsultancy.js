import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import image1 from '../../../assets/images/servicesContent/Marketing_Strategy_Consulting_in1.png';
import image2 from '../../../assets/images/servicesContent/Marketing_Strategy_in2.png';

const marketingConsultancy = () => (
  <Aux>
    <p>
      In order to make it truly powerful, we have to look at Marketing not only as a process or department within a
      business, but as a “mindset” all through. It’s an essential “piece” from your company’s puzzle, and having each of
      its components optimised perfectly, can be one of the top influencing factors in increasing your bottom line.
    </p>
    <div className="row">
      <div className="column">
        <p>
          With Marketing Channels and Customer Behaviour online constantly changing, the Strategy has to also
          continuously adjust and be optimised for obtaining outstanding results. For this reason, our industry-leading
          and highly passionate Chartered Marketing Strategists are ready to step in and give you all the support needed
          in becoming “famous” in your market. They have worked with brands worldwide, ranging from E-commerce & Luxury
          Products to Music, Entertainment, Communications, FMCG and even Financial Services!
        </p>
      </div>
      <div className="column">
        <img src={image1} alt=""/>
      </div>
    </div>
    <p>
      Not entirely sure how you want to go about your branding, market positioning, integrated marketing strategy or
      growing your online presence?
    </p>
    <p>
      Get in touch for a free audit and let's work
      together towards turning you into an online "rockstar"!
    </p>
  </Aux>
);

export default marketingConsultancy;
