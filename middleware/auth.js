// auth : 2  没有权限无法访问
// auth : 1  根据权限展示页面部分内容
// auth : 0  该页面不需要权限

export default ({app, store}) => {
    app.router.beforeEach((to, from, next) => {
        if(to.meta.auth === 2) {

        }
    })
}