package com.internprep.InternPrepApplication.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internprep.InternPrepApplication.Dto.InternshipEntityDto;
import com.internprep.InternPrepApplication.Entity.InternshipEntity;
import com.internprep.InternPrepApplication.Service.InternshipService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/internship")
public class InternshipController {

    @Autowired
    private InternshipService internshipService;

    @PostMapping("/createInternship")
    ResponseEntity<String> createInternship(@ModelAttribute InternshipEntityDto internshipEntityDto) throws IOException{
        return ResponseEntity.status(HttpStatus.CREATED).body(internshipService.createInternship(internshipEntityDto));

    }

    @GetMapping("/getAllInternships")
    ResponseEntity<List<InternshipEntity>> getAllInternships() {
        return ResponseEntity.status(null != internshipService.getAllInternships() ? HttpStatus.OK : HttpStatus.NOT_FOUND).body(internshipService.getAllInternships());
    }
    
    @GetMapping("/getInternshipById/{id}")
    ResponseEntity<InternshipEntity> getIntershipById(@PathVariable String id){
        return ResponseEntity.status(null != internshipService.getIntershipById(id) ? HttpStatus.OK: HttpStatus.NOT_FOUND).body(internshipService.getIntershipById(id));
    }
    

}
