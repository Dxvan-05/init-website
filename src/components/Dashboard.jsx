import React from 'react'
import { BarChart, Users, TicketCheck } from 'lucide-react'
import initStar from '../assets/init-star.png'
import { Route, Routes, Link } from 'react-router-dom'
import ExecomDashboard from './ExecomDashboard'
import EventsDashBoard from './EventsDashBoard'


function Dashboard() {
    return (
        <div className='flex'>
            <aside className="flex min-h-screen min-w-[170px] w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
                <Link to={'/'}>
                    <img src={initStar} className='h-[56px] w-[56px]' />
                </Link>
                <div className="mt-6 flex flex-1 flex-col justify-between">
                    <nav className="-mx-3 space-y-6 ">
                        <div className="space-y-3 ">
                            <label className="px-3 text-xs font-semibold uppercase text-white">analytics</label>
                            <Link
                                to={'/admin'}
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
                                href="#"
                            >
                                <BarChart className="h-5 w-5" aria-hidden="true" />
                                <span className="mx-2 text-sm font-medium">Dashboard</span>
                            </Link>

                        </div>
                        <div className="space-y-3 ">
                            <label className="px-3 text-xs font-semibold uppercase text-white">content</label>
                            <Link
                                to={'/admin/execom'}
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >
                                <Users className="h-5 w-5" aria-hidden="true" />
                                <span className="mx-2 text-sm font-medium">Execom</span>
                            </Link>
                            <Link
                                to={'/admin/events'}
                                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                                href="#"
                            >
                                <TicketCheck className="h-5 w-5" aria-hidden="true" />
                                <span className="mx-2 text-sm font-medium">Events</span>
                            </Link>

                        </div>

                    </nav>
                </div>
            </aside>
            <Routes >
                <Route path='/' exact element={<h1>Google analytics iframe here</h1>} />
                <Route path='/execom' exact element={<ExecomDashboard />} />
                <Route path='/events' exact element={<EventsDashBoard />} />

            </Routes>
        </div>

    )
}

export default Dashboard