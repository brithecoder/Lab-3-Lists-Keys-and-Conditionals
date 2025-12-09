import React from 'react';
import type {TaskListProps,} from '../types';
import TaskItem from '../TaskItem/TaskItem';


export default function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  return (
        <div className="w-full max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Development Tasks</h1>
            
            <div className="space-y-3">
                {tasks.map((task) => (
                    <TaskItem 
                        key={task.id} 
                        //  Spread all task properties
                        {...task}
                        //  Pass the handlers received from the parent
                        onStatusChange={onStatusChange}
                        onDelete={onDelete}
                    />
                ))}
            </div>
       </div>
  
  )
}
