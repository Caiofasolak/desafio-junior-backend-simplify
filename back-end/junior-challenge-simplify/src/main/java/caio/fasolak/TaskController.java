package caio.fasolak;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("/tasks")
public class TaskController {

    @Inject
    TaskService taskService;


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Task> list() {
        return taskService.list();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public void newTask(TaskDTO taskDTO){
        taskService.newTask(taskDTO);
    }

    @DELETE
    @Transactional
    public void deleteTask(){

    }
}
