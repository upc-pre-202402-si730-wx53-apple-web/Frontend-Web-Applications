import { createRouter, createWebHistory } from "vue-router";
import LoginForm from '../iam/components/login-form.component.vue'
import RegisterForm from '../iam/components/register-form.component.vue'
import MessagePanel from "../components/messaging/MessagePanel.vue";
import Workspace from '../workspace/components/workspace-information.component.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: LoginForm },
        { path: '/register', component: RegisterForm },
        { path: '/messages', component: MessagePanel },
        { path: '/workspace', component: Workspace },
    ]
});

export default router;