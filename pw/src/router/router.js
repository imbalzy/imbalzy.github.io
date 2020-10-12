export default [{
  path: '/',
  component: () => import('@/main.vue'),
  name: 'home',
  meta: {
    title: "Peter's Home"
  },
  children: [{
      name: 'projects',
      path: '/projects/',
      meta: {
        title: "Peter's Projects"
      },
      component: () => import('@/view/projects.vue'),

    },
    {
      name: 'publications',
      path: '/publications/',
      meta: {
        title: "Peter's Publications"
      },
      component: () => import('@/view/publications.vue'),
    },
    {
      name: 'resume',
      path: '/resume/',
      beforeEnter() {
        // Put the full page url including the protocol http(s) below
        window.location = "https://github.com/imbalzy/imbalzy.github.io/blob/master/resumes/Zhengyan%20Lyu%20resume%202021%20summer%20intern.pdf"
      },

      meta: {
        title: "Peter's Resume"
      },
    },


  ]
}, ]