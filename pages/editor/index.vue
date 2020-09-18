<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.tagList"
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button
                @click="submit"
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
              >Publish Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addArticles } from "@/utils/request";
export default {
  middleware: "authenticated",
  name: "editor",
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tagList: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        const { data } = await addArticles({ article: this.article });
        const { slug } = data.article;
        this.$router.push({ path: `/article/${slug}` });
      } catch (err) {
        throw new Error("fail");
      }
    },
  },
};
</script>

<style>
</style>