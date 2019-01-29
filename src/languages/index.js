// @flow
import RNLanguages from 'react-native-languages';
import i18n from './i18n';

export const onLanguageChange = ({ language }: { language: string }) => {
  i18n.locale = language;
};

export const startListener = (): void => RNLanguages.addEventListener('change', onLanguageChange);

export const stopListener = (): void => RNLanguages.removeEventListener('change', onLanguageChange);

export default i18n;
