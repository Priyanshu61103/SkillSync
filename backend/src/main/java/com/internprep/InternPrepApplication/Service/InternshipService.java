package com.internprep.InternPrepApplication.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internprep.InternPrepApplication.Dto.InternshipEntityDto;
import com.internprep.InternPrepApplication.Entity.InternshipEntity;
import com.internprep.InternPrepApplication.Repository.InternshipRepository;

@Service
public class InternshipService {

    @Autowired
    private InternshipRepository internshipRepository;
    @Autowired
    private CloudinaryService cloudinaryService;

    public String createInternship(InternshipEntityDto internshipEntityDto)throws IOException{
        String imageUrl = cloudinaryService.uploadFile(internshipEntityDto.getImageFile());
        InternshipEntity internshipEntity = InternshipEntity.builder()
        .company(internshipEntityDto.getCompany())
        .description(internshipEntityDto.getDescription())
        .duration(internshipEntityDto.getDuration())
        .imageUrl(imageUrl)
        .industry(internshipEntityDto.getIndustry())
        .location(internshipEntityDto.getLocation())
        .startDate(internshipEntityDto.getStartDate())
        .stipend(internshipEntityDto.getStipend())
        .title(internshipEntityDto.getTitle())
        .build();
        InternshipEntity createdInternship = internshipRepository.save(internshipEntity);
        if(createdInternship  != null && createdInternship.getId() != null){
            return "Internship created successfully";
        }
        else{
            return "Internship creation failed";
        }
    }

    public List<InternshipEntity> getAllInternships(){
        List<InternshipEntity> allInternships = internshipRepository.findAll();
        if(allInternships.size() > 0){
            return allInternships;
        }
        else{
            return null;
        }
    }
    public InternshipEntity getIntershipById(String id){
        Optional<InternshipEntity> foundInternshipEntity = internshipRepository.findById(id);
        if(foundInternshipEntity.get() != null){
            return foundInternshipEntity.get();
        }
        else{
            return null;
        }
    }
}
