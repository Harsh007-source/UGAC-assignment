'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { saveTask } from '../../utils/storage';

export default function CreateTask() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    tags: '',
    status: 'Todo',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTask({ ...form, id: Date.now().toString(), createdAt: new Date().toISOString() });
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Task</h1>
      <input name="title" placeholder="Title" required onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input type="date" name="dueDate" onChange={handleChange} />
      <select name="priority" onChange={handleChange}>
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <input name="tags" placeholder="Tags (comma separated)" onChange={handleChange} />
      <select name="status" onChange={handleChange}>
        <option>Todo</option><option>In Progress</option><option>Done</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
}