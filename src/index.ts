export interface IStyleConfig {
    [key: string]: string
}
export class Example {
    constructor() {
        const version: string = 'class Example is init'
        this.init(version)
    }
    init(content?: string): void {
        console.log(content)
    }
    // 连接线转换驼峰
    private toHump(name: string): string {
        return name.replace(/-([a-z])/g, function (keb, item) {
            return item.toUpperCase()
        })
    }
    public initPage(tagName: string, innerText: string, styleConfig: IStyleConfig = {}) {
        const lable: HTMLElement = document.createElement(tagName)

        lable.innerText = innerText

        const styleConfigString: string = JSON.stringify(styleConfig)

        if (styleConfigString !== "{}") {

            Object.keys(styleConfig).forEach((key: string): void => {

                if (key.includes("_")) {

                    const newKey: string = this.toHump(key)

                    lable.style[newKey] = styleConfig[key]

                    return
                }

                lable.style[key] = styleConfig[key]
            })

        } else {
            // 默认样式
            lable.style.color = "#ccc"

            lable.style.fontSize = "18px"
        }

        document.body.append(lable)
    }
}
