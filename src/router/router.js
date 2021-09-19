export default [
  {
    path: "/",
    component: () => import("@/main.vue"),
    name: "home",
    meta: {
      title: "Peter's Home"
    },
    children: [
      {
        name: "projects",
        path: "/projects",
        meta: {
          title: "Peter's Projects"
        },
        component: () => import("@/view/projects.vue")
      },
      {
        name: "resume",
        path: "/resume",
        meta: {
          title: "Peter's Resume"
        },
        component: () => import("@/view/resume.vue")
      }
    ]
  }
];
