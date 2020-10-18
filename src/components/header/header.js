import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        {/*<Title as="h1">{title}</Title>*/}
        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="100" viewBox="0 0 512 791">
          <path fill="#fff" d="M0.996046033,484.384778 L0.996725444,484.235631 C0.996543872,484.260581 0.996364278,484.285529 0.996186662,484.310476 C0.996138333,484.335232 0.996091447,484.360005 0.996046033,484.384778 Z M76.7915575,219.002056 C118.381841,157.638319 174.787663,109.505905 242.091989,73.0448502 C294.059963,44.8920222 349.497499,25.2476183 404.90616,12.5351762 C424.302693,8.08501802 442.346327,4.81219336 458.601884,2.53314802 C464.350367,1.72720493 469.485046,1.10211068 473.951347,0.635341267 C475.55072,0.468192092 476.962192,0.332242582 478.178928,0.22469493 C478.960102,0.15564672 479.53268,0.109431314 479.889822,0.0832603766 C494.979755,-1.02251182 508.108967,10.3138899 509.21474,25.4038223 C510.320512,40.4937547 498.98411,53.6229674 483.894178,54.7287396 C483.808448,54.7350218 483.509121,54.7591818 483.003199,54.8039005 C482.074773,54.8859642 480.95357,54.9939558 479.646595,55.1305467 C475.809045,55.5316058 471.311256,56.0791653 466.209374,56.7944544 C451.463885,58.8617866 434.963498,61.854691 417.158777,65.9396388 C366.278141,77.6132137 315.42638,95.6326384 268.19101,121.221653 C208.191368,153.725511 158.466054,196.15729 122.147567,249.742838 C79.2242132,313.073433 55.9600271,390.61923 55.787954,484.485222 L55.7872746,484.634369 C55.1233552,575.863451 83.9879136,641.844164 135.484796,684.262395 C178.703071,719.861497 237.260378,737.482284 295.469743,735.787603 C295.892951,735.775282 296.316388,735.772773 296.739712,735.780079 C347.47186,736.655582 389.121181,720.124699 418.166261,690.594274 C444.490544,663.83011 458.742764,627.699332 457.862158,591.650727 C456.5988,561.44256 444.677399,536.616914 425.399032,519.102976 C409.194456,504.381504 389.2678,496.639441 374.936847,497.71428 C342.625871,500.137485 325.426541,519.959317 329.654596,546.28217 C330.200058,549.679613 332.25394,553.14876 335.623628,556.22749 C335.11735,554.145285 334.849,551.96998 334.849,549.732 C334.849,534.601607 347.114607,522.336 362.245,522.336 C386.934396,522.336 401.910082,536.539875 405.301459,562.017093 C405.578694,564.099777 405.615423,566.207441 405.410922,568.298521 C403.610897,586.704281 394.208144,601.084319 379.121736,609.108579 C368.611403,614.698886 357.174217,616.57101 343.624376,616.465151 C330.256396,616.359934 315.203667,610.108428 302.871705,600.269382 C288.614992,588.894676 278.496709,573.287935 275.55571,554.969738 C266.04516,495.759345 307.646332,447.814952 370.839023,443.07573 C401.013303,440.812624 435.420747,454.180878 462.242468,478.547774 C492.281796,505.837789 510.799029,544.474814 512.617815,589.641708 C512.62307,589.772205 512.627392,589.902737 512.63078,590.033296 C513.953358,640.998475 494.034628,691.595824 457.229739,729.015726 C417.635409,769.271681 361.705191,791.550321 296.43164,790.574187 C225.827015,792.489561 154.557996,770.9597 100.648704,726.554355 C36.0174769,673.317301 0.232744815,591.539932 0.996186662,484.310476 C1.20043284,379.686713 27.6702291,291.477356 76.7915575,219.002056 Z" transform="translate(-1)"/>
        </svg>
      </Link>
      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
