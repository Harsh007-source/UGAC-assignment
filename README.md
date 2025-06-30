# UGAC-assignment
**Task Manager App**

I tried building a simple task manager using Next.js. 

I deployed it here:
https://ugac-assignment-three.vercel.app/

**Tech Stack**

-Next.js with App Router

-React useState & useEffect

-LocalStorage for saving data(no backend used)

-Plain CSS (no Tailwind)

---

**Features**

-Add a task 

-Edit a task

-Delete a task

-See all your tasks in a list

-Tasks saved in your browser, even if you reload tasks persists on dashboard.

Each task has:

-Title

-Description

-Due Date

-Priority (Low / Medium / High)

-Tags (comma separated)

-Status (Todo / In Progress / Done)


---

**Pages**

Route  

/

This is the homepage .i.e. Dashboard. You will see a list of task you created

/create

This is the "Add Task" page, you will get a form to fill in and create a new task


/task/[id]

It is a dynamic route, it changes based on which task you are editing.
This page shows the edit form with pre-filled values for that specific task

**How Data is Stored :**

I used localStorage to store all tasks. So if you refresh, your tasks won’t go away.
(but if you clear your browser cache, it will)


**Live Link**

I deployed it here:
https://ugac-assignment-three.vercel.app/

I didn’t add filtering/sorting yet.

