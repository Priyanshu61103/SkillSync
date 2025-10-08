package com.internprep.InternPrepApplication.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.internprep.InternPrepApplication.Entity.JobEntity;

@Repository
public interface JobRepository extends JpaRepository<JobEntity, String>{

}
