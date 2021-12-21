# i18n工厂函数

## 安装

```
npm install @anyshare/i18nfactory --registry=http://repository.aishu.cn:8081/repository/npm-all/
```

## 使用

1. 初始化，导出i18n实例
```js
// i18n.js
import i18nFactory from '@anyshare/i18nfactory'

// translations：支持的语言
// locale：默认当前的语言
export default i18nFactory({translations: ['zh-cn', 'zh-tw', 'en-us'], locale: 'zh-cn'})
```

2. 更改当前语言
```js
import i18nInstance from './i18n'

i18nInstance.setup({ locale: 'en-us' })
```

3. 传入国际化语言资源
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

4. 使用
```js
import __ from './locale'
...

<span>{__('正在设置...')}</span>
```