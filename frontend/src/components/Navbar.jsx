import React, { useState } from 'react'

const Navbar = ({conatainerStyles, header, menuOpened}) => {

  const [isActive, setIsActive] = useState("home");
  return (
    <div className={conatainerStyles}>
      {['home', 'menu', 'foods', 'contact'].map((link) => (
        <a href={`#${link}`} key={link} onClick={()=> setIsActive(link)}
        className={header || menuOpened ?
          isActive === link ? "text-secondary" : "text-tertiary"
          : isActive === link ? "text-tertiary" : "text-white"
         }
        >
          <div>
              {link.charAt(0).toUpperCase()+link.slice(1)}
          </div>
        </a>
      ))}
    </div>
  )
}

export default Navbar
