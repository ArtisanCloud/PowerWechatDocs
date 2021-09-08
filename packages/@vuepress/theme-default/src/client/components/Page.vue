<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <h1>{{ pageData.title }}</h1>
      <Content />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />
  </main>
</template>

<script setup lang="ts">
import { usePageData } from '@vuepress/client'
import PageMeta from './PageMeta.vue'
import PageNav from './PageNav.vue'

const pageData = usePageData()
</script>
