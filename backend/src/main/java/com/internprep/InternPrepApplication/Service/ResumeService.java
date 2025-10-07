package com.internprep.InternPrepApplication.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.internprep.InternPrepApplication.Entity.InternshipEntity;

@Service
public class ResumeService {

    @Autowired
    private InternshipService internshipService;

    private final RestTemplate restTemplate = new RestTemplate();
    private final String flaskUrl = "http://127.0.0.1:5000/analyze";

    public String analyzer(MultipartFile resume, String id) {
        try {
            MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
            body.add("resume", new ByteArrayResource(resume.getBytes()) {
                @Override
                public String getFilename() {
                    return resume.getOriginalFilename();
                }
            });

            if (id != null && !id.isBlank()) {
                InternshipEntity internship = internshipService.getIntershipById(id);
                body.add("description", internship.getDescription());
                body.add("title", internship.getTitle());
            }

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.MULTIPART_FORM_DATA);

            HttpEntity<MultiValueMap<String, Object>> requestEntity =
                    new HttpEntity<>(body, headers);

            ResponseEntity<String> response =
                    restTemplate.postForEntity(flaskUrl, requestEntity, String.class);

            return response.getBody();
        } catch (Exception e) {
            e.printStackTrace();
            return "{\"error\":\"Failed to analyze resume\"}";
        }
    }
}
