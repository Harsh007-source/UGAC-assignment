'use client';
import { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../utils/storage';  //getTasks func to extract the list of saved tasks from localStorage
import Link from 'next/link';  // navigate between pages without reloading the page

export default function Dashboard() {
  const [tasks, setTasks] = useState([]); //'task' initialized as empty array

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleDelete = (id) => {  // it is called when user clicks the delete button for a task
    deleteTask(id);
    setTasks(getTasks());
  };

  return (
    <div>
      <h1>Task Dashboard</h1>
      <Link href="/create">+ Create Task</Link>  
      <ul>  // unordered list to display all tasks as list items
        {tasks.map((task) => (
          <li key={task.id}>    // display the task in bold along with its status and priority
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
