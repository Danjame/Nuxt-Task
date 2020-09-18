<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
            username: article.author.username
        }
    }"
    >
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link
        class="author"
        :to="{
          name: 'profile',
          params: {
            username: article.author.username
          }
      }"
      >{{article.author.username}}</nuxt-link>
      <span class="date">{{article.createAt | date('MMM DD, YYYY')}}</span>
    </div>
    <button
      class="btn btn-sm btn-outline-secondary"
      :class="{active: article.author.following}"
      @click="followHandler(article)"
      :disabled="followDisabaled"
    >
      <i class="ion-plus-round"></i>
      &nbsp;
      Follow Eric Simons
      <span class="counter">(10)</span>
    </button>
    &nbsp;&nbsp;
    <button
      class="btn btn-sm btn-outline-primary"
      :class="{active: article.Favorited}"
      @click="favoriteHandler(article)"
      :disabled="favDisabaled"
    >
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post
      <span class="counter">{{article.favoritesCount}}</span>
    </button>
  </div>
</template>

<script>
import { addFavorite, deleteFavorite, follow, unfollow } from "@/utils/request";
export default {
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      followDisabaled: false,
      favDisabaled: false,
    };
  },
  methods: {
    async favoriteHandler(article) {
      this.favDisabaled = true;
      if (article.favorited) {
        await deleteFavorite(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        await addFavorite(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }
      this.favDisabaled = false;
    },
    async followHandler(article) {
      this.followDisabaled = true;
      if (article.author.following) {
        const { data } = await unfollow(article.author.username);
        article.author.following = data.profile.following;
      } else {
        const { data } = await follow(article.author.username);
        article.author.following = data.profile.following;
      }
      this.followDisabaled = false;
    },
  },
};
</script>

<style>
</style>