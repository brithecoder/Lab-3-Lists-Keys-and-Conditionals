import React from 'react'
import type { TaskStatus, Task } from '../types';

interface TaskFilterProps {
  filterStatus: TaskStatus | 'all';
  setFilterStatus: (status: TaskStatus | 'all') => void;
  filterPriority: Task['priority'] | 'all';
  setFilterPriority: (priority: Task['priority'] | 'all') => void;
  statusOptions: (TaskStatus | 'all')[];
  priorityOptions: (Task['priority'] | 'all')[];
}

export default function TaskFilter({filterStatus, 
    setFilterStatus, 
    filterPriority, 
    setFilterPriority,
    statusOptions,
    priorityOptions
}: TaskFilterProps) {



    // 2. Define internal handlers that call the setters from props
    const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // We cast the value back to the correct type and pass it to the setter prop
        setFilterStatus(e.target.value as TaskStatus | 'all');
    };
    
    const handlePriorityFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterPriority(e.target.value as Task['priority'] | 'all');
    };
  
    
  return (
     <div className="flex space-x-4 mb-8 pt-3 justify-center">  
        {/* 🎯 STATUS DROPDOWN */}
     <div className="relative">
            <select
                // Use the prop value
                value={filterStatus}
                // Use the internal handler
                onChange={handleStatusFilter}
                // ... (rest of your className) ...
            >
                {/* Use the prop array */}
                {statusOptions.map(option => (
                    <option key={option} value={option}>
                        {option === 'all' ? 'All Statuses' : option.toUpperCase()}
                    </option>
                ))}
            </select>
            {/* ... (rest of the SVG/arrow div) ... */}
        </div>
   
        {/* 🎯 PRIORITY DROPDOWN */}
    <div className="relative">
            <select
                // Use the prop value
                value={filterPriority}
                // Use the internal handler
                onChange={handlePriorityFilter}
                // ... (rest of your className) ...
            >
                {/* Use the prop array */}
                {priorityOptions.map(option => (
                    <option key={option} value={option}>
                        {option === 'all' ? 'All Priorities' : option.toUpperCase()}
                    </option>
                ))}
            </select>
         </div>
    </div>
    
  )
}
