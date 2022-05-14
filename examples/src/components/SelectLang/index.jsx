import { Icon, Menu, Dropdown } from 'ant-design-vue'
import './index.less'
import i18nMixin from '@/store/i18n-mixin'

const locales = ['zh-CN', 'zh-TW', 'en-US', 'pt-BR']
const languageLabels = {
  'zh-CN': '简体中文',
  'zh-TW': '繁体中文',
  'en-US': 'English',
  'pt-BR': 'Português'
}
// eslint-disable-next-line
const languageIcons = {
  'zh-CN': '🇨🇳',
  'zh-TW': '🇭🇰',
  'en-US': '🇺🇸',
  'pt-BR': '🇧🇷'
}

const SelectLang = {
  name: 'SelectLang',
  mixins: [i18nMixin],
  render () {
    const changeLang = ({ key }) => {
      this.setLang(key)
    }
    const langMenu = (
      <Menu class={['menu', 'ant-pro-select-lang']} selectedKeys={[this.currentLang]} onClick={changeLang}>
        {locales.map(locale => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]}>
              {languageIcons[locale]}
            </span>{' '}
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    )
    return (
      <Dropdown overlay={langMenu} placement="bottomRight">
        <span class={'drop-down'}>
          <Icon type="global" title={this.$t('navBar.lang')} />
        </span>
      </Dropdown>
    )
  }
}

export default SelectLang
