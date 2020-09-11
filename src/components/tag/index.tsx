import React from 'react';
import './style.scss';

interface PropTypes {
  color?: string;
  className?: string;
}

const Tag: React.FC<PropTypes> = ({ children, color = 'gray', className }) => (
  <span className={`tag tag--${color} ${className}`}>{children}</span>
);

export default Tag;
