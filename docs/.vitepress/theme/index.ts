import DefaultTheme from 'vitepress/theme'
import './style.css'
import DemoClientOnly from '../../components/DemoClientOnly.vue'
const globalComponents = [{ name: 'DemoClientOnly', component: DemoClientOnly }]
// @ts-ignore
const exampleComponents = import.meta.glob('../../example/**/*.vue', {
  eager: true,
})
function getComponentName(name: string) {
  const [_, examplePath] = (name as string).split('example/')
  const [componentPath] = examplePath.split('.vue')
  return componentPath.replace(/\//g, '-')
}
export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component()
    globalComponents.forEach(({ name, component }) => {
      app.component(name, component)
    })
    Object.keys(exampleComponents).forEach((key) => {
      const Comp = exampleComponents[key].default
      const componentName = getComponentName(key)
      app.component(componentName, Comp)
    })
  },
}
