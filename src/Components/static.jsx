import React from 'react';

import logo from '../Images/logo.png';
import main from '../Images/main.png';
import banner from '../Images/Sponsors/bannerSponsor.png';
import sponsor1 from '../Images/Sponsors/sponsor1.png';
import sponsor2 from '../Images/Sponsors/sponsor2.png';
import sponsor3 from '../Images/Sponsors/sponsor3.png';
import sponsor4 from '../Images/Sponsors/sponsor4.png';
import sponsor5 from '../Images/Sponsors/sponsor5.png';
import sponsor6 from '../Images/Sponsors/sponsor6.png';

export { ReactComponent as SvgBottom } from '../Images/svgBottom.svg';
export { ReactComponent as SvgRight } from '../Images/svgRight.svg';
export { ReactComponent as SvgTop } from '../Images/svgTop.svg';
export { ReactComponent as Astro } from '../Images/astro.svg';
export { ReactComponent as Radio } from '../Images/radio.svg';
export { ReactComponent as RetroRadio } from '../Images/retroRadio.svg';
export { ReactComponent as GoldBird } from '../Images/goldBird.svg';
export { ReactComponent as GoldBirdSmall } from '../Images/goldBirdSmall.svg';
export { ReactComponent as Facebook } from '../Images/facebook.svg';
export { ReactComponent as Insta } from '../Images/insta.svg';
export { ReactComponent as Twitter } from '../Images/twitter.svg';
export { ReactComponent as LinkedIn } from '../Images/linkedin.svg';
export { ReactComponent as ArrowUp } from '../Images/arrowUp.svg';
export { ReactComponent as ArrowDown } from '../Images/arrowDown.svg';
export { ReactComponent as RetroTV } from '../Images/retroTV.svg';
export { ReactComponent as ArrowLeft } from '../Images/arrowLeft.svg';
export { ReactComponent as ArrowRight } from '../Images/arrowRight.svg';
export { ReactComponent as GalleryHand } from '../Images/galleryHand.svg';
export { ReactComponent as FormLeft } from '../Images/formLeft.svg';
export { ReactComponent as Creatives } from '../Images/creatives.svg';
export { ReactComponent as Sponsorship } from '../Images/sponsorship.svg';
export { ReactComponent as Competitions } from '../Images/competitions.svg';
export { ReactComponent as PR } from '../Images/pr.svg';
export { ReactComponent as Website } from '../Images/website.svg';
export { ReactComponent as Contact } from '../Images/contact.svg';
export { ReactComponent as Solution } from '../Images/solution.svg';
export { ReactComponent as Image_Gallery } from '../Images/image-gallery.svg';
export { ReactComponent as Trophy } from '../Images/trophy.svg';
export { ReactComponent as Home } from '../Images/home.svg';
export { ReactComponent as CatBg } from '../Images/CTA-bg.svg';
export { ReactComponent as CatNav } from '../Images/CAT-nav.svg';

export function Logo(props) {
  return <img src={logo} alt="Logo" className={props.className ? props.className : null} />;
}

export function Sponsor(props) {
  return <img src={main} alt="Sponsor Pic" className={props.className ? props.className : null} />;
}

export function Banner(props) {
  return <img src={banner} alt="Banner Pic" className={props.className ? props.className : null} />;
}

export function Sponsor1(props) {
  return <img src={sponsor1} alt="Sponsor" className={props.className ? props.className : null} />;
}

export function Sponsor2(props) {
  return <img src={sponsor2} alt="Sponsor" className={props.className ? props.className : null} />;
}

export function Sponsor3(props) {
  return <img src={sponsor3} alt="Sponsor" className={props.className ? props.className : null} />;
}

export function Sponsor4(props) {
  return <img src={sponsor4} alt="Sponsor" className={props.className ? props.className : null} />;
}

export function Sponsor5(props) {
  return <img src={sponsor5} alt="Sponsor" className={props.className ? props.className : null} />;
}

export function Sponsor6(props) {
  return <img src={sponsor6} alt="Sponsor" className={props.className ? props.className : null} />;
}
