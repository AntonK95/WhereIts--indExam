
import './landingpage.css'


import GreenDot from "../../assets/svg/GreenDot";
import GreenTriangle from "../../assets/svg/GreenTriangle";
import Head from "../../assets/svg/Head";
import OrangeCircle from "../../assets/svg/OrangeCircle";
import PurpleCross from "../../assets/svg/PurpleCross";
import RedSQLine from "../../assets/svg/RedSQLine";
import Shoulders from "../../assets/svg/Shoulders";
import { Link } from 'react-router-dom';
import LandingPageLogo from '../../assets/svg/LandingPageLogo';



function LandingPage() {
  return (
    <Link to={'/eventpage'} className='landing-page__container'>
          <div className="svg__container">
            <LandingPageLogo />
              {/* <OrangeCircle className='item-1'/>
              <GreenDot className='item-2'/>
              <PurpleCross className='item-3'/>
              <RedSQLine className='item-4'/>
              <GreenTriangle className='item-5'/>
              <Head className='head'/>
              <Shoulders className='shoulders'/> */}
          </div>
        <h1 className="landing-page__title">Where it's @!</h1>
        <h2 className='landing-page__h2'>Tap to continue</h2>
    </Link>
  )
}

export default LandingPage;
