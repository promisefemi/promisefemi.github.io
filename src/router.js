import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [{
            path: "/",
            component: Home,
            name: "home"
        },
        {
            path: "/about",
            component: About,
            name: "about"
        },
        {
            path: "/contact",
            component: Contacts,
            name: "contact"
        }, {
            path: "/skills",
            component: Skills,
            name: "skills"
        }
    ]
})

export default router