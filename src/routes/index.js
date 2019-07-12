import Vue from "vue";
import Router from "vue-router";

const Index = () => import("@/Index");

Vue.use(Router);
let t = localStorage.getItem("token");
let router = new Router({
    routes:[
       
        {
            path:"/",
            name:"Index",
            component: !t ? Index : Home
        }
    ]
});

export default router;