const getters = {
    appName: state => state.app.appName,
    currlanguage: state => state.app.currlanguage,
    routes: state => state.router.routes,
    currtagroute : state => state.router.currtagroute,
    userinfo: state => state.user.userinfo,
}
export default getters