<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" />
            <h4>{{profile.username}}</h4>
            <p>{{profile.bio}}</p>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              :class="{active: profile.following}"
              @click="followHandler()"
              :disabled="followDisabaled"
            >
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow {{profile.username}}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href>My Articles</a>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" href>Favorited Articles</a>
              </li>-->
            </ul>
          </div>

          <div class="article-preview" v-for="(article, index) in articles" :key="index">
            <div class="article-meta">
              <nuxt-link :to="{name:'profile', params:{username: article.author.username}}">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link
                  class="author"
                  :to="{name:'profile', params:{username: article.author.username}}"
                >{{article.author.username}}</nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD, YYYY')}}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i>
                {{article.favoritesCount}}
              </button>
            </div>
            <nuxt-link
              class="preview-link"
              v-html="article.body"
              :to="{
                name: 'article',
                params: {
                slug: article.slug }
              }"
            >
              <span>Read more...</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfile, getArticles, unfollow, follow } from "@/utils/request";
import markdownIt from "markdown-it";
export default {
  middleware: "authenticated",
  name: "profile",
  data() {
    return {
      followDisabaled: false,
    };
  },
  async asyncData({ params }) {
    try {
      const [profileData, articlesData] = await Promise.all([
        getProfile(params.username),
        getArticles({ favorited: "jake" }),
      ]);
      const profile = profileData.data.profile;
      const articles = articlesData.data.articles;

      const md = new markdownIt();
      articles.forEach((article) => (article.body = md.render(article.body)));
      return {
        profile,
        articles,
      };
    } catch (error) {
      throw new Error("fail");
    }
  },
  methods: {
    async followHandler() {
      this.followDisabaled = true;
      if (this.profile.following) {
        const { data } = await unfollow(this.profile.username);
        this.profile.following = data.profile.following;
      } else {
        const { data } = await follow(this.profile.username);
        this.profile.following = data.profile.following;
      }
      this.followDisabaled = false;
    },
  },
};
</script>

<style>
</style>