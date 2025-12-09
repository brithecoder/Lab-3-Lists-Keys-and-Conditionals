import React from 'react'
import type { Task, TaskItemProps, TaskStatus } from '../types';




export default function TaskItem({
    id, 
    title, 
    description, 
    status, 
    priority, 
    dueDate,
    onStatusChange, 
    onDelete        
}: TaskItemProps){
  
 
    // Helper function to determine the next status when the button is clicked
   const getNextStatus = (currentStatus: TaskStatus): TaskStatus => {
        if (currentStatus === 'pending') return 'in-progress';
        if (currentStatus === 'in-progress') return 'completed';
        // If 'completed', loop back to 'pending'
        return 'pending'; 
    };

    // Helper to map priority to Tailwind color classes
    const getPriorityColor = (p: Task['priority']): string => {
        switch (p) {
            case 'high':
                return 'text-red-600 bg-red-100 border-red-300';
            case 'medium':
                return 'text-yellow-600 bg-yellow-100 border-yellow-300';
            case 'low':
                return 'text-green-600 bg-green-100 border-green-300';
            default:
                return 'text-gray-600 bg-gray-100 border-gray-300';
        }
    };

    // Helper to map status to Tailwind color classes (for the badge)
    const getStatusColor = (s: TaskStatus): string => {
        switch (s) {
            case 'completed':
                return 'bg-green-600';
            case 'in-progress':
                return 'bg-blue-600';
            case 'pending':
            default:
                return 'bg-gray-500';
        }
    };


  return (
    <div className="
            p-5 
            border border-gray-200 
            rounded-xl 
            shadow-md 
            bg-white 
            hover:shadow-lg 
            transition-shadow 
            duration-300
        ">
            {/* Header: Title and Status Badge */}
            <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-gray-800 break-words pr-2">
                    {title}
                </h2>
                <div className="flex items-center space-x-2">
                    {/* Status Badge */}
                    <div className={`
                        px-2 py-0.5 
                        rounded-full 
                        text-xs 
                        font-semibold 
                        text-white 
                        uppercase 
                        ${getStatusColor(status)}
                    `}>
                        {status.replace('-', ' ')}
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 whitespace-pre-wrap">
                {description}
            </p>

            {/* Footer: Priority and Due Date */}
            <div className="flex justify-between items-center text-sm border-t pt-3 border-gray-100">
                
                <p>
                    <span className="text-gray-500 font-medium mr-2">Priority:</span>
                    <span className={`
                        px-2 py-0.5 rounded-full 
                        text-xs font-semibold border
                        ${getPriorityColor(priority)}
                    `}>
                        {priority}
                    </span>
                </p>
                
                <p className="text-gray-700">
                    <span className="font-medium text-gray-500 mr-1">Due:</span>
                    {dueDate}
                </p>
            </div>

            {/* --- Action Buttons --- */}
            <div className="mt-4 flex space-x-3 justify-end">
                
                {/* Status Change Button */}
                <button 
                    className="
                        px-3 py-1 text-sm rounded-lg 
                        bg-indigo-600 text-white 
                        hover:bg-indigo-700 
                        transition duration-150
                    "
                    onClick={() => onStatusChange(id, getNextStatus(status))}
                >
                    {status === 'completed' ? 'Restart Task' : 'Update Status'}
                </button>
                
                {/* Delete Button */}
                <button 
                    className="
                        px-3 py-1 text-sm rounded-lg 
                        bg-red-500 text-white 
                        hover:bg-red-600 
                        transition duration-150
                    "
                    onClick={() => onDelete(id)}
                >
                    Delete
                </button>
            </div>
        </div>
  
  );
}