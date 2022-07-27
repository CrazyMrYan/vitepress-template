import Theme from 'vitepress/theme'
import ui from '@/plugins/element-ui'
import components from '@/components'
import '@/styles/index.less'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ui)
    app.use(components)
  }
}
