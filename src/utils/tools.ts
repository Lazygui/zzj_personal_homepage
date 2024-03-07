const isEmptyFunction = (fn: Function | undefined | (() => void)): boolean => {
    // 如果fn不是函数，返回false
    if (typeof fn !== 'function') {
        return false;
    }
    // 转换为字符串并去除前后的空格和换行符
    const functionString = fn.toString().trim()
    //正则匹配
    let regex: RegExp = functionString.includes('function') ? /\s*\)\s*\{/ : /\s*\s*\{/
    const matching = functionString.split(regex)[1].trim()
    const result = matching.charAt(0)
    // 如果函数体为空，则认为是空函数
    return result === '}';
}
export {isEmptyFunction}