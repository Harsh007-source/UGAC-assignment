'use client'; 

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getTasks, updateTask } from '../../../utils/storage';

export default function EditTask() {
  // Define our EditTask component
  const router = useRouter();
  const { id } = useParams(); 
  // Extract the dynamic `id` from the URL (e.g., /task/123 will give id = "123")
  const [form, setForm] = useState(null);
  // This state will hold the current task's data to edit. Initially set to null.

  useEffect(() => {
    const task = getTasks().find((t) => t.id === id);
    // Fetch all tasks and find the one that matches the id from the URL
    if (task) setForm(task);
    // If the task exists, set it as the current form data to display
  }, [id]);
  // The effect will re-run if the `id` value ever changes

  const handleChange = (e) => {   // Called whenever any input field is changed
    setForm({ ...form, [e.target.name]: e.target.value });   // Update the `form` state by copying existing values (...form)
    // and changing only the field that triggered the change
  };

  const handleSubmit = (e) => { // Called when the user submits the form
    e.preventDefault(); // prevent the page from reloading
    updateTask(form);
    router.push('/');  // Navigate back to the homepage/dashboard after saving
  };
  // show a loading message
  if (!form) return <p>Loading...</p>;  

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Task</h1>
      <input name="title" value={form.title} onChange={handleChange} required />  // text input for task title required to be filled
      <textarea name="description" value={form.description} onChange={handleChange} />  // text area for description 
      <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />  // data input for selecting due date
      <select name="priority" value={form.priority} onChange={handleChange}>  // drop down to select task priority
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <input name="tags" value={form.tags} onChange={handleChange} />  // input for tags
      <select name="status" value={form.status} onChange={handleChange}>  // dropdown to select curr task status
        <option>Todo</option><option>In Progress</option><option>Done</option>
      </select>   
      <button type="submit">Update</button>
    </form>
  );
}
