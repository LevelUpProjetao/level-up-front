import Home from '../views/Home.vue'
import HomeBusiness from '../views/HomeBusiness.vue'
import Login from '../views/Login.vue'
import CourseDetails from '../views/CourseDetails'
import CompanySkills from '../views/CompanySkills'
import Collaborators from '../views/Collaborators'
import CollaboratorSkillsList from '../views/CollaboratorSkillsList'
import CollaboratorFirstAccess from '../views/CollaboratorFirstAccess'

export default [
   {
      path: "*",
      redirect: "/login"
   },
   {
      path: '/home', // the path of this new page
      component: Home, // the one you imported
      name: 'home'
   },
   {
      path: '/home-business', // the path of this new page
      component: HomeBusiness, // the one you imported
      name: 'home-business'
   },
   {
      path: '/login', // the path of this new page
      component: Login, // the one you imported
      name: 'login'
   },
   {
      path: '/coursedetails', // the path of this new page
      component: CourseDetails, // the one you imported
      name: 'course'
   },
   {
      path: '/collaborator-skills', // the path of this new page
      component: CollaboratorSkillsList, // the one you imported
      name: 'collaborator-skills'
   },
   {
      path: '/collaborator-first-access', // the path of this new page
      component: CollaboratorFirstAccess, // the one you imported
      name: 'collaborator-first-access'
   },
   {
      path: '/company-skills', // the path of this new page
      component: CompanySkills, // the one you imported
      name: 'company-skills'
   },
   {
      path: '/collaborators', // the path of this new page
      component: Collaborators, // the one you imported
      name: 'collaborators'
   },
]