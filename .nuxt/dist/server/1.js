exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=017ed892&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" <div class=\"row\"><div class=\"col-xs-12 col-md-8 offset-md-2\"><form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.comment.body))+"</textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> "+(_vm._ssrList((_vm.comments),function(comment,index){return ("<div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"></a>\n             \n            <a href class=\"comment-author\">"+_vm._ssrEscape(_vm._s(comment.author.username))+"</a> <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMM DD, YYYY')))+"</span></div></div>")}))+"</div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=017ed892&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=7f965032&
var article_metavue_type_template_id_7f965032_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile',
      params: {
          username: _vm.article.author.username
      }
  }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.article.author.username
        }
    }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.followDisabaled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active: _vm.article.author.following}))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n     \n    Follow "+_vm._s(_vm.article.author.username)+"\n    ")+"<span class=\"counter\">(10)</span></button>\n    \n  <button"+(_vm._ssrAttr("disabled",_vm.favDisabaled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active: _vm.article.Favorited}))+"><i class=\"ion-heart\"></i>\n     \n    Favorite Post\n    <span class=\"counter\">"+_vm._ssrEscape(_vm._s(_vm.article.favoritesCount))+"</span></button>")],2)}
var article_metavue_type_template_id_7f965032_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=7f965032&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      followDisabaled: false,
      favDisabaled: false
    };
  },

  methods: {
    async favoriteHandler(article) {
      this.favDisabaled = true;

      if (article.favorited) {
        await Object(request["e" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        await Object(request["c" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      this.favDisabaled = false;
    },

    async followHandler(article) {
      this.followDisabaled = true;

      if (article.author.following) {
        const {
          data
        } = await Object(request["o" /* unfollow */])(article.author.username);
        article.author.following = data.profile.following;
      } else {
        const {
          data
        } = await Object(request["f" /* follow */])(article.author.username);
        article.author.following = data.profile.following;
      }

      this.followDisabaled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_7f965032_render,
  article_metavue_type_template_id_7f965032_staticRenderFns,
  false,
  injectStyles,
  null,
  "35894318"
  
)

/* harmony default export */ var article_meta = (component.exports);
// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "articleIndex",
  components: {
    ArticleMeta: article_meta
  },

  data() {
    return {
      comment: {
        body: ""
      }
    };
  },

  async asyncData({
    params
  }) {
    const [articleData, commentsData] = await Promise.all([Object(request["g" /* getArticle */])(params.slug), Object(request["i" /* getComments */])(params.slug)]);
    const {
      article
    } = articleData.data;
    const {
      comments
    } = commentsData.data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article,
      comments
    };
  },

  methods: {
    async submit() {
      try {
        Object(request["b" /* addComment */])(this.comment, this.article.slug);
      } catch (err) {
        throw new Error("fail");
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "6ecb7355"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map