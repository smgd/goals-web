import React from 'react'
import { IntlProvider } from 'react-intl'
import { Language } from '../../../model/Language'

const messagesEn = require('../../../translations/en.json')
const messagesRu = require('../../../translations/ru.json')

//TODO: lazy load locales
const messages = {
  [Language.EN]: messagesEn,
  [Language.RU]: messagesRu,
}

const detectLanguage = () => {
  let currentLocale = Language.EN
  if (window.navigator.language.startsWith('ru')) {
    currentLocale = Language.RU
  }
  return currentLocale
}

const LocalizationProvider = ({ children }) => {
  const currentLocale = detectLanguage()
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
