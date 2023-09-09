package caio.fasolak;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;

@ApplicationScoped
public final class TaskService {

    public List<Task> list(){
        return Task.listAll();
    }

    @Transactional
    public void newTask(TaskDTO taskDTO){
        Task task = new Task();
        task.name = taskDTO.getName();
        task.status = taskDTO.getStatus();
        task.done = taskDTO.getDone();
        task.priority = taskDTO.getPriority();
        task.description = taskDTO.getDescription();
        task.persist();
    }

    @Transactional
    public void deleteTask(int id){

    }
}
