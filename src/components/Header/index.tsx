import './index.css'
import logo from '../../assets/Logo (3).svg'
import profile from '../../assets/Profile.svg'
import profileAspects from '../../assets/profileaspect.svg'
import asosiy from '../../assets/asosiy.svg'
import mijozlarBazasi from '../../assets/mijozlarBazasi.svg'
import trackingLoyiha from '../../assets/trackingLoyiha.svg'
import sharhLoyiha from '../../assets/sharhLoyiha.svg'
import redirectLoyiha from '../../assets/redirect.svg'

const Header = () => {
  return (
      <div className="containerr">
           <div className='header-wrapper'>
          <img src={logo} alt="" />
          <div className='list-wrap'>
              <div className='loyihalar'>
                  <img src={asosiy }  alt="" />
                  <h2>Asosiy</h2>
              </div>
              <div className='loyihalar'>
                  <img src={mijozlarBazasi} alt="" />
                  <h2>Mijozlar bazasi</h2>
              </div>
              <div className='loyihalar'>
                  <img src={trackingLoyiha} alt="" />
                  <h2>Tracking loyihalari</h2>
              </div>
              <div className='loyihalar'>
                  <img src={sharhLoyiha} alt="" />
                  <h2>Sharh olish loyihalari</h2>
               </div>
              <div className='loyihalar'>
                  <img src={redirectLoyiha} alt="" />
                  <h2>Redirect loyihalari</h2>
                </div>
          </div>
          <div className='profileAspects'>
              <img src={profile} alt="" />
              <h3>Austin Robertson</h3>
              <img src={profileAspects} alt="" />
          </div>
    </div>
     </div>
  )
}

export default Header