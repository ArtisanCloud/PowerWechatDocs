<script setup lang='ts'>
import GithubStar from './GithubStar.vue'
</script>

<style>
.githubStar {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 64px;
  margin-top: -20px;
}
</style>

<template>
  <div>
    <section id='hero'>
      <h1 class='tagline'>
        <span class='accent'>PowerWeChat</span>
      </h1>
      <p class='description'>
        PowerWeChat是一款简单易用的WeChat SDK for Golang<br />
        目前已经覆盖<b>微信公众号</b>、<b>微信小程序</b>、<b>微信支付</b>、<b>企业微信</b>
      </p>
      <p class='actions'>
        <a class='get-started' href='/zh/start/installation.html'>
          Get Started
          <svg
            class='icon'
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='10'
            viewBox='0 0 24 24'
          >
            <path
              d='M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z'
            />
          </svg>
        </a>
      </p>
      <div class='star-note'>
<!--         Place this tag where you want the button to render.-->
                <GithubStar href='https://github.com/ArtisanCloud/PowerWeChat'
                            api='https://powerwechat.artisan-cloud.com/github-star.txt' />
<!--        <div class='githubStar'>-->
<!--          <iframe-->
<!--            src='https://ghbtns.com/github-btn.html?user=ArtisanCloud&repo=PowerWeChat&type=star&count=true&size=small'-->
<!--            frameborder='0'-->
<!--            scrolling='0'-->
<!--            width='170'-->
<!--            height='30'-->
<!--            title='GitHub'>-->
<!--          </iframe>-->
<!--        </div>-->

        <p>
          欢迎Star支持，有问题可以<a href='https://github.com/ArtisanCloud/PowerWeChat/issues'>GitHub issues</a>或企业微信<a
          href='/zh/start/qa.html'>联系我们</a>
        </p>
      </div>
    </section>

    <section id='highlights' class='vt-box-container'>
      <div class='vt-box'>
        <h2>完整的微信生态覆盖</h2>
        <p>
          支持小程序、企业微信、微信支付、公众号、开放平台
        </p>
      </div>
      <div class='vt-box'>
        <h2>基于Golang</h2>
        <p>
          ArtisanCloud团队在业务基础上开源了Golang版本的WeChatSDK。
        </p>
      </div>
      <div class='vt-box'>
        <h2>MIT开源</h2>
        <p>
          在Github上开源，免费商用，欢迎Star。
        </p>
      </div>
    </section>


    <section id='sponsors'>
      <div>
        <h1>使用者案例：欢迎提供你们的案例</h1>
        <br>
        <div class='case-view'>
          <div class='case-style'>
            <a href='https://www.tiku-cloud.com' target='_blank'
               title='题库云SaaS平台是一个，专做线上答题、线上视频教学、线上阅读等多功能智能应用平台。'>
              <img width='64'
                   src='/public/images/case-tiku.jpg'
                   alt='Logo'>
            </a>
          </div>
          <div class='case-style'>
            <a href='https://v1zz.10huisp.com/bazaar/#/index' target='_blank'
               title='广西建设教育服务共享课件超市'>
              <img width='64'
                   src='/public/images/case-gxkj.jpg'
                   alt='Logo'>
            </a>
          </div>
          <div class='case-style'>
            <a href='https://www.hanhaojie.top/' target='_blank'
               title='辛达快递小程序'>
              <img width='64'
                   src='./images/haohaojie.jpg'
                   alt='Logo'>
            </a>
          </div>
          <div class='case-style'>
            <a href='https://aibb.linktmd.com/' target='_blank'
               title='AIBB'>
              <img width='64'
                   src='https://aibb.linktmd.com/assets/images/app.jpg'
                   alt='Logo'>
            </a>
          </div>
          <div class='case-style'>
            <a href='https://aiapp.cc/' target='_blank'
               title='创作王是一个全能型智能创作平台，可以智能回答、智能创作、智能编写、智能翻译、智能写代码等，帮助您解决各种创作难题。我们提供小红书创作、今日头条创作、知乎问答创作、微博创作、公众号创作等多种场景下不同风格的文章创作，以及视频口播稿、SWOT分析法、英文写作、节日祝福、夸夸神器、塔罗牌预测、解梦神器等多种创作工具。AIBB'>
              <img width='64'
                   src='http://aiapp.oss-cn-hangzhou.aliyuncs.com/home/czw_rwm_img.jpg'
                   alt='Logo'>
            </a>
          </div>
        </div>

      </div>
    </section>
  </div>

</template>

<style scoped>
section {
  padding: 42px 32px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
  background: url(./images/bg-developer.png) no-repeat center center;
  background-size: cover;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.actions .get-started:hover {
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.actions .get-started,
.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .get-started:hover,
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .get-started:hover,
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  text-align: center;
}

#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  margin: 0 24px;
}

#special-sponsor img {
  display: inline-block;
  vertical-align: middle;
  height: 36px;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

#sponsors {
  max-width: 900px;
  margin: 0px auto;
  text-align: center;
}

#sponsors h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}

#sponsors .sponsor-container {
  margin-bottom: 3em;
}


@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }

  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }

  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }

  #special-sponsor img {
    display: block;
    margin: 2px auto 1px;
  }

  #highlights h3 {
    margin-bottom: 0.6em;
  }

  #highlights .vt-box {
    padding: 20px 36px;
  }

  .actions a {
    margin: 0.5em 0;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}

.star-note {
  padding-top: 10px;
  font-size: 12px;
}

.star-note a {
  text-decoration: underline;
}


.case-view {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px black solid;
  /*padding-left: 340px*/
}

.case-style {
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 10%;

}

</style>
