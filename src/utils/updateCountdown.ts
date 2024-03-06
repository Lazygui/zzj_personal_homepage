// 2天后的时间戳
let targetDate = 0
export const getTimeRemaining = (secondsTime: number) => {
	const timeRemaining = targetDate - secondsTime // 直接使用秒进行计算
	const days = Math.floor(timeRemaining / (24 * 60 * 60))
	const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60))
	const minutes = Math.floor((timeRemaining % (60 * 60)) / 60)
	const seconds = Math.floor(timeRemaining % 60)
	return { days, hours, minutes, seconds }
}
export const setTargetDate = (day: number): void => {
	targetDate = Math.floor(new Date().getTime() / 1000) + day * 24 * 60 * 60
}
