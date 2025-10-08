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
public class JobEntityDto {
    private String title;
    private String description;
    private String eligibility;
    private String skills;
    private String about;
    private Integer numberOfOpenings;
    private String location;
    private String ctc;
    private String modeOfJob;
    private String experience;
    private LocalDate applyBy;
    private LocalDate startDate;
    private String company;
    private String domain;
    private MultipartFile imageFile;
}
