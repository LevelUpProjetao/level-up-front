import Home from '../views/Home.vue'
import HomeBusiness from '../views/HomeBusiness.vue'
import Login from '../views/Login.vue'
import CourseDetails from '../views/CourseDetails'
import CollaboratorSkillsList from '../views/CollaboratorSkillsList'
import CollaboratorFirstAccess from '../views/CollaboratorFirstAccess'

export default [
  { 
    meta: {
      requiresAuth: false,
    },
    path: "*",
    redirect: "/login"
  },
  {
    meta: {
      requiresAuth: true 
    },
    path: '/home', // the path of this new page
    component: Home, // the one you imported
    name: 'home'
  },
  {
   meta: {
    requiresAuth: true
   },
   path: '/home-business', // the path of this new page
   component: HomeBusiness, // the one you imported
   name: 'home'
  },
  {
    meta: {
      requiresAuth: false,
    },
    path: '/login', // the path of this new page
    component: Login, // the one you imported
    name: 'about'
 },
 {
   meta: {
    requiresAuth: true,
   },
   path: '/coursedetails', // the path of this new page
   component: CourseDetails, // the one you imported
   name: 'course'
},
{
   meta: {
    requiresAuth: true,
   },
   path: '/collaborator-skills', // the path of this new page
   component: CollaboratorSkillsList, // the one you imported
   name: 'collaborator-skills'
},
{
   meta: {
    requiresAuth: true,
   },
   path: '/collaborator-first-access', // the path of this new page
   component: CollaboratorFirstAccess, // the one you imported
   name: 'collaborator-first-access'
}
]