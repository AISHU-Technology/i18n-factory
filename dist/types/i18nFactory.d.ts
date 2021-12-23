export interface Settings {
    /**
     * 支持的语言列表
     */
    translations: ReadonlyArray<string>;
    /**
     * 当前使用的语言
     */
    locale?: string;
}
/**
 * 匹配函数
 * @param key 要查找的资源
 * @param [replacements] 要替换的模版值
 * @return string 返回匹配的资源
 */
export declare type Matcher = (key: string, replacements?: Object) => string;
/**
 * 更改配置
 * @param locale 当前使用的语言
 */
export declare type Setup = ({ locale }: {
    locale: string;
}) => void;
/**
 * i18n实例
 */
export interface I18N {
    /**
     * 国际化资源
     */
    (resources: ReadonlyArray<ReadonlyArray<string>>): Matcher;
    /**
     * 更改配置
     */
    setup: Setup;
}
/**
 * i18n工厂函数
 * @param options.translations 支持的语言
 * @param options.locale 当前语言
 */
declare const i18nFactory: ({ translations, locale }: Settings) => I18N;
export default i18nFactory;
