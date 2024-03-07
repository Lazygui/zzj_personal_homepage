/**
 * @FileDescription  数字千位符指令
 * @Author  zhouzhijun
 * @Date  2024-03-07
 * @LastEditors  zhouzhijun
 * @LastEditTime  2024-03-07
 */

/**
 * @description  格式化数字
 * @param  {string} textContent
 * @return {string}
 */
const formatTheNumbers = (textContent: string): string => {
    const value: number = parseFloat(textContent.replace(/,/g, ''));
    return value.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).replace(/\./g, ',');
}
export default {
    /**初始化 */
    beforeMount: (el: HTMLElement): void => {
        if (el.textContent !== null && el.textContent !== '') {
            el.textContent = formatTheNumbers(el.textContent)
        }
    },
    updated: (el: HTMLElement): void => {
        if (el.textContent !== null && el.textContent !== '') {
            el.textContent = formatTheNumbers(el.textContent)
        }
    },
}