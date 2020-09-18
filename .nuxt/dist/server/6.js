exports.ids = [6];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=31c521ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.profile.image))+"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.profile.bio))+"</p> <button"+(_vm._ssrAttr("disabled",_vm.followDisabaled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{active: _vm.profile.following}))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n             \n            Follow "+_vm._s(_vm.profile.username)+"\n          ")+"</button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\"><ul class=\"nav nav-pills outline-active\"><li class=\"nav-item\"><a href class=\"nav-link active\">My Articles</a></li></ul></div> "),_vm._l((_vm.articles),function(article,index){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{name:'profile', params:{username: article.author.username}}}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{name:'profile', params:{username: article.author.username}}}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n              "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: {
              slug: article.slug }
            }},domProps:{"innerHTML":_vm._s(article.body)}},[_c('span',[_vm._v("Read more...")])])],2)})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=31c521ac&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(7);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: "authenticated",
  name: "profile",

  data() {
    return {
      followDisabaled: false
    };
  },

  async asyncData({
    params
  }) {
    try {
      const [profileData, articlesData] = await Promise.all([Object(request["k" /* getProfile */])(params.username), Object(request["h" /* getArticles */])({
        favorited: "jake"
      })]);
      const profile = profileData.data.profile;
      const articles = articlesData.data.articles;
      const md = new external_markdown_it_default.a();
      articles.forEach(article => article.body = md.render(article.body));
      return {
        profile,
        articles
      };
    } catch (error) {
      throw new Error("fail");
    }
  },

  methods: {
    async followHandler() {
      this.followDisabaled = true;

      if (this.profile.following) {
        const {
          data
        } = await Object(request["o" /* unfollow */])(this.profile.username);
        this.profile.following = data.profile.following;
      } else {
        const {
          data
        } = await Object(request["f" /* follow */])(this.profile.username);
        this.profile.following = data.profile.following;
      }

      this.followDisabaled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "58ef2c48"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map