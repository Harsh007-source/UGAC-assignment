'use client';  // file will be treated as client component so that it uses useState and useRouter
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {saveTask} from '../../utils/storage';   // saves new task data to local storage

export default function CreateTask() {  // this is the page where user creates a new task
  const router = useRouter();  
  const [form, setForm] = useState({
    title: '',  // required
    description: '',  //optional
    dueDate: '',
    priority: 'Low',
    tags: '',
    status: 'Todo',  // default set to Todo
  });

  const handleChange = (e) => {   // updates the form state whenever any input field changes
    setForm({ ...form, [e.target.name]: e.target.value });
    //  keeps all existing form values, dynamically updates only changed field using inputs name attribute  e.target.value assigns new value entered by user
  };

  const handleSubmit = (e) => {   // func to handle form submission when the user clicks Save
    e.preventDefault(); // prevents the browser from reloading the page on form submission
    saveTask({ ...form, id: Date.now().toString(), createdAt: new Date().toISOString() });
    router.push('/'); // after saving the task , navigates the user back to dashboard
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Task</h1>
      <input name="title" placeholder="Title" required onChange={handleChange} />  // input field for the task title
      <textarea name="description" placeholder="Description" onChange={handleChange} />  //muti line text input for the task description
      <input type="date" name="dueDate" onChange={handleChange} /> // date picker input for due date
      <select name="priority" onChange={handleChange}>    // dropdown menu fto select task priority
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <input name="tags" placeholder="Tags (comma separated)" onChange={handleChange} /> // text for tags
      <select name="status" onChange={handleChange}>    // dropdown menu for selecting task status
        <option>Todo</option><option>In Progress</option><option>Done</option>
      </select>            
      <button type="submit">Save</button>  
    </form>
  );
}
