import React  from 'react';
import Button from 'components/Button/Button';

import './Confirm.sass';

export default function Confirm({question, action, close}) {
  return (
    <div className="Confirm">
      <p>{question}</p>
      <div className="Confirm__btns">
        <Button
          action={action}
          text="Yes"
        />
        <Button
          action={close}
          text="No"
        />
      </div>
    </div>
  )
}
