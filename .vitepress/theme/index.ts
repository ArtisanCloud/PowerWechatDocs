import './styles/index.css'
import { h, App, watch } from 'vue'
import { VPTheme } from '@vue/theme'
import PreferenceSwitch from './components/PreferenceSwitch.vue'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'
import SponsorsAside from './components/SponsorsAside.vue'
import VueSchoolLink from './components/VueSchoolLink.vue'
import VueJobs from './components/VueJobs.vue'
import NavbarTitle from './components/NavbarTitle.vue'

import './styles/override.css'
import type { Router } from 'vitepress'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      'sidebar-top': () => h(PreferenceSwitch),
      'aside-mid': () => h(SponsorsAside),
      'aside-bottom': () => h(VueJobs),
      'navbar-title': () => h(NavbarTitle),
    })
  },
  enhanceApp({ app, router }: { app: App, router: Router }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    app.component('VueSchoolLink', VueSchoolLink)

    // Only run this on the client. Not during build.
    if (typeof window !== 'undefined' && (window as any).ga) {
      watch(() => router.route.data.relativePath, (path) => {
        console.log('route changed: ', path);
        (window as any).ga('send', 'pageview', path);
      }, { immediate: true });
    }
  }
})
