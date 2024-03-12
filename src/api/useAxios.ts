import axios, {AxiosResponse} from 'axios';

export interface ICommonResult {
    success: boolean
    message?: string
    data?: any
    stat?: any
}

// 创建axios实例
const service = axios.create({
    baseURL: '', // api的base_url
    timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use((config) => {
    // config:配置对象，对象里边有一个属性很重要，headers请求头
    return config
})

// 响应拦截器
service.interceptors.response.use((res: AxiosResponse): Promise<any> => {
    // 成功的回调函数：服务器响应的数据回来以后，响应拦截器可以检测到，可以做一些事情
    return Promise.resolve({
        success: res.status === 200,
        message: res.status === 200 ? '请求成功' : '请求失败',
        data: res.data,
        stat: res.status
    });
}, (error) => {
    // 响应失败的回调函数
    return Promise.reject(new Error('faile'))
})

export default service;