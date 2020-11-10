interface StyleConfig {
    [key: string]: string
}
export declare class Example {
    constructor()
    /**
     * 
     * @param content string
     */
    static init(content: string): void
    /**
     * 
     * @param tagName 标签名字
     * @param innerText 标签展示的内容
     * @param styleConfig 标签样式
     */
    static initPage(tagName: string, innerText: string, styleConfig: StyleConfig ):void
}