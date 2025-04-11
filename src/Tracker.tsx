import React, { useState, useMemo } from 'react';
import { UserPlus, Users, Trash2, GraduationCap, BookOpen, UserCheck } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface StudentCredential {
  id: string;
  name: string;
  email: string;
  studentId: string;
  course: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Tracker() {
  const initialCredentials: StudentCredential[] = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@student.edu',
      studentId: 'CS2024001',
      course: 'Computer Science'
    },
    {
      id: '2',
      name: 'Emma Wilson',
      email: 'emma.wilson@student.edu',
      studentId: 'DS2024002',
      course: 'Data Science'
    },
    {
      id: '3',
      name: 'Michael Chen',
      email: 'michael.chen@student.edu',
      studentId: 'AI2024003',
      course: 'Artificial Intelligence'
    },
    {
      id: '4',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@student.edu',
      studentId: 'ML2024004',
      course: 'Machine Learning'
    }
  ];

  const [credentials, setCredentials] = useState<StudentCredential[]>(initialCredentials);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    course: ''
  });

  const courseDistribution = useMemo(() => {
    const distribution = credentials.reduce((acc, curr) => {
      acc[curr.course] = (acc[curr.course] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(distribution).map(([name, value]) => ({
      name,
      value
    }));
  }, [credentials]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCredential: StudentCredential = {
      id: Date.now().toString(),
      ...formData
    };
    setCredentials([...credentials, newCredential]);
    setFormData({ name: '', email: '', studentId: '', course: '' });
  };

  const handleDelete = (id: string) => {
    setCredentials(credentials.filter(cred => cred.id !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Users className="h-8 w-8 text-blue-600" />
            Student Credentials Dashboard
          </h1>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-semibold text-gray-900">{credentials.length}</p>
              </div>
              <UserCheck className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Courses</p>
                <p className="text-2xl font-semibold text-gray-900">{courseDistribution.length}</p>
              </div>
              <BookOpen className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Latest Registration</p>
                <p className="text-lg font-semibold text-gray-900 truncate">
                  {credentials[credentials.length - 1]?.course || 'N/A'}
                </p>
              </div>
              <GraduationCap className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Charts Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Course Distribution</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={courseDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {courseDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Add New Credential Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-green-600" />
              Add New Student
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter student's full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="student@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Student ID</label>
                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter student ID"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select a course</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Machine Learning">Machine Learning</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Student
              </button>
            </form>
          </div>
        </div>

        {/* Credentials List */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Student Credentials</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {credentials.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No credentials added yet</p>
            ) : (
              credentials.map(cred => (
                <div key={cred.id} className="border rounded-lg p-4 relative hover:shadow-md transition-shadow">
                  <button
                    onClick={() => handleDelete(cred.id)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <h3 className="font-medium text-lg text-gray-900">{cred.name}</h3>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <p>Email: {cred.email}</p>
                    <p>Student ID: {cred.studentId}</p>
                    <p>Course: {cred.course}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracker;