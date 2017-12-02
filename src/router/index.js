import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['VIEW/Home'], resolve)
const Main = resolve => require(['VIEW/Main'], resolve)
const About = resolve => require(['VIEW/About'], resolve)
const Feedback = resolve => require(['VIEW/Feedback'], resolve)

const Login = resolve => require(['VIEW/Login'], resolve)
const Register = resolve => require(['VIEW/Register'], resolve)

const UserDetail = resolve => require(['VIEW/UserDetail'], resolve)

const ArticleDetail = resolve => require(['VIEW/article/Detail'], resolve)
const Article = resolve => require(['VIEW/article/Article'], resolve)
const MyArticle = resolve => require(['VIEW/article/MyArticle'], resolve)
const ArticleAdd = resolve => require(['VIEW/article/ArticleAdd'], resolve)

const Mine = resolve => require(['VIEW/Mine'], resolve)

const Count = resolve => require(['VIEW/Count'], resolve)
const History = resolve => require(['VIEW/History'], resolve)
const More = resolve => require(['VIEW/More'], resolve)
const Add = resolve => require(['VIEW/Add'], resolve)
// 常用页面
const Settings = resolve => require(['VIEW/Settings'], resolve)
const Help = resolve => require(['VIEW/Help'], resolve)

const File = resolve => require(['VIEW/file/File'], resolve)
const FileDetail = resolve => require(['VIEW/file/FileDetail'], resolve)
const FileEdit = resolve => require(['VIEW/file/FileEdit'], resolve)

const Admin = resolve => require(['VIEW/admin/Index'], resolve)
const AdminLogin = resolve => require(['VIEW/admin/Login'], resolve)

const AdminUser = resolve => require(['VIEW/admin/User'], resolve)
const AdminUserAdd = resolve => require(['VIEW/admin/UserAdd'], resolve)
const AdminUserDetail = resolve => require(['VIEW/admin/UserDetail'], resolve)

const AdminManager = resolve => require(['VIEW/admin/Manager'], resolve)
const AdminManagerDetail = resolve => require(['VIEW/admin/ManagerDetail'], resolve)

const Menu = resolve => require(['VIEW/admin/Menu'], resolve)

const AdminApp = resolve => require(['VIEW/admin/App'], resolve)

const System = resolve => require(['VIEW/system/Index'], resolve)

const Project = resolve => require(['VIEW/project/Index'], resolve)

const Message = resolve => require(['VIEW/im/Message'], resolve)
const Contacts = resolve => require(['VIEW/im/Contacts'], resolve)
// 时间
const TimeHome = resolve => require(['VIEW/time/Home'], resolve)
const TimeMain = resolve => require(['VIEW/time/Main'], resolve)
const TimeAbout = resolve => require(['VIEW/time/About'], resolve)
const TimeCount = resolve => require(['VIEW/time/Count'], resolve)
const TimeHistory = resolve => require(['VIEW/time/History'], resolve)
const TimeMore = resolve => require(['VIEW/time/More'], resolve)
const TimeAdd = resolve => require(['VIEW/time/Add'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        // redirect: '/files'
        component: Home,
        children: [
            {
                path: '',
                component: Main
            }
        ]
    }, {
        path: '/count',
        component: Count
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/feedback',
        component: Feedback
    },
    {
        path: '/history',
        component: History
    }, {
        path: '/more',
        component: More
    },
    {
        path: '/add',
        component: Add
    },
    {
        path: '/mine',
        component: Mine
    },
    // 其他
    {
        path: '/help',
        component: Help
    },
    {
        path: '/settings',
        component: Settings
    },
    // 菜单相关
    {
        path: '/admin/menus',
        component: Menu
    },
    // 文件相关
    {
        path: '/files',
        component: File
    }, {
        path: '/files/:path/edit',
        component: FileEdit
    }, {
        path: '/files/detail',
        component: FileDetail
    },
    {
        path: '/users/:id',
        component: UserDetail
    },
    // 文章相关
    {
        path: '/articles',
        component: Article
    },
    {
        path: '/articles/:id',
        component: ArticleDetail
    },
    {
        path: '/me/articles',
        component: MyArticle
    },
    // 账号相关
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    // 管理平台
    {
        path: '/admin',
        component: Admin
    },
    // 用户管理
    {
        path: '/admin/users',
        component: AdminUser
    },
    {
        path: '/admin/users/add',
        component: AdminUserAdd
    },
    {
        path: '/admin/users/:id',
        component: AdminUserDetail
    },
    // 应用管理
    {
        path: '/admin/apps',
        component: AdminApp
    },
    // 系统
    {
        path: '/admin/system',
        component: System
    },
    // 项目
    {
        path: '/admin/project',
        component: Project
    },
    {
        path: '/admin/login',
        component: AdminLogin
    },
    // 消息
    {
        path: '/me/contacts',
        component: Contacts
    },
    {
        path: '/me/messages',
        component: Message
    },
    // 时间
    {
        path: '/time',
        component: TimeHome,
        children: [
            {
                path: '',
                component: TimeMain
            }
        ]
    }, {
        path: '/time/count',
        component: TimeCount
    }, {
        path: '/time/about',
        component: TimeAbout
    }, {
        path: '/time/history',
        component: TimeHistory
    }, {
        path: '/time/more',
        component: TimeMore
    }, {
        path: '/time/add',
        component: TimeAdd
    }
]

export default new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})
