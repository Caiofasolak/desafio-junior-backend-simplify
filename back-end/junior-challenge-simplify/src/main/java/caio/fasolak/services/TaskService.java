package caio.fasolak.services;

import caio.fasolak.entities.Task;
import caio.fasolak.repositories.TaskRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@ApplicationScoped
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public final class TaskService {

    @Inject
    TaskRepository taskRepository;

    public List<Task> listAll(){
       return taskRepository.findAll().list();
    }

    @Transactional
    public Task newTask(Task task){
        taskRepository.persist(task);
        return task;
    }

    @Transactional
    public void deleteTask(Long id){
        taskRepository.deleteById(id);
    }

    @Transactional
    public void editTask(Long id, Task task){
        Task savedTask = Task.findById(id);
        if(savedTask == null){
            throw new NotFoundException();
        }
        savedTask.name = task.name;
        savedTask.description = task.description;
        savedTask.status = task.description;
        savedTask.done = task.done;
        savedTask.priority = task.priority;
    }
}
