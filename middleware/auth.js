// authLevel : 2  没有权限无法访问
// authLevel : 1  根据权限展示页面部分内容
// authLevel : 0  该页面不需要权限
export default ({ route, store, redirect }) => {
  const { authLevel } = route.meta.pop()
  // redirect({ path: '/login' })
  switch (authLevel) {
    case 0:
    case 1:
    case 2:
  }
}
