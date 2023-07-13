<template>
  <a-row type="flex" justify="space-around" align="middle" class="landing-container">
    <a-col :span="16">
    <a-typography-title>{{maintTextLanding.title}}!</a-typography-title>
    <a-typography-paragraph>
      <a-typography-title :level="2">{{maintTextLanding.subtitle}}</a-typography-title>
      {{ maintTextLanding.text }}
    </a-typography-paragraph> 
    </a-col>
    <a-col :span="16">
      <a-button danger type="primary" >Create Account</a-button>
      
    </a-col>
  </a-row>
  <a-row >
    
  </a-row>
  <a-row class="image-container">
    <a-col style="min-height: 300px;"></a-col>
  </a-row>
    <!-- <a-typography-title>Introduction</a-typography-title>
    <a-typography-paragraph>
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </a-typography-paragraph>
    <a-typography-paragraph>
      After massive project practice and summaries, Ant Design, a design language for background
      applications, is refined by Ant UED Team, which aims to
      <a-typography-text strong>
        uniform the user interface specs for internal background projects, lower the unnecessary
        cost of design differences and implementation and liberate the resources of design and
        front-end development.
      </a-typography-text>
    </a-typography-paragraph>
    <a-typography-title :level="2">Guidelines and Resources</a-typography-title>
    <a-typography-paragraph>
      We supply a series of design principles, practical patterns and high quality design resources
      (
      <a-typography-text code>Sketch</a-typography-text>
      and
      <a-typography-text code>Axure</a-typography-text>
      ), to help people create their product prototypes beautifully and efficiently.
    </a-typography-paragraph>

    <a-typography-paragraph>
      <ul>
        <li>
          <a-typography-link href="/docs/resources">Resource Download</a-typography-link>
        </li>
      </ul>
    </a-typography-paragraph>

    <a-typography-paragraph>
      Press
      <a-typography-text keyboard>Esc</a-typography-text>
      to exit...
    </a-typography-paragraph>

    <a-divider />

    <a-typography-title>介绍</a-typography-title>
    <a-typography-paragraph>
      蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
    </a-typography-paragraph>
    <a-typography-paragraph>
      随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
      Ant Design。基于
      <a-typography-text mark>『确定』和『自然』</a-typography-text>
      的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
      <a-typography-text strong>更好的用户体验</a-typography-text>
      。
    </a-typography-paragraph>
    <a-typography-title :level="2">设计资源</a-typography-title>
    <a-typography-paragraph>
      我们提供完善的设计原则、最佳实践和设计资源文件（
      <a-typography-text code>Sketch</a-typography-text>
      和
      <a-typography-text code>Axure</a-typography-text>
      ），来帮助业务快速设计出高质量的产品原型。
    </a-typography-paragraph>

    <a-typography-paragraph>
    </a-typography-paragraph>

    <a-typography-paragraph>
      <blockquote>{{ blockContent }}</blockquote>
      <pre>{{ blockContent }}</pre>
    </a-typography-paragraph>
      <a-typography-text keyboard>Esc</a-typography-text>
    </a-typography-paragraph> -->
  


  <!-- <div class="body-container">
    <h1 class="title">DREAM TEAM</h1>

    <div v-if="!dbTeams.isLoading" class="grid-container">
      <div v-for="(user, index) in dbTeams.allUsersDb" :key="index" class="card">
        <a-card
        style="display: block"
        :title="`🏍️ ${user?.name} 🏍️`"
        size="small"
        class="rider-card"
        
        >
        <div class="rider-card__content">
          <a-avatar class="photo" :src="user?.photoURL" :size="80" ></a-avatar>
          {{ `Puntuación: ${user?.totalPoints}` }}

        </div>
        </a-card>
      </div>
    </div>
  </div> -->
</template>
<script setup>

// import { useTeams } from "../stores/teams.js"
// import { useUserStore } from "../stores/user"

// const dbTeams = useTeams()
// const userStore = useUserStore()
// dbTeams.getUsers()
// dbTeams.updateUserPoints();
const maintTextLanding = {
  title: "DREAM TEAM",
  subtitle: "Preparate!",
  text: "¡Siente la adrenalina de Moto GP en nuestra plataforma de fantasy sports! Demuestra tus habilidades gestionando pilotos y compite por premios exclusivos. ¡Regístrate hoy mismo y vive la emoción de la estrategia en Moto GP!"}


</script>

<style lang="scss" scoped>
.image-container{
  min-height: "500px";
  background-image: url('/src/assets/images/landing-banner.png'); 
  background-size: contain; 
  background-repeat:no-repeat;
  background-position: right;
}
</style>
