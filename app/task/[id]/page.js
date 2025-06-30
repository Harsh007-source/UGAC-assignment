'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getTasks, updateTask } from '../../../utils/storage';

export default function EditTask() {
  const router = useRouter();
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const task = getTasks().find((t) => t.id === id);
    if (task) setForm(task);
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(form);
    router.push('/');
  };

  if (!form) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Task</h1>
      <input name="title" value={form.title} onChange={handleChange} required />
      <textarea name="description" value={form.description} onChange={handleChange} />
      <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <input name="tags" value={form.tags} onChange={handleChange} />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Todo</option><option>In Progress</option><option>Done</option>
      </select>
      <button type="submit">Update</button>
    </form>
  );
}