import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import SearchBar from './SearchBar';
import { loadTasks, saveTasks } from '../utils/localStorage';

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tasks, setTasks] = useState(loadTasks());
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const filteredTasks = tasks
    .filter(task => {
      if (filter === 'Completed') return task.completed;
      if (filter === 'Pending') return !task.completed;
      return true; // All
    })
    .filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="dashboard">
      <h2>Task Dashboard</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TaskForm setTasks={setTasks} tasks={tasks} />
      <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default Dashboard;