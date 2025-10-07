package com.internprep.InternPrepApplication.Dto;

import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InternshipEntityDto {
    private String id;
    private String title;
    private String description;
    private String location;
    private float stipend;
    private String duration;
    private LocalDate startDate;
    private String company;
    private String industry;
    private MultipartFile imageFile;
}
