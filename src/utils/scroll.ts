/**
 * 自动滚动
 *
 * 修饰符：
 * mouse 支持鼠标移入移出暂停动画
 * 使用例<div v-scroll.mouse="1"></div>
 */
import {DirectiveBinding} from 'vue'

interface AnimationElement extends HTMLElement {
    speed: number
    animationId: number | undefined
    cacheScrollTop: number // 存放我们缓存的scrollTop
}

const RAF = window.requestAnimationFrame
const CancelRAF = window.cancelAnimationFrame
const scrollElement = (el: AnimationElement): void => {
    // 获取最大滚动高度
    const maxScrollTop: number = el.scrollHeight - el.clientHeight
    // 直接在缓存滚动高度上进行计算
    el.cacheScrollTop =
        el.cacheScrollTop + el.speed >= maxScrollTop ? 0 : el.cacheScrollTop + el.speed
    // 将缓存高度设置为当前滚动高度
    el.scrollTo({
        top: el.cacheScrollTop,
    })
    // 执行下一帧
    el.animationId = RAF(scrollElement.bind(null, el))
}
// 鼠标移入暂停
const mouseEnterHandler = (el: AnimationElement): void => {
    if (el.animationId) {
        CancelRAF(el.animationId)
        el.animationId = undefined
    }
}
// 鼠标移出继续运行
const mouseLeaveHandler = (el: AnimationElement): void => {
    el.animationId = RAF(scrollElement.bind(null, el))
}

// 处理用户的滚动事件
const elementScrollHandler = (el: AnimationElement) => (el.cacheScrollTop = el.scrollTop)
/**计算并加载滚动动画 */
const computedHeight = (el: AnimationElement): void => {
    const maxScrollTop = el.scrollHeight - el.clientHeight
    if (maxScrollTop - 1 <= 0) {
        return
    }
    el.animationId = RAF(scrollElement.bind(null, el))
}
export default {
    /**初始化 */
    mounted: (el: AnimationElement, binding: DirectiveBinding): void => {
        // 滚动速度
        el.speed = binding.value || 1
        el.cacheScrollTop = 0
        // PS:因为我们使用 cacheScrollTop 来代替 el.scrollTop 处理滚动高度，所以这里需要同步一下用户滚动操作后的 scrollTop ==> 而为了保持动画连贯与流畅，这里千万不要去防抖/节流！
        el.addEventListener('scroll', elementScrollHandler.bind(null, el))
        // 鼠标移入暂停移出继续运动
        if (binding.modifiers.mouse) {
            el.addEventListener('mouseenter', mouseEnterHandler.bind(null, el))
            el.addEventListener('mouseleave', mouseLeaveHandler.bind(null, el))
        }
        computedHeight(el)
    },
    updated: (el: AnimationElement, binding: DirectiveBinding): void => {
        /**移除动画 */
        el.removeEventListener('scroll', elementScrollHandler.bind(null, el))
        computedHeight(el)
    },
    unmounted: (el: AnimationElement, binding: DirectiveBinding): void => {
        /**移除动画 */
        el.removeEventListener('scroll', elementScrollHandler.bind(null, el))
        if (binding.modifiers.mouse) {
            el.removeEventListener('mouseenter', mouseEnterHandler.bind(null, el))
            el.removeEventListener('mouseleave', mouseLeaveHandler.bind(null, el))
        }
    },
}
