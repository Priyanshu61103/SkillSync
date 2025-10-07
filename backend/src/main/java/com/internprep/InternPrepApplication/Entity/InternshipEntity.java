package com.internprep.InternPrepApplication.Entity;

import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data

public class InternshipEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String location;
    private float stipend;
    private String duration;
    private LocalDate startDate;
    private String company;
    private String industry;
    private String imageUrl;

    
}
