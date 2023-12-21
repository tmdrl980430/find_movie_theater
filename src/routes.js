import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const dayDashBoard = React.lazy(() => import('./views/dayDashBoard/dayDashBoard'))
const monthDashBoard = React.lazy(() => import('./views/monthDashBoard/monthDashBoard'))
const MealTable = React.lazy(() => import('./views/mealTable/MealTable'))
const SoldOutManagement = React.lazy(() => import('./views/soldOut/SoldOutManagement'))
const TicketRegistration = React.lazy(() => import('./views/ticketregistration/TicketRegistration'))
const VersionRegistration = React.lazy(() =>
  import('./views/versionRegistration/VersionRegistration'),
)

const routes = [
  { path: '/', exact: true, name: 'Home' },
]

export default routes
