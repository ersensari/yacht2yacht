export default defineNuxtRouteMiddleware((to) => {

  if (!to.params.id) {
    console.log('Accessed runtime config within middleware.')
    return '/'
  }
  console.log('Heading to', to.path, 'but I think we should go somewhere else...')

})
