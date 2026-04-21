import AddTask from '@/component/AddTask';
import TaskCard from '@/component/TaskCard';
import { createATask } from '@/lib/action';
import { getTask } from '@/lib/task';
import React from 'react';

const TaskPage = async () => {
    const task = await getTask();
    
    return (
        <div>
            <h2>task: {task.tasks.length} </h2>
            <AddTask createATask ={createATask}></AddTask>
            <div className='grid grid-cols-3 gap-4 pt-8'>
                {
                    task.tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskPage;