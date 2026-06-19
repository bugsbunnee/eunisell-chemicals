import React from 'react';

import { Button } from '../ui/button';
import { navigation } from '../../lib/router';
import { Link } from 'react-router-dom';
import { paths } from '../../lib/data';

const NavBar: React.FC = () => {
  return (
    <nav className="w-screen h-18 bg-background flex items-center justify-between px-8 border-b border-border">
      <Button className="rounded-xs bg-secondary font-semibold text-xs py-3 px-5">Request Technical Documentation</Button>

      <ul className="flex flex-1 items-center justify-center text-sm font-medium text-primary tracking-[0.88%] gap-x-6">
        {navigation.map((path) => (
          <li key={path.value} className="">
            <Link to={path.value}>{path.label}</Link>
          </li>
        ))}
      </ul>

      <Link to={paths.home}>
        <img src="/logo.svg" alt="Eunisell" className="w-[131px] h-14 object-contain" />
      </Link>
    </nav>
  );
};

export default NavBar;
