import React, { useState } from 'react';
import Input from '../../Inputs/Input';
import Button from '../../Buttons/Button';

const ResetPasswordModal = ({ setModal }) => {
  const [resetEmail, setResetEmail] = useState(null);

  return (
    <>
      <Input
        styles="light"
        type="text"
        placeholder="Reset Email"
        value={resetEmail}
        onChange={(e) => setResetEmail(e.target.value)}
      />
      <Button
        title="Send"
        type="dark"
        onClick={() => {
          // send email function
          setModal(null);
        }}
      />
    </>
  );
};

export default ResetPasswordModal;
