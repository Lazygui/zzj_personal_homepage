/**
 * 生成随机整数
 * @param min 最小数 { number }
 * @param max 最大数 { number }
 */
export const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 根据传入的年限例如2024.返回一个当前年的随机日期例如2024-01-05，且返回的日期不超过当前日期
 * @param year 年份 { number }
 */
export const randomDates = (year: number): string => {
    const now: Date = new Date();
    const nowMonth: number = now.getMonth() + 1;
    const nowDate: number = now.getDate();
    const randomMonth: number = nowMonth === 1 ? 1 : randomInt(1, nowMonth);
    const randomDate: number = nowDate === 1 ? 1 : randomInt(1, nowDate);
    return `${year}-${randomMonth < 10 ? "0" + randomMonth : randomMonth}-${
        randomDate < 10 ? "0" + randomDate : randomDate
    }`
}
