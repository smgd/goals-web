import React, { useState } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import Input from '../../Inputs/Input'
import Button from '../../Buttons/Button'
import { ButtonTheme } from '../../../../model/Themes'

const ResetPasswordModal = ({ intl, setModal }) => {
  const [resetEmail, setResetEmail] = useState(null)

  return (
    <>
      <Input
        placeholder={intl.formatMessage({ id: 'ResetPasswordModal.resetEmail' })}
        value={resetEmail}
        onChange={(e) => setResetEmail(e.target.value)}
      />
      <Button
        theme={ButtonTheme.DARK}
        onClick={() => {
          // send email function
          setModal(null)
        }}
      >
        <FormattedMessage id="ResetPasswordModal.send" />
      </Button>
    </>
  )
}

const ResetPasswordModalWithIntl = injectIntl(ResetPasswordModal)

export default ResetPasswordModalWithIntl
