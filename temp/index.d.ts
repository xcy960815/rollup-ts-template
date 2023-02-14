export interface IStyleConfig {
    [key: string]: string;
}
export declare class Example {
    constructor();
    init(content?: string): void;
    private toHump;
    initPage(tagName: string, innerText: string, styleConfig?: IStyleConfig): void;
}
