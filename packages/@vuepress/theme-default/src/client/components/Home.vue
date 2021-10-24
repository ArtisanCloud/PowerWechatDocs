<template>
  <main class="home" :aria-labelledby="heroText ? 'main-title' : undefined">
    <header v-if="false" class="hero">
      <img v-if="heroImage" :src="heroImage" :alt="heroAlt" />

      <h1 v-if="heroText" id="main-title">
        {{ heroText }}
      </h1>

      <p v-if="tagline" class="description">
        {{ tagline }}
      </p>

      <p v-if="actions.length" class="actions">
        <NavLink
          v-for="action in actions"
          :key="action.text"
          class="action-button"
          :class="[action.type]"
          :item="action"
        />
      </p>
    </header>

    <div v-if="false" class="theme-default-content custom">
      <Content />
    </div>

    <!-- Start -->
    <section
      class="bg-home d-flex align-items-center"
      style="background: url('/images/bg-crypto.jpg') center center"
    >
      <div class="container">
        <div class="row mt-5">
          <div class="col-12">
            <div class="heading-title">
              <h4 class="display-3 text-white title-dark mb-3 fw-bold">
                {{ heroText }}
              </h4>
              <p class="text-white-50 para-desc mb-0">
                {{ heroDesc }}
              </p>

              <div class="mt-4 pt-2 align-items-center">
                <RouterLink
                  :to="actions[0].link"
                  class="btn btn-lg btn-primary"
                  >{{ actions[0].text }}</RouterLink
                >
                <p class="text-white-50 mb-0 mt-3">
                  <i class="uil uil-auto-flash"></i>
                  {{ siteLocale.bannerNote }}
                </p>
                <code
                  class="code-block"
                  :data-clipboard-text="siteLocale.bannerCodeBlock"
                >
                  {{ siteLocale.bannerCodeBlock }}<i class="uil uil-copy"></i>
                </code>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="home-shape-arrow">
            <a
              href="#features"
              class="btn btn-icon btn-pills btn-lg btn-footer scroll-down"
            >
              <i data-feather="arrow-down" class="icons"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-down icons"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- features -->
    <section v-if="features && features.length" id="features" class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h4 class="title mb-4">{{ siteLocale.featureMainTitle }}</h4>
              <p class="text-muted mx-auto para-desc mb-0">
                {{ siteLocale.featureMainDesc }}
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="col-lg-4 col-md-6 mt-4 pt-2"
          >
            <div
              class="card features feature-primary core-feature shadow rounded p-4 text-center border-0"
            >
              <div class="icon text-center rounded-circle mx-auto">
                <h3 class="mb-0"><i :class="feature.icon"></i></h3>
              </div>
              <div class="card-body p-0 mt-4 mx-auto">
                <a href="javascript:void(0)" class="title text-dark h5">{{
                  feature.title
                }}</a>
                <p class="text-muted mt-2 mb-0">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- End -->

    <template v-if="footer">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="footerHtml" class="footer" v-html="footer" />
      <div v-else class="footer" v-text="footer" />
      <div v-if="beian" class="beian">
        <a :href="beian.link">{{ beian.text }}</a>
      </div>
    </template>
  </main>
</template>

<script setup lang="ts">
import {
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed, onMounted } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared'
import NavLink from './NavLink.vue'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()

// hero image and title
const heroImage = computed(() => {
  if (!frontmatter.value.heroImage) {
    return null
  }

  return withBase(frontmatter.value.heroImage)
})
const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null
  }
  return frontmatter.value.heroText || siteLocale.value.title || 'Hello'
})
const heroDesc = computed(() => siteLocale.value.description)
const heroAlt = computed(
  () => frontmatter.value.heroAlt || heroText.value || 'hero'
)
const tagline = computed(() => {
  if (frontmatter.value.tagline === null) {
    return null
  }
  return (
    frontmatter.value.tagline ||
    siteLocale.value.description ||
    'Welcome to your VuePress site'
  )
})

// action buttons
const actions = computed(() => {
  if (!isArray(frontmatter.value.actions)) {
    return []
  }

  return frontmatter.value.actions.map(({ text, link, type = 'primary' }) => ({
    text,
    link,
    type,
  }))
})

// feature list
const features = computed(() => {
  if (isArray(siteLocale.value.features)) {
    return siteLocale.value.features
  }
  return []
})

const beian = computed(() => siteLocale.value.beian || null)

// footer
const footer = computed(() => frontmatter.value.footer)
const footerHtml = computed(() => frontmatter.value.footerHtml)

onMounted(() => {
  const clipboard = new window.ClipboardJS('.code-block')

  clipboard.on('success', function (e) {
    console.info('Action:', e.action)
    console.info('Text:', e.text)
    console.info('Trigger:', e.trigger)

    window
      .Toastify?.({
        text: '复制成功',
        duration: 1500,
        gravity: 'top', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        backgroundColor: 'white',
        style: {
          color: '#1f1e1e',
          borderRadius: '10px',
          fontSize: '13px',
        },
        stopOnFocus: true, // Prevents dismissing of toast on hover
      })
      .showToast()

    e.clearSelection()
  })

  clipboard.on('error', function (e) {
    console.error('Action:', e.action)
    console.error('Trigger:', e.trigger)
  })
})
</script>
