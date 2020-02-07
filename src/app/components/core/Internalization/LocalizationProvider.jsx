import { IntlProvider, addLocaleData } from 'react-intl'
import localeDataEn from 'react-intl/locale-data/en'
import { Language } from '../../../model/Language'

addLocaleData(localeDataEn)

const messagesEn = require('../../../translations/en.json')

//TODO: lazy load locales
const messages = {
  [Language.EN]: messagesEn,
}

const LocalizationProvider = ({ children }) => {
  const currentLocale = Language.EN
  return (
    <IntlProvider
      textComponent={React.Fragment}
      locale={currentLocale}
      messages={messages[currentLocale]}
    >
      {children}
    </IntlProvider>
  )
}

export default LocalizationProvider
