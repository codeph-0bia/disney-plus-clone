import logo from '../assets/Images/logo.png';
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';

import HeaderItem from './HeaderItem';
import { useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      key: 1,
      name: 'HOME',
      component: HiHome,
    },
    {
      key: 2,
      name: 'SEARCH',
      component: HiMagnifyingGlass,
    },
    {
      key: 3,
      name: 'WATCH LIST',
      component: HiPlus,
    },
    {
      key: 4,
      name: 'ORIGINALS',
      component: HiStar,
    },
    {
      key: 5,
      name: 'MOVIES',
      component: HiPlayCircle,
    },
    {
      key: 6,
      name: 'SERIES',
      component: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-betweeb p-5">
      <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
      <div className="hidden md:flex gap-8">
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.component} key={item.key} />
        ))}
      </div>
      <div className="flex md:hidden gap-5">
        {menu.map(
          (item, index) =>
            index < 3 && (
              <HeaderItem name={''} Icon={item.component} key={item.key} />
            )
        )}

        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical} />
          {toggle && (
            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-7000 p-3 px-5 py-4">
              {menu.map(
                (item, index) =>
                  index > 2 && (
                    <HeaderItem
                      name={item.name}
                      Icon={item.component}
                      key={item.key}
                    />
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
