# i18n工厂函数

1. 初始化，获取i18n实例
```js
// i18n.js
import i18nFactory from '@anyshare/i18nfactory'

export default i18nFactory({translations: ['zh-cn', 'zh-tw', 'en-us'], locale: 'zh-tw'})
```

2. 传入国际化语言资源
```js
// locale.js
import i18n from './i18n'

export default i18n([
    [
        '正在设置...',
        '正在設定...',
        'Setting...',
    ],
])
```

3. 使用
```js
import __ from './locale'
...

<span>{__('正在设置...')}</span>
```