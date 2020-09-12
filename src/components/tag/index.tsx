import React from 'react';
import './style.scss';

interface PropTypes {
  color?: string;
  className?: string;
}

const Tag: React.FC<PropTypes> = ({ children, color = 'gray', className }) => (
  <span className={`dn-tag dn-tag--${color} ${className}`}>{children}</span>
);

export default Tag;
