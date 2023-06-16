import React from 'react'
import './navbar.css';
import { syllabus } from '../../assets/courses';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { BsCaretDownFill } from 'react-icons/bs'
import {AiOutlineCheck} from 'react-icons/ai';
import {RiComputerFill} from 'react-icons/ri';
import {HiLightBulb} from 'react-icons/hi'
const Navbar = () => {
  return (
    <div className='M6yXdA hkW4sQ'>
      <div className='_2pukyg'>
        <div className='Ft_8Cg a6f7yQ N6xJaA e2L4zw'></div>
        <div className='IMy50w a6f7yQ'>
          <div className='theme dark'>
            <header className='header-container'>
              <div className='brand'>
                <div className='brand-logo'>
                  <img src={syllabus} width={60} alt='brand' />
                </div>
                <div className='brand-text-wrapper'>
                  <h2 className='brand-text'>YourSyllabi</h2>
                </div>
              </div>
              <nav >
                <ul className='nav-list'>
                  <li className='nav-item'>

                    <a className='nav-link'>Home</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>About</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>contact</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>some link</a>
                  </li>
                </ul>
              </nav>
              <div className='nav-auth'>
                <div className='auth-btn sign'>
                  <button>Signup</button>
                </div>
                <div className='auth-btn sign'>
                  <button>Sign</button>
                </div>
              </div>
              {/* <div>
                <div><p>name</p></div>
              </div> */}
              <div className='theme-selector-wrapper'>
                <button className='theme-select-btn'>
                  <div className='theme-select'>
                    <MdDarkMode style={{ width: '24px', height: '24px' }} />
                    <BsCaretDownFill style={{ width: '16px', height: '16px' }} />
                  </div>

                </button>
                <ul className='theme-submenu'>
                  <li className='submenu-item'>
                    <button className='theme-submenu-btn'>
                      <MdDarkMode style={{ width: '16px', height: '16px' }} />
                      <span>dark</span>

                      <AiOutlineCheck style={{ width: '16px', height: '16px',color:'green' }} />

                    </button>
                  </li>
                  <li className='submenu-item'>
                    <button className='theme-submenu-btn'>
                      <HiLightBulb style={{ width: '16px', height: '16px',color:'white' }} />
                      <span>light</span>


                    </button>
                  </li>
                  <li className='submenu-item'>
                    <button className='theme-submenu-btn'>
                      <RiComputerFill style={{ width: '16px', height: '16px',color:'white'}} />
                      <span>system</span>


                    </button>
                  </li>
                </ul>

              </div>
              <div>
                <select className='language'>
                  <option value='english'> english</option>
                  <option value='hindi'> hindi</option>
                  <option value='urdu'> urdu</option>
                  <option value='arabic'> arabic</option>
                </select>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar