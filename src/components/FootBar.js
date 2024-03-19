import React from 'react'
import './style.css';
import instagram from '../images/instagram.avif';
import facebook from '../images/facebook.avif';
import linkdin from '../images/linkdin.webp';
function FootBar() {
  return (
    <footer>
         <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <h2>Find me</h2>
                    <ul className='ul'>
                        <li className='li'><img className='social-media-frame' src={instagram} alt='Instagram'/></li>
                        <li className='li'><img className='social-media-frame' src={facebook} alt='Facebook'/></li>
                        <li className='li'><a href='https://www.linkedin.com/feed/'><img className='social-media-frame' src={linkdin} alt='Linkdin'/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FootBar