import { appleImg, bagImg } from "../shared/utils/index";
import { navLists } from "../shared/constants";
import MenuButton from "./MenuButton";


const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 w-full py-3 sm:px-10 md:backdrop-blur-sm px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="unitel" width={50} height={28} />

        <div className="flex flex-1 justify-center items-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-center md:gap-7 gap-4 max-sm:justify-end max-sm:flex-1">
          {/* <img src={searchImg} alt="search" width={18} height={18} /> */}
          <img src={bagImg} alt="bag" width={18} height={18} />
          <MenuButton/>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
