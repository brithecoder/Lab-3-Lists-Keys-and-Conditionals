# Task List React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.To run this application you want to cd into the task manager file and then do a npm run dev this will provide a local host port that when opened in the browser will display the site. 


## Reflection Questions

### How did you ensure unique keys for your list items?
I insured unique ID by simulating an ID coming from the database.

### What considerations did you make when implementing the filtering functionality?

I made sure to include results from both filter properties so If both were applied the user would get results according to both filters.

### How did you handle state updates for task status changes?
I passed a getNextStatus function that would circulate through the status options when the update status button is pushed.

### What challenges did you face when implementing conditional rendering?