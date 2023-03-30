import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';

export default ({ app, router }) => {
  let newLocale = null;
  let locale = null;

  router.beforeEach((to, from) => {
    newLocale = to.query.lang;

    if (newLocale === 'en') {
      locale = 'en-US';
    }
    if (newLocale === 'cs') {
      locale = 'cs-CZ';
    }

    if (!app.__VUE_I18N__) {
      // Create I18n instance
      const i18n = createI18n({
        locale: locale ? locale : 'en-US',
        legacy: false,
        fallbackLocale: 'en-US',
        globalInjection: true,
        messages,
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
      });

      // Tell app to use the I18n instance
      app.use(i18n);
    }
  });
};
