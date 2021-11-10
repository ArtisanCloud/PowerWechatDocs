<template>
  <header
    id="topnav"
    ref="navbar"
    class="navbar"
    :class="{ 'nav-sticky': navSticky, 'no-sidebar': isHome }"
  >
    <ToggleSidebarButton v-if="!isHome" @toggle="$emit('toggle-sidebar')" />

    <span ref="siteBrand">
      <RouterLink class="logo" :to="siteBrandLink">
        <span class="logo-light-mode">
          <img
            src="/images/at-logo-2-slim.svg"
            class="l-dark"
            height="40"
            alt=""
          />
          <img
            src="/images/at-logo-2-slim-light.svg"
            class="l-light"
            height="40"
            alt=""
          />
        </span>
        <img
          src="/images/at-logo-2-slim-light.svg"
          height="22"
          class="logo-dark-mode"
          alt=""
        />
      </RouterLink>
      <RouterLink v-if="false" :to="siteBrandLink">
        <img
          v-if="siteBrandLogo"
          class="logo"
          :src="withBase(siteBrandLogo)"
          :alt="siteBrandTitle"
        />

        <span
          v-if="siteBrandTitle"
          class="site-name"
          :class="{ 'can-hide': siteBrandLogo }"
        >
          {{ siteBrandTitle }}
        </span>
      </RouterLink>
    </span>

    <div class="navbar-links-wrapper" :style="linksWrapperStyle">
      <slot name="before" />

      <NavbarLinks class="can-hide" />

      <slot name="after" />

      <ToggleDarkModeButton v-if="enableDarkMode" />

      <NavbarSearch />
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  usePageFrontmatter,
  useRouteLocale,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import { computed, onMounted, ref } from 'vue'
import { DefaultThemeHomePageFrontmatter } from '../../shared'
import { useDarkMode, useThemeLocaleData } from '../composables'
import NavbarLinks from './NavbarLinks.vue'
import ToggleDarkModeButton from './ToggleDarkModeButton.vue'
import ToggleSidebarButton from './ToggleSidebarButton.vue'

defineEmits(['toggle-sidebar'])

const routeLocale = useRouteLocale()
const siteLocale = useSiteLocaleData()
const themeLocale = useThemeLocaleData()
const isDarkMode = useDarkMode()
const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()

const scrollY = ref(0)
const navbar = ref<HTMLElement | null>(null)
const siteBrand = ref<HTMLElement | null>(null)
const siteBrandLink = computed(
  () => themeLocale.value.home || routeLocale.value
)
const siteBrandLogo = computed(() => {
  if (isDarkMode.value && themeLocale.value.logoDark !== undefined) {
    return themeLocale.value.logoDark
  }
  return themeLocale.value.logo
})
const siteBrandTitle = computed(() => siteLocale.value.title)
const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {}
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + 'px',
  }
})
const enableDarkMode = computed(() => themeLocale.value.darkMode)
const isHome = computed(() => !!frontmatter.value.home)
const navSticky = computed(() => {
  if (!isHome.value) {
    return true
  }
  let winH = 500
  try {
    winH = window.innerHeight
  } catch (e) {
    // empty
  }
  // 滚动超过一个全屏之后再进行固定变色
  if (scrollY.value > winH - 70) {
    return true
  }
  return false
})

// avoid overlapping of long title and long navbar links
onMounted(() => {
  // TODO: migrate to css var
  // refer to _variables.scss
  const MOBILE_DESKTOP_BREAKPOINT = 719
  const navbarHorizontalPadding =
    getCssValue(navbar.value, 'paddingLeft') +
    getCssValue(navbar.value, 'paddingRight')
  const handleLinksWrapWidth = (): void => {
    if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
      linksWrapperMaxWidth.value = 0
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth -
        navbarHorizontalPadding -
        (siteBrand.value?.offsetWidth || 0)
    }
  }
  handleLinksWrapWidth()
  window.addEventListener('resize', handleLinksWrapWidth, false)
  window.addEventListener('orientationchange', handleLinksWrapWidth, false)
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ]
  const num = Number.parseInt(val, 10)
  return Number.isNaN(num) ? 0 : num
}
</script>
