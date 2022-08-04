package com.counselor.scheduler.controllers;

import com.counselor.scheduler.services.ScheduleService;
import com.counselor.scheduler.models.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Hashtable;

@Controller
public class StudentController {

//    String[] subjects = {"Art", "Elective", "English", "Foreign Language", "Health", "History", "Math",  "PE", "Life Science", "Physical Science", "Science, But Type Does Not Matter"};
    Hashtable<String, String[]> subjects = new Hashtable<>();
    ScheduleService scheduleService;
    private int[][] officialSchedule;

    private void initializeSubjects(){
        subjects.put("Art", new String[] {"Ceramics", "Drawing and Painting"});
        subjects.put("Math", new String[] {"Int 1", "Int 2", "Int", "AP Calc AB"});
    }

    @Autowired
    StudentController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
        initializeSubjects();
    }

    @GetMapping("/")
    public String welcome() {
        return "welcome";
    }

    @GetMapping(path="/home" )
    public String home(Model model){
        System.out.println("|||||||||||||||||||***********Get Request***********||||||||||||||||||||");
        model.addAttribute("myVar", "Hello from controller");
        model.addAttribute("subjects", subjects);

        for(String key: subjects.keySet().toArray(new String[0])){
            System.out.println(key);
        }

        return "home";
    }

    @PostMapping(path ="/result")
    public String formSubmit(@ModelAttribute Student student, Model model){
        officialSchedule = this.scheduleService.getSchedule();
        model.addAttribute("schedule", officialSchedule);
        return "result";
    }

    @GetMapping(path = "/result")
    public String resultPage(Model model){
        model.addAttribute("schedule", officialSchedule);
        return "result";
    }

//    Create post mapping that will return result.html at /result endpoint


    // @RequestBody
}
// Powershell GET command
// Invoke-WebRequest -Uri http://localhost:8080 -UseBasicParsing

// Bash GET Command
// curl localhost:8080
// Bash POST command
// curl -d '{"fname":"Alex", "lname":"Joslin"}' -H 'Content-Type: application/json' localhost:8080












