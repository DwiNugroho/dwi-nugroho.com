import * as React from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   *  Spans the full width of the Button parent
   */
  block?: boolean;
  /**
   * A button can have different sizes
   */
  size?: 'small' | 'medium' | 'large';
  /**
   *  A button can have different appearances
   */
  appearance?: 'primary' | 'outline';
  /**
   * A button can have different colors
   */
  color?: 'none' | 'red' | 'blue' | 'yellow';
  /**
   * A button can show it is currently unable to be interacted with
   */
  disabled?: boolean;
  /**
   *  A button can have className atrribute
   */
  className?: string;
}

/**
 * Reusable Button Component
 */
export const Button: React.FC<Props> = ({
  children,
  onClick,
  size,
  appearance,
  color,
  disabled,
  block,
  className,
  ...props
}) => {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 400);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  const getSize =
    (size || '').toLocaleLowerCase() === 'large'
      ? 'atom-button--large'
      : (size || '').toLocaleLowerCase() === 'small'
      ? 'atom-button--small'
      : 'atom-button--medium';

  const getApperiance =
    (appearance || '').toLocaleLowerCase() === 'outline'
      ? 'atom-button--outline'
      : 'atom-button--primary';

  const getColor =
    (color || '').toLocaleLowerCase() === 'red'
      ? 'atom-button--red'
      : (color || '').toLocaleLowerCase() === 'blue'
      ? 'atom-button--blue'
      : (color || '').toLocaleLowerCase() === 'yellow'
      ? 'atom-button--yellow'
      : '';

  const isBlock = block ? 'width--100' : '';

  return (
    <button
      type="button"
      className={`atom-button ${getSize} ${getApperiance} ${getColor} ${isBlock} ${className}`}
      onClick={(e) => {
        const rect = (e.target as any).getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick();
      }}
      disabled={disabled}
      {...props}
    >
      {isRippling ? (
        <span
          className="atom-button__ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ''
      )}
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Button',
  onClick: undefined,
  size: 'medium',
  appearance: 'primary',
  color: 'none',
};

export default Button;
