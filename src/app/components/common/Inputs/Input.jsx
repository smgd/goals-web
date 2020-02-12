import React from 'react'
import { injectIntl } from 'react-intl'
import InputWrapper from './Input.styles'
import { InputTheme } from '../../../model/Themes'

const themes = {
  [InputTheme.LIGHT]: {
    border: '#F3F3F3',
    background: '#F3F3F3',
  },
  [InputTheme.LIGHT_WITH_BORDER]: {
    border: '#FEBD81',
    background: '#F3F3F3',
  },
}

const Input = ({
  intl, placeholder, placeholderId, theme, ...etc
}) => {
  const placeholderText = placeholderId
    ? intl.formatMessage({ id: placeholderId })
    : placeholder
  return (
    <InputWrapper
      placeholder={placeholderText}
      theme={themes[theme]}
      {...etc}
    />
  )
}

Input.defaultProps = {
  theme: InputTheme.LIGHT,
  type: 'text',
}

const InputWithIntl = injectIntl(Input)

export default InputWithIntl
