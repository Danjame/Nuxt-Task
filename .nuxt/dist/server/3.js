exports.ids = [3];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=6ce428b3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'your_feed'},attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'your_feed'
                  }
                }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'global_feed'},attrs:{"exact":"","to":{
                  name: 'home',
                }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'tag'},attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: _vm.tag
                  }
                }}},[_vm._v("# "+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{name:'profile', params:{username: article.author.username}}}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{name:'profile', params:{username: article.author.username}}}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n              "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: {
              slug: article.slug }
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',{on:{"click":function($event){return _vm.$router.push({ name: 'article', params: {
              slug: article.slug }
              })}}},[_vm._v("Read more...")])])],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(item){return _c('nuxt-link',{key:item,staticClass:"tag-pill tag-default",attrs:{"to":{
                name: 'home',
                query:{
                  tag: item,
                  tab:'tag'
                }
              }}},[_vm._v(_vm._s(item))])}),1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
              active: item === _vm.page
            }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                name: 'home',
                query: {
                  page:item,
                  tag: _vm.$route.query.tag
                }
              }}},[_vm._v(_vm._s(item))])],1)}),0)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=6ce428b3&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(7);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "home",

  async asyncData({
    query
  }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 20;
    const tab = query.tab || "global_feed";
    const tag = query.tag;
    const loadArticles = tab == "global_feed" || "tag" ? request["h" /* getArticles */] : request["j" /* getFeedArticles */];
    const res = await Promise.all([loadArticles({
      limit,
      offset: (page - 1) * limit,
      tag
    }), Object(request["l" /* getTags */])()]);
    const {
      articles,
      articlesCount
    } = res[0].data;
    articles.forEach(item => {
      item.favoriteDisabled = false;
    });
    const {
      tags
    } = res[1].data;
    return {
      limit,
      page,
      articlesCount,
      articles,
      tags,
      tag,
      tab
    };
  },

  watchQuery: ["page", "tag", "tab"],
  computed: { ...Object(external_vuex_["mapState"])(["user"]),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async favoriteHandler(article) {
      article.favoriteDisabled = true;

      if (article.favorited) {
        await Object(request["e" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        await Object(request["c" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "95b1a614"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map