<template>
  <main>
    <div class="h-screen flex overflow-hidden">
      <div class="h-full flex flex-col justify-end p-10">
        <p class="text-3xl font-semibold uppercase">Administering a mandate</p>
        <h1 class="text-[300px]/70 font-bold text-red">GE<br />2025</h1>
        <p class="text-3xl font-semibold uppercase">
          A Singaporean's researched musings
        </p>
      </div>
      <div class="grow flex flex-col items-end p-10 gap-4">
        <div v-for="link in links">
          {{ link }}
        </div>
        <div class="flex flex-col items-end gap-2">
          <div class="font-semibold">Recent</div>
          <div class="flex flex-col items-end gap-2 pr-4 border-r-4 border-red">
            <NuxtLink
              v-for="post in posts"
              :to="post.path"
              class="hover:underline">
              {{ post.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import type { PostsCollectionItem } from '@nuxt/content'

const links = ['About', 'Posts', 'Other links']

const posts = ref<PostsCollectionItem[]>([])
onMounted(() => {})
posts.value = await queryCollection('posts')
  .order('date', 'DESC')
  .limit(5)
  .all()
</script>
