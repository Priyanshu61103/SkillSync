package com.internprep.InternPrepApplication.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.internprep.InternPrepApplication.Service.ResumeService;

@RestController
@RequestMapping("/resume")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @PostMapping("/analyzer")
    String Analyzer(@RequestParam MultipartFile resume , @RequestParam(required = false) String id){
        return resumeService.analyzer(resume,id);
    }
}
