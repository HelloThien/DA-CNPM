import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as MdIcons from 'react-icons/md';




export const SidebarData = [
  {
    title: 'Trang chủ',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Menu',
    path: '/ordering',
    icon: <CgIcons.CgMenuBoxed />,
    cName: 'nav-text'
  },
  {
    title: 'Thức uống',
    path: '/food-menu',
    icon: <MdIcons.MdLocalDrink />,
    cName: 'nav-text'
  },
  {
    title: 'Bánh ngọt',
    path: '/drink-menu',
    icon: <MdIcons.MdOutlineBakeryDining />,
    cName: 'nav-text'
  },
  {
    title: 'Tìm kiếm',
    path: '/search-item',
    icon: <AiIcons.AiOutlineSearch />,
    cName: 'nav-text'
  },
];