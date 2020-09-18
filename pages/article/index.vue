<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{article.title}}</h1>

        <article-meta :article="article" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="article" />
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
                v-model="comment.body"
              ></textarea>
            </div>
            <div class="card-footer">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
              <button class="btn btn-sm btn-primary" @click="submit">Post Comment</button>
            </div>
          </form>

          <div v-for="(comment, index) in comments" :key="index" class="card">
            <div class="card-block">
              <p class="card-text">{{comment.body}}</p>
            </div>
            <div class="card-footer">
              <a href class="comment-author">
                <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
              </a>
              &nbsp;
              <a href class="comment-author">{{comment.author.username}}</a>
              <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY')}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, getComments, addComment } from "@/utils/request";
import ArticleMeta from "./components/article-meta";
import markdownIt from "markdown-it";
export default {
  name: "articleIndex",
  components: {
    ArticleMeta,
  },
  data() {
    return {
      comment: {
        body: "",
      },
    };
  },
  async asyncData({ params }) {
    const [articleData, commentsData] = await Promise.all([
      getArticle(params.slug),
      getComments(params.slug),
    ]);
    const { article } = articleData.data;
    const { comments } = commentsData.data;
    const md = new markdownIt();
    article.body = md.render(article.body);
    return {
      article,
      comments,
    };
  },
  methods: {
    async submit() {
      try {
        addComment(this.comment, this.article.slug);
      } catch (err) {
        throw new Error("fail");
      }
    },
  },
};
</script>

<style>
</style>