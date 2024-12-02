import React from 'react'
import linkedin from '../../assets/l.png'
import instagram from '../../assets/i.png'
import x from '../../assets/x.png'
import facebook from '../../assets/f.png'
import youtube from '../../assets/y.png'


const Calfooter = () => {
  return (
    <div>
      <footer className="bg-[#4A1A1A] text-white">
      <div className="h-2 bg-[#EADBC8]"></div>
      <div className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-4">
        <p className="flex space-x-8 text-sm md:text-base">© Alwafa Takaful</p>
       
        <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
        <a href="#" className="hover:underline">
                  <img
                    src={facebook}
                    alt="facebook"
                    className="w-5"
                  />
                </a>
                <a href="#" className="hover:underline">
                  <img
                    src={youtube}
                    alt="Youtube"
                    className="w-5"
                  />
                </a>
                <a href="#" className="hover:underline">
                  <img
                    src={x}
                    alt="Twitter"
                    className="w-5"
                  />
                </a>
                <a href="#" className="hover:underline">
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="w-5"
                  />
                </a>
                <a href="#" className="hover:underline">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-5"
                  />
                </a>
              </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Calfooter
