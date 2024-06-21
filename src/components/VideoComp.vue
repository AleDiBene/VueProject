<script lang="ts"></script>

<template>
  <section >
    <video autoplay muted loop playsinline>
      <source src="/src/assets/video.mp4" type="video/mp4" />
      Il tuo browser non supporta il tag video.
    </video>
    <button
      class="bg-transparent hover:bg-gray-100 text-gray-200 font-semibold hover:text-red-600 py-2 px-4 border border-gray-200 hover:border-transparent rounded btn-custom"
    >
      <a href="https://www.youtube.com/watch?v=cXlfcAbA0B8"> scopri di più </a>
    </button>
  </section>
</template>

<style>
section {
  width: 100%;
  height: 500px;
  position: relative;
}
video {
  width: 100%;
  height: auto;
  position: absolute; /* posizionamento assoluto per il video */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: -1;
  filter: brightness(0.3);
}

.btn-custom {
  position: relative;
  top: 350px;
  left: 45%;
}
</style>
