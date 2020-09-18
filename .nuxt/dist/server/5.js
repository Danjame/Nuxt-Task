exports.ids = [5];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=46493143&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.isLogin?'Sign in':'Sign Up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")]):_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li>"+_vm._ssrEscape(_vm._s(field)+" "+_vm._s(message))+"</li>")})))}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\" required=\"required\" minlength=\"8\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape(_vm._s(_vm.isLogin?'Sign in':'Sign Up'))+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=46493143&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: "notauthenticated",
  name: "login",

  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      },
      errors: {}
    };
  },

  methods: {
    async submit() {
      try {
        const {
          data
        } = this.isLogin ? await Object(request["m" /* login */])({
          user: this.user
        }) : await Object(request["n" /* register */])({
          user: this.user
        });
        this.$store.commit("setUser", data.user);
        Cookie.set("user", data.user);
        this.$router.push("/");
      } catch (err) {
        this.errors = err.response.data.errors;
      }
    }

  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "029a4308"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map