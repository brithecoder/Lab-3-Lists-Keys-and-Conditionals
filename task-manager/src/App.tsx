import { useState } from 'react'
import type {Task, TaskStatus} from './components/types'
import './App.css'
import TaskList from './components/TaskList/TaskList'
import TaskFilter from './components/TaskFilter/TaskFilter'

const funFakeTasks: Task[] = [
  {
    id: 't-404',
    title: 'Hunt the Missing Semicolon 🕵️‍♀️',
    description: "A single, rogue semicolon has vanished from the main component file. Find it before the build explodes. Start with the 'src/app' directory.",
    status: 'in-progress' ,
    priority: 'high',
    dueDate: '12/10/2025', 
  },
  {
    id: 't-301',
    title: 'Give the Buttons Swag 😎',
    description: 'Implement a new CSS library (or just Flexbox) to make all primary buttons look incredibly stylish and responsive. No more boring rectangles!',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '12/15/2025', 
  },
  {
    id: 't-500',
    title: 'Wrangle the CSS Noodle 🍜',
    description: 'The global stylesheet is spaghetti. Spend the morning refactoring legacy CSS into clean, modular SCSS/CSS-in-JS. Bring coffee.',
    status: 'pending',
    priority: 'high',
    dueDate: ' 12/22/2025', 
  },
  {
    id: 't-200',
    title: 'Meme Budget Approval 💸',
    description: "Submit the proposal for next quarter's meme budget to the management team. Must include at least three charts comparing trending meme formats.",
    status: 'completed',
    priority: 'low',
    dueDate: '01/01/2026', 
  },
  {
    id: 't-202',
    title: 'TypeScript Type Party 🎉',
    description: 'Go through the remaining untyped utility functions and slap some rigorous TypeScript interfaces on them. Everything must be strongly typed!',
    status: 'pending',
    priority: 'medium',
    dueDate: '12/18/2025', 
  },
];
function App() {
  const [taskList, setTaskList] = useState(funFakeTasks);
  // 1. State for Filters
     const [filterStatus, setFilterStatus] = useState<TaskStatus | 'all'>('all');
      const [filterPriority, setFilterPriority] = useState<Task['priority'] | 'all'>('all');
    
    
      // Available options for the dropdowns
      const statusOptions: (TaskStatus | 'all')[] = ['all', 'pending', 'in-progress', 'completed'];
      const priorityOptions: (Task['priority'] | 'all')[] = ['all', 'high', 'medium', 'low'];
    

      // --- Filter Logic for Priority Button ---
    // The core filtering logic runs whenever taskList, filterStatus, or filterPriority changes
     const filteredTasks = taskList.filter(task => {
    // 2. The filtering logic runs against the state variables defined above
    const statusMatch = filterStatus === 'all' || task.status === filterStatus;
    const priorityMatch = filterPriority === 'all' || task.priority === filterPriority;
    return statusMatch && priorityMatch;
  });
    
 
  // 3. IMPLEMENTATION: State update logic for status change
  const handleStatusChange = (taskId: string, newStatus: TaskStatus): void => {
    // Map over the existing tasks. When the IDs match, update the status.
    const updatedTasks = taskList.map(task => {
      if (task.id === taskId) {
        return { ...task, status: newStatus }; // Create a new object with the updated status
      }
      return task; // Return all other tasks unchanged
    });
    setTaskList(updatedTasks);
  };
  
  // 4. IMPLEMENTATION: State update logic for deletion
  const handleDeleteTask = (taskId: string): void => {
    // Filter out the task whose ID matches the one being deleted
    const updatedTasks = taskList.filter(task => task.id !== taskId);
    setTaskList(updatedTasks);
  };
  return (
   
  <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">Fun Task Dashboard</h1>
      
      <div className="flex space-x-4 mb-8">
        
      <TaskFilter 
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
        statusOptions={statusOptions}
        priorityOptions={priorityOptions}
      />
       
      <TaskList 
        tasks={filteredTasks} 
        onStatusChange={handleStatusChange} 
        onDelete={handleDeleteTask} 
      />
    </div>
  </div>
  );
}

export default App
