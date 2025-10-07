package com.internprep.InternPrepApplication.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.internprep.InternPrepApplication.Entity.InternshipEntity;

@Repository
public interface InternshipRepository extends JpaRepository<InternshipEntity , String>{

}
