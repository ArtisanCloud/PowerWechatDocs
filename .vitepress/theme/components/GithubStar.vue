<script lang="ts" setup>
// html, style is from: https://github.com/ntkme/github-buttons
import { onMounted, PropType, ref } from 'vue';
const starCount = ref<number>();
const props = defineProps({
  href: {
    type: String as PropType<string>,
    required: true,
  },
  api: {
    type: String as PropType<string>,
    required: true,
  }
});

onMounted(async () => {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    const count = await fetch(props.api).then(res => res.text());
    if (count && +count > 0) {
      starCount.value = +count
    }
  } catch (e) {
    console.warn('fetch github star error', e);
  }
});
</script>

<template>
  <div class="widget" v-if="starCount">
    <a class="btn" :href="href" rel="noopener" target="_blank" aria-label="Star ArtisanCloud/PowerWeChat on GitHub">
      <svg viewBox="0 0 16 16" width="14" height="14" class="octicon octicon-star" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>&nbsp;<span></span>
    </a>
    <a class="social-count" :href="`${href}/stargazers`" rel="noopener" target="_blank" :ariaLabel="`${starCount} stargazers on GitHub`">{{ starCount }}</a></div>
</template>

<style lang="less">
.widget {
  display: inline-block;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  font-size: 0;
  line-height: 0;
  white-space: nowrap
}

.btn,
.social-count {
  position: relative;
  display: inline-block;
  display: inline-flex;
  height: 20px;
  padding: 2px 5px;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  vertical-align: bottom;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid
}

.btn {
  border-radius: .25em
}

.btn:not(:last-child) {
  border-radius: .25em 0 0 .25em
}

.social-count {
  border-left: 0;
  border-radius: 0 .25em .25em 0
}

.widget-lg .btn,
.widget-lg .social-count {
  height: 16px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 16px
}

.octicon {
  display: inline-block;
  vertical-align: text-top;
  fill: currentColor;
  overflow: visible
}

.btn:focus-visible,
.social-count:focus-visible {
  outline: 2px solid #0969da;
  outline-offset: -2px
}

.btn {
  color: #24292f;
  background-color: #ebf0f4;
  border-color: #ccd1d5;
  border-color: rgba(27, 31, 36, .15);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e");
  background-image: -moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);
  background-image: linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);
  filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')
}

:root .btn {
  filter: none
}

.btn:hover,
.btn:focus {
  background-color: #e9ebef;
  background-position: 0 -0.5em;
  border-color: #caccd1;
  border-color: rgba(27, 31, 36, .15);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e");
  background-image: -moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);
  background-image: linear-gradient(180deg, #f3f4f6, #e9ebef 90%);
  filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')
}

:root .btn:hover,
:root .btn:focus {
  filter: none
}

.btn:active {
  background-color: #e5e9ed;
  border-color: #c7cbcf;
  border-color: rgba(27, 31, 36, .15);
  box-shadow: inset 0 .15em .3em rgba(27, 31, 36, .15);
  background-image: none;
  filter: none
}

.social-count {
  color: #24292f;
  background-color: #fff;
  border-color: #ddddde;
  border-color: rgba(27, 31, 36, .15)
}

.social-count:hover,
.social-count:focus {
  color: #0969da
}

.octicon-heart {
  color: #bf3989
}


// ---- dark mode start -----
html.dark {
 .btn:focus-visible,
 .social-count:focus-visible {
  outline:2px solid #58a6ff;
  outline-offset:-2px
 }
 .btn {
  color:#c9d1d9;
  background-color:#1a1e23;
  border-color:#2f3439;
  border-color:rgba(240,246,252,.1);
  background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e");
  background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);
  background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);
  filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')
 }
 :root .btn {
  filter:none
 }
 .btn:hover,
 .btn:focus {
  background-color:#292e33;
  background-position:0 -0.5em;
  border-color:#8b949e;
  background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e");
  background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);
  background-image:linear-gradient(180deg, #30363d, #292e33 90%);
  filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')
 }
 :root .btn:hover,
 :root .btn:focus {
  filter:none
 }
 .btn:active {
  background-color:#161719;
  border-color:#8b949e;
  box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);
  background-image:none;
  filter:none
 }
 .social-count {
  color:#c9d1d9;
  background-color:#0d1117;
  border-color:#24282e;
  border-color:rgba(240,246,252,.1);
 }
 .social-count:hover,
 .social-count:focus {
  color:#58a6ff
 }
 .octicon-heart {
  color:#db61a2
 }
}

// ---- dark mode end -----

</style>
