<template>
  <Navbar />
  <div class="max-w-prose mx-auto leading-8 mt-24 mb-48">
    <ContentRenderer :value="post" class="space-y-4 font-serif" />
  </div>
</template>
<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`posts-${slug}`, () => {
  return queryCollection('posts').path(`/posts/${slug}`).first()
})

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
})
</script>
