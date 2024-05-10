
import './landingpage.css'

import { Link } from 'react-router-dom';
import LandingPageLogo from '../../assets/svg/LandingPageLogo';



function LandingPage() {
  return (
    <Link to={'/eventpage'} className='landing-page__container'>
          <div className="svg__container">
            <LandingPageLogo />
          </div>
        <h1 className="landing-page__title">Where it's @!</h1>
        <h2 className='landing-page__h2'>Tap to continue</h2>
    </Link>
  )
}

export default LandingPage;
