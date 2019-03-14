/* *
在 umi 中，约定的存放页面代码的文件夹是 pages，是复数，
不过如果你喜欢单数的话你配置项中你可以添加 singular 为 true 来让 page 变为约定的文件夹。
我这使用默认的src/pages文件夹效果
 */
export default {
    // singular: true, //
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],
    routes: [
        {
            path:"/",
            component:'./HelloWorld'
        },
        {
            path:"/HelloWorld",
            component:'./HelloWorld'
        },
        {
            path:"/Content",
            component:'./Content'
        }
    ]
}