
const MenuConfig: object[] = [
    {
        title: '首页',
        key: '/home',
        icon: 'home'
    },
    {
        title: '博客',
        key: '/blog',
        icon: 'edit',
        children: [
            {
                title: '博客管理',
                key: '/blog/list',
                icon: 'file-markdown'
            },
            {
                title: '文件管理',
                key: '/blog/upload',
                icon: 'file'
            },
            {
                title: '权限test',
                key: '/blog/premission_list',
                icon: 'file-markdown'
            },
        ]
    },
    {
        title: '数据可视化',
        key: 'datav',
        icon: 'area-chart',
        children: [
                {
                    title: '柱形图',
                    key: '/datav/charts/bar',
                    icon: 'bar-chart'
                },
                {
                    title: '饼图',
                    key: '/datav/charts/pie',
                    icon: 'pie-chart'
                },
                {
                    title: '折线图',
                    key: '/datav/charts/line',
                    icon: 'line-chart'
                },
                {
                    title: 'geo地图',
                    key: '/datav/charts/geo',
                    icon: 'environment-o'
                },
            ]
    },
    {
        title: 'we-eat',
        key: '/eat',
        icon: 'shop',
        children: []
    },
    {
        title: 'UI',
        key: '/ui',
        icon: 'smile',
        children: [
            {
                title: 'antd',
                key:'/ui/ant',
                icon:'ant-design',
                children: [
                    {
                        title: '按钮',
                        key: '/ui/antd/buttons',
                        icon: 'caret-down'
                    },
                    {
                        title: '弹框',
                        key: '/ui/antd/dialogs',
                        icon: 'laptop'
                    },
                    {
                        title: 'Loading',
                        key: '/ui/antd/loadings',
                        icon: 'loading-3-quarters'
                    },
                    {
                        title: '通知提醒',
                        key: '/ui/antd/message',
                        icon: 'mail'
        
                    },
                    {
                        title: '列表',
                        key: '/ui/antd/list',
                        icon: 'bars'
        
                    },
                    ,
                    {
                        title: 'tips',
                        key: '/ui/antd/tips',
                        icon: 'message'
                    },
                    {
                        title: 'Tab页签',
                        key: '/ui/antd/tabs',
                        icon: 'tag-o'
        
                    },
                    {
                        title: '图片画廊',
                        key: '/ui/antd/pic',
                        icon: 'picture'
        
                    },
                    {
                        title: '轮播图',
                        key: '/ui/antd/banners',
                        icon: 'picture'
                    }
                ]
            },
            {
                title: 'form',
                key: '/ui/form',
                icon: 'form',
                children: [
                    {
                        title: '登录',
                        key: '/ui/form/login',
                        icon: 'login'
                    },
                    {
                        title: '注册',
                        key: '/ui/form/reg',
                        icon: 'user-add'
                    },
                    {
                        title: '搜索',
                        key: '/ui/form/search',
                        icon: 'search'
                    },
                    {
                        title: '动态表单',
                        key: '/ui/form/dynamic',
                        icon: 'plus'
                    },
                    
                ]
            },
            {
                title: 'table',
                key: '/ui/table',
                icon: 'table',
                children: [
                    {
                        title: '基础表格',
                        key: '/ui/table/basic',
                        icon: 'table'
                    },
                    {
                        title: '高级表格',
                        key: '/ui/table/high',
                        icon: 'table'
                    }
                ]
            }
        ]
    },
    {
        title: 'cms',
        key: '/cms',
        icon: 'appstore',
        children: [
            {
                title: '富文本',
                key: '/cms/rich',
                icon: 'file-markdown'
            },
            {
                title: '人员管理',
                key: '/cms/person',
                icon: 'user'
            },
            {
                title: '团队管理',
                key: '/cms/user',
                icon: 'team'
            },
            {
                title: '车辆地图',
                key: '/cms/carMap',
                icon: 'car'
            },
        ]
    },
    {
        title: '权限设置',
        key: '/permission',
        icon: 'setting'
    }
]
export default MenuConfig