import React from 'react'
import { IntlProvider } from 'react-intl'
import { Language } from '../../../model/Language'

const messagesEn = require('../../../translations/en.json')

//TODO: lazy load locales
const messages = {
  [Language.EN]: messagesEn,
}

console.log(messages)

const LocalizationProvider = ({ children }) => {
  const currentLocale = Language.EN
  return (
    <IntlProvider
      locale={currentLocale}
      messages={messages[currentLocale]}
    >
      {children}
    </IntlProvider>
  )
}

export default LocalizationProvider
