import * as React from 'react';

export interface Props {
  /**
   * Tag contents
   */
  children: React.ReactNode;
  /**
   *  A Tag can have different appearances
   */
  appearance?: 'primary' | 'outline';
  /**
   * A Tag can have different colors
   */
  color?: 'none' | 'red' | 'blue' | 'yellow';
  /**
   *  An Input can have className atrribute
   */
  className?: string;
}

/**
 * Reusable Button Component
 */
export const Tag: React.FC<Props> = ({
  appearance,
  color,
  className,
  children,
  ...props
}) => {
  const getApperiance =
    (appearance || '').toLocaleLowerCase() === 'outline'
      ? 'atom-tag--outline'
      : 'atom-tag--primary';

  const getColor =
    (color || '').toLocaleLowerCase() === 'red'
      ? 'atom-tag--red'
      : (color || '').toLocaleLowerCase() === 'blue'
      ? 'atom-tag--blue'
      : (color || '').toLocaleLowerCase() === 'yellow'
      ? 'atom-tag--yellow'
      : '';
  return (
    <span
      className={`atom-tag ${className} ${getApperiance} ${getColor}`}
      {...props}
    >
      {children}
    </span>
  );
};

Tag.defaultProps = {
  children: 'Tag',
};

export default Tag;
