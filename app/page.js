'use client';
import { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../utils/storage';
import Link from 'next/link';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleDelete = (id) => {
    deleteTask(id);
    setTasks(getTasks());
  };

  return (
    <div>
      <h1>Task Dashboard</h1>
      <Link href="/create">+ Create Task</Link>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.status} - {task.priority}
            <br />
            Due: {task.dueDate}
            <br />
            Tags: {task.tags}
            <br />
            <Link href={`/task/${task.id}`}>Edit</Link>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}