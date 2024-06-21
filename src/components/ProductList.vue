
<template>
  <div class="bg-gray-900">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Service</h2>

      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a
          v-for="product in products"
          :key="product.id"
          :href="product.href"
          class="group"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-center text-gray-200">{{ product.name }}</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Commercial",
    href: "#",
    imageSrc: "/src/assets/commercial.jpg",
    imageAlt: "Spot pubblicitari",
  },
  {
    id: 2,
    name: "Cortometraggi",
    href: "#",
    imageSrc: "/src/assets/corto.jpg",
    imageAlt:
      "Siamo in grado di raccontare la tua storia come mai nessuno prima ha fatto.",
  },
  {
    id: 3,
    name: "Contenuti Social",
    href: "#",
    imageSrc: "/src/assets/social.jpg",
    imageAlt: "Contenuti Social",
  },
  {
    id: 4,
    name: "Editing Video",
    href: "#",
    imageSrc: "/src/assets/editing.jpg",
    imageAlt: "Editing Video",
  },
  // More products...
];
</script>
