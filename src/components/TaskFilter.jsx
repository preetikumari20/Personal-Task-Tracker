import React from 'react';

function TaskFilter({ filter, setFilter, tasks }) {
  const count = type => tasks.filter(t => {
    if (type === 'All') return true;
    if (type === 'Completed') return t.completed;
    return !t.completed;
  }).length;

  return (
    <div className="task-filter">
      {['All', 'Completed', 'Pending'].map(type => (
        <button
          key={type}
          className={filter === type ? 'active' : ''}
          onClick={() => setFilter(type)}
        >
          {type} ({count(type)})
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;