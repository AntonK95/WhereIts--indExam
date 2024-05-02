
import './landingpage.css'


import GreenDot from "../../assets/svg/GreenDot";
import GreenTriangle from "../../assets/svg/GreenTriangle";
import Head from "../../assets/svg/Head";
import OrangeCircle from "../../assets/svg/OrangeCircle";
import PurpleCross from "../../assets/svg/PurpleCross";
import RedSQLine from "../../assets/svg/RedSQLine";
import Shoulders from "../../assets/svg/Shoulders";



function LandingPage() {
  return (
    <div className='landing-page__container'>
        <div className="svg__container">
            <OrangeCircle />
            <GreenDot />
            <PurpleCross />
            <RedSQLine />
            <GreenTriangle />
            <Head />
            <Shoulders />
        </div>
        <h1 className="landingpage-title">Where it's @!</h1>
    </div>
  )
}

export default LandingPage;
