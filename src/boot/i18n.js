import { createI18n } from 'vue-i18n';
import { i18nOptions } from 'src/i18n';

export default ({ app, router }) => {
  let newLocale = null;

  router.beforeEach((to) => {
    newLocale = to.query.lang;

    if (newLocale === 'en') {
      i18nOptions.locale = 'en-US';
    }
    if (newLocale === 'cs') {
      i18nOptions.locale = 'cs-CZ';
    }

    if (!app.__VUE_I18N__) {
      // Create I18n instance
      const i18n = createI18n(i18nOptions);

      // Tell app to use the I18n instance
      app.use(i18n);
    }
  });
};
