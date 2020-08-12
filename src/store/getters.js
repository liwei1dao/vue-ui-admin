const getters = {
    appname: state => state.app.appname,
    currlanguage: state => state.app.currlanguage,
    dark: state => state.app.currlanguage,
    routes: state => state.router.routes,
    currtagroute : state => state.router.currtagroute,
    userinfo: state => state.user.userinfo,
}
export default getters