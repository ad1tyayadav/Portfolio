import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

function Link({ href, children, className = '', ...props }) {
  return (
    <RouterLink
      to={href} // Use 'to' instead of 'href'
      className={`text-gray-300 hover:text-white transition-colors ${className}`}
      {...props}
    >
      {children}
    </RouterLink>
  );
}

export default Link;
