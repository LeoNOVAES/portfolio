import Vue from "vue";
import Router from "vue-router";

const Index = () => import("@/Index");
<<<<<<< HEAD
=======
const Curriculo = () => import("@/Curriculo");
>>>>>>> 9251ec880ea39499e7f7e3f21dab5a456383567c

Vue.use(Router);
let router = new Router({
    routes:[       
        {
            path:"/",
            name:"Index",
            component: Index
<<<<<<< HEAD
        }   
    
=======
        },
        {
            path:"/",
            name:"Curriculo",
            component:Curriculo
        }
>>>>>>> 9251ec880ea39499e7f7e3f21dab5a456383567c
    ]
});

export default router;