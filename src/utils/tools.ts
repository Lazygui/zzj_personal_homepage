import {provincialCapital} from '@/libs/provincialCapital'
import {IAdress} from '@/libs/provincialCapital'
import {randomInt} from "@/utils/randomDates";

/**
 * 判断函数是否为空函数
 * @param fn { Function | undefined | (() => void) } 函数
 * @returns { boolean } 返回true表示是空函数，返回false表示不是空函数
 */
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
/**
 * 获取随机省份
 * @returns { IAdress[] } 返回一个包含随机省份数组
 */
const getRandomProvince = (max: number): IAdress[] => {
    //@ts-ignore
    const sortList: IAdress[] = provincialCapital.toSorted(() => Math.random() - 0.5)
    // 根据max最大个数返回一个随机个数省份的数组，数组长度不超过max
    return sortList.slice(0, randomInt(1, max))
}

export {isEmptyFunction, getRandomProvince}