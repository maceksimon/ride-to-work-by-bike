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
            href="https://www.facebook.com/spolekautomat/"
            target="_blank"
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
            href="https://www.instagram.com/spolekautomat/"
            target="_blank"
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
            href="https://twitter.com/spolekautomat"
            target="_blank"
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
            href="https://www.youtube.com/@spolekautomat"
            target="_blank"
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
