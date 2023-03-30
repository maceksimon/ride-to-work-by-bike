import enUS from '../../locales/en-US.toml';
import cs from '../../locales/cs-CZ.toml';
import { I18nOptions } from 'vue-i18n';

export default {
  'en-US': enUS,
  'cs-CZ': cs,
};

export const i18nOptions: I18nOptions = {
  locale: 'en-US',
  legacy: false,
  fallbackLocale: 'en-US',
  globalInjection: true,
  messages: {
    'en-US': enUS,
    'cs-CZ': cs,
  },
  datetimeFormats: {
    'en-US': {
      short: {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      },
    },
    'cs-CZ': {
      short: {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      },
    },
  },
};
