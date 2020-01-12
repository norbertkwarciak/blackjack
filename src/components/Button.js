import React from 'react';
import cx    from 'classnames';

import './Button.sass';

export default function Button({text, action, disabled, className}) {
  return (
    <button
      className={cx("Button", className)}
      onClick={action}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
