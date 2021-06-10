import * as React from 'react';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   *  Spans the full width of the Input parent
   */
  block?: boolean;
  /**
   * An Input can have different sizes
   */
  // size?: 'small' | 'medium' | 'large';
  /**
   * An Input can show it is currently unable to be interacted with
   */
  disabled?: boolean;
  /**
   * An Input can have placeholder
   */
  placeholder?: string;
  /**
   * An Input can have error attribute
   */
  error?: boolean;
  /**
   * An Input can have required attribute
   */
  required?: boolean;

  /**
   * An Input can have required attribute
   */
  type?: string;
  /**
   *  An Input can have className atrribute
   */
  className?: string;
}

/**
 * Reusable Input Component
 */
export const Input: React.FC<Props> = ({
  block,
  error,
  className,
  disabled,
  ...props
}) => {
  const isBlock = block ? 'width--100' : '';
  const isError = error ? 'atom-input--error' : '';
  return (
    <input
      className={`atom-input ${isError} ${isBlock} ${className}`}
      disabled={disabled}
      {...props}
    />
  );
};

Input.defaultProps = {
  // disabled: false,
  placeholder: 'Input some text here..',
  type: 'text',
};

export default Input;
