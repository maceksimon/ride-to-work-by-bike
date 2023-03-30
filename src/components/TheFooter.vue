<template>
  <q-footer>
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer-title">
          <h2 class="text-h4 text-bold font-lexend q-ma-none">
            {{ $t('footer.title') }}
          </h2>
        </div>
        <div class="footer__icons">
          <q-btn
            to="https://www.facebook.com/spolekautomat/"
            icon="bi-facebook"
            unelevated
            round
            outline
            color="white"
            text-color="black"
            :stretch="false"
          >
          </q-btn>
          <q-btn
            to="https://www.instagram.com/spolekautomat/"
            icon="bi-instagram"
            unelevated
            round
            outline
            color="white"
            text-color="black"
            :stretch="false"
          >
          </q-btn>
          <q-btn
            to="https://twitter.com/spolekautomat"
            icon="bi-twitter"
            unelevated
            round
            outline
            color="white"
            text-color="black"
            :stretch="false"
          >
          </q-btn>
          <q-btn
            to="https://www.youtube.com/@spolekautomat"
            icon="bi-youtube"
            unelevated
            round
            outline
            color="white"
            text-color="black"
            :stretch="false"
          >
          </q-btn>
        </div>
      </div>
    </div>
  </q-footer>
</template>
