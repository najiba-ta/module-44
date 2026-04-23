import { newTaskAction } from '@/lib/action';
import { Button, Input, Label, ListBox, Modal, TextField ,Select, Form} from '@heroui/react';
import React from 'react';

const NewTask = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <h2 className="text-5xl">Add a new task</h2>
            <div>
                 <Form action={newTaskAction} className="flex flex-col gap-4">
                                                    <TextField isRequired 
                                                    minLength={8}
                                                     className="w-full" name="title" type="text">
                                                        <Label>Title</Label>
                                                        <Input placeholder="Enter your task title" />
                                                    </TextField>
                                                    <TextField className="w-full" name="title" type="text">
                                                        <Label>Task Description</Label>
                                                        <Input placeholder="Enter your description" />
                                                    </TextField>
                                                    <Select name="priority" className="w-[256px]" placeholder="Select one">
                                                        <Label>Priority</Label>
                                                        <Select.Trigger>
                                                            <Select.Value />
                                                            <Select.Indicator />
                                                        </Select.Trigger>
                                                        <Select.Popover>
                                                            <ListBox>
                                                                <ListBox.Item id="low" textValue="Low">
                                                                    Low
                                                                    <ListBox.ItemIndicator />
                                                                </ListBox.Item>
                                                                <ListBox.Item id="medium" textValue="Medium">
                                                                    Medium
                                                                    <ListBox.ItemIndicator />
                                                                </ListBox.Item>
                                                                <ListBox.Item id="high" textValue="High">
                                                                    High
                                                                    <ListBox.ItemIndicator />
                                                                </ListBox.Item>
                                                            </ListBox>
                                                        </Select.Popover>
                                                    </Select>
                                                    <Select name="status" className="w-[256px]" placeholder="Select one">
                                                        <Label>Status</Label>
                                                        <Select.Trigger>
                                                            <Select.Value />
                                                            <Select.Indicator />
                                                        </Select.Trigger>
                                                        <Select.Popover>
                                                            <ListBox>
                                                                <ListBox.Item id="pending" textValue="Pending">
                                                                    Pending
                                                                    <ListBox.ItemIndicator />
                                                                </ListBox.Item>
                                                                <ListBox.Item id="progress" textValue="Progress">
                                                                    Progress
                                                                    <ListBox.ItemIndicator />
                                                                </ListBox.Item>
                                                                <ListBox.Item id="completed" textValue="Completed">
                                                                    Completed
                                                                    <ListBox.ItemIndicator />
                                                                </ListBox.Item>
                                                            </ListBox>
                                                        </Select.Popover>
                                                    </Select>
                                                    <TextField className="w-full" name="assignedTo">
                                                        <Label>Assigned To</Label>
                                                        <Input placeholder="Task Assigned To" />
                                                    </TextField>
                                                        <Button slot="close" variant="secondary">
                                                            Cancel
                                                        </Button>
                                                        <Button slot="close" type="submit">Submit Task</Button>
                                                 
                                                </Form>
            </div>
        </div>
    );
};

export default NewTask;