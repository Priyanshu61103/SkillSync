package com.internprep.InternPrepApplication.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internprep.InternPrepApplication.Dto.JobEntityDto;
import com.internprep.InternPrepApplication.Entity.JobEntity;
import com.internprep.InternPrepApplication.Service.JobService;

@RestController
@RequestMapping("/job")
public class JobController {

    @Autowired 
    private JobService jobService;

    @PostMapping("/createJob")
    ResponseEntity<String> createJob(@ModelAttribute JobEntityDto jobEntityDto) throws IOException{
        return ResponseEntity.status(HttpStatus.CREATED).body(jobService.createJob(jobEntityDto));
    }

    @GetMapping("/getAllJobs")
    ResponseEntity<List<JobEntity>> getAllJobs(){
        return ResponseEntity.status(null != jobService.getAllJobs() ? HttpStatus.OK : HttpStatus.NOT_FOUND).body(jobService.getAllJobs());
    }


}
