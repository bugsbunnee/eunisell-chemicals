import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb';
import { cn } from '../../lib/utils';

interface Crumb {
  path: string;
  label: string;
}

interface Props {
  crumbs: Crumb[];
}

const BreadCrumbNavigation: React.FC<Props> = ({ crumbs }) => {
  const location = useLocation();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb, index) => (
          <React.Fragment key={crumb.label}>
            <BreadcrumbItem
              className={cn({
                'text-xs': true,
                'text-primary-foreground/60': location.pathname !== crumb.path,
                'text-primary-foreground': location.pathname === crumb.path,
              })}
            >
              <BreadcrumbLink asChild>
                <Link to={crumb.path}>{crumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <React.Activity mode={index === crumbs.length - 1 ? 'hidden' : 'visible'}>
              <BreadcrumbSeparator />
            </React.Activity>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbNavigation;
