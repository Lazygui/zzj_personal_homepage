import {defineStore} from 'pinia' //引入pinia

//这里官网是单独导出  是可以写成默认导出的  官方的解释为大家一起约定仓库用use打头的单词 固定统一小仓库的名字不易混乱
export const EquipmentInfo = defineStore('EquipmentInfo', {
    state: () => {
        return {
            /**设备信息手机=true PC=false */
            isIos: false as boolean,
            /**一级背景图 */
            isBackImg: true as boolean
        } //为了避免出错，返回的值用()包起来
    },
})
