package caio.fasolak.controllers;

import caio.fasolak.entities.Task;
import caio.fasolak.services.TaskService;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("/api/tasks")
public class TaskController {

    @Inject
    TaskService taskService;


    @GET
    public List<Task> listAll() {
        return taskService.listAll();
    }

    @POST
    public Task newTask(Task task){
         taskService.newTask(task);
         return task;
    }

    @DELETE
    @Path("{id}")
    public void deleteTask(@PathParam("id")Long id){
        taskService.deleteTask(id);
    }

    @PATCH
    @Path("{id}")
    public void patchTask(@PathParam("id")Long id, Task task){
        taskService.editTask(id, task);
    }
}
