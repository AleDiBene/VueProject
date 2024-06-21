<template>
  <NavBar />
  <div class="container mx-auto p-4">
    <!-- Titolo -->
    <h1 class="text-3xl font-bold mb-4">Chi sono?</h1>

    <!-- Immagine rotonda -->
    <img
      src="/Users/alessandrodibenedetto/Desktop/SJ/Vue/examFinal/src/assets/pic.png"
      alt="Immagine Profilo"
      class="rounded-full h-40 w-40 mx-auto mb-4"
    />

    <!-- Descrizione -->
    <div class="text-center mb-8">
      <p class="text-lg bg-gray-200 rounded-lg p-4">{{ description }}</p>
    </div>

    <!-- Sezione Video -->
    <div>
      <h2 class="text-2xl font-bold mb-4">Ultimi Videoclip</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Card 1 -->
        <div class="border border-gray-300 rounded p-4">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/LkXcbJQ7wsI?si=mj50inKyeSSDkRH1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3 class="text-xl font-bold mt-2">Iron - Ali di plastica</h3>
          <p class="mt-2">{{ descriptionRap }}<</p>
        </div>

        <!-- Card 2 -->
        <div class="border border-gray-300 rounded p-4">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/94fkRyGZvXQ?si=ukFNnuWTcsUm1FiV"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3 class="text-xl font-bold mt-2">Soul - No Stress </h3>
          <p class="mt-2">{{ descriptionRap }}<</p>
        </div>

        <!-- Card 3 -->
        <div class="border border-gray-300 rounded p-4">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/hJuca4-QGns?si=fsR3fQO1qpB6MkL_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3 class="text-xl font-bold mt-2">Soul - Sex and Weed</h3>
          <p class="mt-2">{{ descriptionRap }}</p>
        </div>
      </div>
    </div>
  </div>


  
  <FooterComp />
</template>

<script setup>
import NavBar from "/Users/alessandrodibenedetto/Desktop/SJ/Vue/examFinal/src/components/NavBar.vue";
import FooterComp from "/Users/alessandrodibenedetto/Desktop/SJ/Vue/examFinal/src/components/FooterComp.vue";
import { ref } from "vue";

const description = ref(
  "Benvenuti nel mondo dei video con Adibe Production! Sono appassionato di dare vita alle vostre storie attraverso immagini in movimento e sono qui per trasformare ogni momento in un'esperienza indimenticabile. Con una vasta esperienza nell'industria cinematografica e degli eventi, mi specializzo nel catturare momenti unici e trasformarli in opere d'arte visive. Che si tratti di documentare eventi speciali come matrimoni, feste o conferenze, o di creare contenuti coinvolgenti per piattaforme social come Instagram, Facebook e YouTube, sono qui per darti il massimo impatto visivo. La mia passione per il cinema e la narrazione visiva si riflette nel mio lavoro. Ogni progetto è un'opportunità per creare qualcosa di autentico e significativo, che possa connettersi emotivamente con il pubblico e lasciare un'impronta duratura. Con competenze tecniche avanzate e una creatività senza limiti, posso gestire l'intero processo di produzione video, dalla pianificazione e ripresa al montaggio e alla post-produzione. Sia che tu stia cercando di catturare un momento speciale, promuovere il tuo marchio o realizzare un cortometraggio, sono qui per trasformare la tua visione in realtà. Oltre alla mia esperienza nel mondo degli eventi e dei contenuti social, ho anche collaborato con produzioni cinematografiche e televisive, portando un'ampia prospettiva e una vasta gamma di competenze a ogni progetto. Sia che tu stia pianificando un evento importante, stia cercando di promuovere il tuo brand o desideri creare contenuti coinvolgenti per le tue piattaforme social, sono qui per aiutarti a raggiungere i tuoi obiettivi di comunicazione visiva. Contattami oggi stesso per dare vita alla tua visione attraverso il potere dei video!"
);
const descriptionRap = ref(
  "Esplora l'universo avvincente della musica trap con il nostro ultimo videoclip. Immagini mozzafiato si fondono con il ritmo pulsante della musica trap, trasportandoti in un viaggio emozionante e coinvolgente. Con scene dinamiche e una cinematografia accattivante, questo videoclip cattura l'essenza dell'energia e dello spirito ribelle della trap. Preparati a essere travolto da una combinazione esplosiva di suoni moderni e visivi mozzafiato, che ti faranno vivere un'esperienza unica nel suo genere."
);

</script>

<style scoped>
/* Stili specifici per questa pagina, se necessario */
</style>
