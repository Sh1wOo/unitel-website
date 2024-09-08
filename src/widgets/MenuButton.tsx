import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { navLists } from '../shared/constants/index';
import gsap from 'gsap';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    gsap.set([line1Ref.current, line2Ref.current], { transformOrigin: '50% 50%' });
    gsap.set(menuRef.current, { yPercent: -100 });
    gsap.set(menuItemsRef.current, { opacity: 0, y: -20 });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const buttonTimeline = gsap.timeline({ defaults: { duration: 0.16, ease: 'power2.inOut' } });
    const menuTimeline = gsap.timeline({ defaults: { duration: 0.35, ease: 'power2.inOut' } });
    const textTimeline = gsap.timeline({ defaults: { duration: 0.2, ease: 'power2.inOut' } });

    if (!isOpen) {
      buttonTimeline
        .to(line1Ref.current, { y: 5, rotate: -45 }, 0)
        .to(line2Ref.current, { y: -5, rotate: 45 }, 0);
      menuTimeline.to(menuRef.current, { yPercent: 0 }, 0);
      textTimeline.to(menuItemsRef.current, { opacity: 1, y: 0, stagger: 0.1 }, 0.2);
    } else {

      textTimeline.to(menuItemsRef.current, { opacity: 0, y: -20, stagger: 0.05 }, 0);
      buttonTimeline
        .to(line1Ref.current, { y: 0, rotate: 0 }, 0.2)
        .to(line2Ref.current, { y: 0, rotate: 0 }, 0.2);
      menuTimeline.to(menuRef.current, { yPercent: -100 }, 0.2);
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="sm:hidden w-8 h-8 flex flex-col justify-center items-center focus:outline-none z-50 relative"
      >
        <span
          ref={line1Ref}
          className="w-5 h-[0.10625rem] bg-white mb-2 transform transition-transform duration-300"
        ></span>
        <span
          ref={line2Ref}
          className="w-5 h-[0.10625rem] bg-white transform transition-transform duration-300"
        ></span>
      </button>
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-full bg-black text-white z-40 flex flex-col justify-center items-center"
      >
        <nav>
          <ul className="text-4xl text-center">
            {navLists.map((item, index) => (
              <li key={index} className="mb-8">
                <a
                  href="#"
                  className="hover:text-gray-200 font-semibold transition-colors"
                  ref={el => menuItemsRef.current[index] = el}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MenuButton;