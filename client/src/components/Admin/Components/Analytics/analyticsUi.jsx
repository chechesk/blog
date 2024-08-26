import React, { useState } from 'react'
import { Users, Eye, Clock, MousePointer } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

// Simulated data - replace with actual API call to Google Analytics
const analyticsData = {
  users: 1234,
  pageViews: 5678,
  avgSessionDuration: '2:45',
  bounceRate: '45%',
  visitsOverTime: [
    { date: '2023-01', visits: 400 },
    { date: '2023-02', visits: 300 },
    { date: '2023-03', visits: 500 },
    { date: '2023-04', visits: 280 },
    { date: '2023-05', visits: 590 },
    { date: '2023-06', visits: 320 },
  ],
  topPages: [
    { url: '/home', views: 1200, avgTime: '1:30' },
    { url: '/products', views: 800, avgTime: '2:15' },
    { url: '/about', views: 600, avgTime: '1:45' },
    { url: '/contact', views: 400, avgTime: '1:00' },
    { url: '/blog', views: 300, avgTime: '3:00' },
  ],
  devices: [
    { name: 'Mobile', value: 4300 },
    { name: 'Desktop', value: 2500 },
    { name: 'Tablet', value: 980 },
  ]
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MetricCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="text-blue-500 mb-2">{icon}</div>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">{title}</h2>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  )
}

export default function Component() {
  const [data] = useState(analyticsData)

  return (
    <div className="ml-14 mx-4 p-4 space-y-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Panel de Usuario - Métricas de Google Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Usuarios" value={data.users} icon={<Users className="h-6 w-6" />} />
        <MetricCard title="Vistas de Página" value={data.pageViews} icon={<Eye className="h-6 w-6" />} />
        <MetricCard title="Duración Media de Sesión" value={data.avgSessionDuration} icon={<Clock className="h-6 w-6" />} />
        <MetricCard title="Tasa de Rebote" value={data.bounceRate} icon={<MousePointer className="h-6 w-6" />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Visitas a lo largo del tiempo</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.visitsOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visits" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Dispositivos Conectados</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.devices}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.devices.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Páginas Más Vistas</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">URL</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Vistas</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">Tiempo Promedio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.topPages.map((page, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 text-sm text-gray-800">{page.url}</td>
                  <td className="py-2 px-4 text-sm text-gray-600">{page.views}</td>
                  <td className="py-2 px-4 text-sm text-gray-600">{page.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}