import React from "react"
import { Link } from "gatsby"

const icons = {
  'facebook': 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z',
  'twitter': 'M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z',
  'google': 'M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM519.6 896c-212.2 0-384-171.8-384-384s171.8-384 384-384c103.6 0 190.4 37.8 257.2 100.4l-104.2 100.4c-28.6-27.4-78.4-59.2-153-59.2-131.2 0-238 108.6-238 242.4s107 242.4 238 242.4c152 0 209-109.2 217.8-165.6h-217.8v-131.6h362.6c3.2 19.2 6 38.4 6 63.6 0.2 219.4-146.8 375.2-368.6 375.2z',
};

const Footer = () => {
  return <>
      <footer className="footer">
        <div className="credits">
          <ul>
            <ul className="footer-links">
              <li className="mr-3"><Link to="/polityka-prywatnosci">Polityka prywatności</Link></li>
              <li className="mr-3">By: <a rel="nofollow noopener" href="https://lumina.studio">lumina.studio</a></li>
            </ul>
            <ul>
              <li className="mr-3"> &copy; {new Date().getFullYear() } Kancelaria Adwokacka Szymon Mikulak</li>
            </ul>
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/Adwokat-Gdynia-Szymon-Mikulak-102108388571840">
                  <svg width="15" height="15" viewBox="0 0 1024 1024">
                    <path d={icons.facebook}/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AdwokatSzymon">
                  <svg width="15" height="15" viewBox="0 0 1024 1024">
                    <path d={icons.twitter}/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://g.page/adwokat-mikulak-gdynia?we">
                  <svg width="15" height="15" viewBox="0 0 1024 1024">
                    <path d={icons.google}/>
                  </svg>
                </a>
              </li>
            </ul>
          </ul>
        </div>

      </footer>
  </>
}

export default Footer
