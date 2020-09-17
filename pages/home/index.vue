<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href>Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href>Global Feed</a>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <div class="article-meta">
              <nuxt-link class="author" :to="`/profile/${article.author.username}`">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link
                  class="author"
                  :to="`/profile/${article.author.username}`"
                >{{ article.author.username }}</nuxt-link>
                <span class="date">{{ article.createdAt }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
              >
                <i class="ion-heart"></i>
                {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{
                name: 'article',
                params: {
                slug: article.slug }
              }"
              class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span
                @click="$router.push({ name: 'article', params: {
                slug: article.slug }
                })"
              >Read more...</span>
            </nuxt-link>
          </div>
        </div>

        <nav>
          <ul class="pagination">
            <li
              class="page-item"
              :class="{
                active: item === page
              }"
              v-for="item in totalPage"
              :key="item"
            >
              <nuxt-link class="page-link" :to="{name: 'home', query:{page:item, tag: $route.query.tag}}">{{item}}</nuxt-link>
            </li>
          </ul>
        </nav>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                :to="{
                  name: 'home',
                  query:{
                    tag: item
                  }
                }"
                class="tag-pill tag-default"
                v-for="item in tags"
                :key="item"
              >
              {{ item }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles, getTags } from "@/utils/request";
export default {
  name: "home",
  async asyncData({ query }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 20;
    const res = await Promise.all([getArticles({
      limit,
      offset: (page - 1) * limit,
      tag: query.tag
    }), await getTags()])
    
    const {articles, articlesCount} = res[0].data
    const { tags } = res[1].data
    return {
      limit,
      page,
      articlesCount,
      articles,
      tags
    };
  },
  watchQuery: ["page", "tag"],
  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
  },
};
</script>

<style>
</style>    