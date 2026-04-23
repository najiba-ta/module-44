import AddTask from '@/component/AddTask';
import TaskCard from '@/component/TaskCard';
import { createATask } from '@/lib/action';
import { getTask } from '@/lib/task';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const TaskPage = async () => {
    const task = await getTask();
    console.log(task);
    return (
        <div>
            <h2>task: {task.length} </h2>
            <AddTask createATask ={createATask}></AddTask>
            <Link href="/task/new">
            <Button variant='secondary'>Add Task</Button></Link>
            <div className='grid grid-cols-3 gap-4 pt-8'>
                {
                    task.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskPage;