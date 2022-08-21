<template>
  <blockquote class="relative p-4 text-xl italic border-l-4 md:border-none">
    <div class="quote-mark text-gray-400" aria-hidden="true">&ldquo;</div>
    <p class="mb-4">{{ quote }}</p>
    <cite class="flex items-center">
      <a
        :href="linkUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm"
      >
        <img class="w-12 mr-4 rounded-full" :alt="avatarAlt" :src="avatarSrc" />
      </a>
      <div class="flex flex-col items-start">
        <span class="mb-1 text-sm italic font-bold">{{ name }}</span>
        <a
          :href="linkUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm"
        >
          {{ company }}
        </a>
      </div>
    </cite>
  </blockquote>
</template>

<script>
export default {
  props: {
    avatarAlt: String,
    avatarSrc: String,
    company: String,
    linkUrl: String,
    name: String,
    quote: String,
  },
};
</script>

<style lang="postcss">
.quote-mark {
  font-size: 5rem;
  right: 100%;
  @apply mr-4 hidden absolute top-0 leading-none;
}

@screen md {
  .quote-mark {
    @apply block;
  }
}
</style>
