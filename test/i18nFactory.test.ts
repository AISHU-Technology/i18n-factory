import i18nFactory from '../src/i18nFactory'

describe('test i18nFactory', () => {
    it('返回i18n实例', () => {
        const res = i18nFactory({ translations: ['zh-cn', 'zh-tw', 'en-us'], locale: 'zh-cn' })
        expect(typeof res).toBe('function')
        expect(typeof res.setup).toBe('function')
    })

    it('返回指定的语言', () => {
        const i18n = i18nFactory({ translations: ['zh-cn', 'zh-tw', 'en-us'], locale: 'en-us' })

        const __ = i18n([
            [
                '正在设置...',
                '正在設定...',
                'Setting...',
            ],
        ])

        expect(__('正在设置...')).toBe('Setting...')
    })
})
