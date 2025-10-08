package com.internprep.InternPrepApplication.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internprep.InternPrepApplication.Dto.JobEntityDto;
import com.internprep.InternPrepApplication.Entity.JobEntity;
import com.internprep.InternPrepApplication.Repository.JobRepository;

@Service
public class JobService {

    @Autowired
    private CloudinaryService cloudinaryService;
    @Autowired
    private JobRepository jobRepository;

    public String createJob(JobEntityDto jobEntityDto) throws IOException{
        String imageUrl = cloudinaryService.uploadFile(jobEntityDto.getImageFile());
        JobEntity jobEntity = JobEntity.builder()
        .company(jobEntityDto.getCompany())
        .about(jobEntityDto.getAbout())
        .applyBy(jobEntityDto.getApplyBy())
        .eligibility(jobEntityDto.getEligibility())
        .modeOfJob(jobEntityDto.getModeOfJob())
        .skills(jobEntityDto.getSkills())
        .numberOfOpenings(jobEntityDto.getNumberOfOpenings())
        .description(jobEntityDto.getDescription())
        .experience(jobEntityDto.getExperience())
        .imageUrl(imageUrl)
        .domain(jobEntityDto.getDomain())
        .location(jobEntityDto.getLocation())
        .startDate(jobEntityDto.getStartDate())
        .ctc(jobEntityDto.getCtc())
        .title(jobEntityDto.getTitle())
        .build();

        JobEntity createdJob = jobRepository.save(jobEntity);
        if(createdJob != null && createdJob.getId() != null){
            return "Job Created Successfully";
        }else{
            return "Failed to create Job";
        }
    }

    public List<JobEntity> getAllJobs(){
        List<JobEntity> allJobs = jobRepository.findAll();
        if(allJobs.size() > 0){
            return allJobs;
        }else{
            return null;
    }
    }

}
