
import React, { useState } from 'react';

const TaskItem = ({ task, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDesc, setEditDesc] = useState(task.description);

  const toggleComplete = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = () => {
    if (window.confirm('Delete this task?')) {
      setTasks(prev => prev.filter(t => t.id !== task.id));
    }
  };

  const handleEdit = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id
          ? { ...t, title: editTitle, description: editDesc }
          : t
      )
    );
    setIsEditing(false);
  };

  return (
    <div
      className={`task-item fade-in ${task.completed ? 'completed' : ''} priority-${task.priority}`}
    >
      {isEditing ? (
        <>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          {task.dueDate && (
            <div className="due-date">Due: {task.dueDate}</div>
          )}
          {task.tag && (
            <div className="tags">#{task.tag}</div>
          )}
          <small>{new Date(task.createdAt).toLocaleString()}</small>
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={toggleComplete}>
              {task.completed ? 'Mark Pending' : 'Mark Complete'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;




