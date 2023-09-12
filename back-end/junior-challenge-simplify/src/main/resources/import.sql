create sequence task_sequence start with 1 increment by 1;
insert into Task(id, name,  description, done, status, priority)
values(nextval('task_sequence'), 'Task 1', 'Task 1 Description', false, 'TODO', 'LOW');
insert into Task(id, name,  description, done, status, priority)
values(nextval('task_sequence'), 'Task 2', 'Task 2 Description', true, 'DONE', 'HIGH');
insert into Task(id, name,  description, done, status, priority)
values(nextval('task_sequence'), 'Task 3', 'Task 3 Description', false, 'INPROGRESS', 'MEDIUM');