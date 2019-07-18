import Vue from "vue";
import Router from "vue-router";

const Index = () => import("@/Index");
const Curriculo = () => import("@/Curriculo");

Vue.use(Router);
let router = new Router({
    routes:[       
        {
            path:"/",
            name:"Index",
            component: Index
        },
        {
            path:"/",
            name:"Curriculo",
            component:Curriculo
        }
    ]
});

export default router;