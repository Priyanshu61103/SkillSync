-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS skillsync;
USE skillsync;

-- Drop table if it already exists (for clean re-imports)
DROP TABLE IF EXISTS job_entity;

-- Create table
CREATE TABLE job_entity (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    eligibility TEXT,
    skills TEXT,
    about TEXT,
    number_of_openings INT,
    location VARCHAR(255),
    ctc VARCHAR(100),
    mode_of_job VARCHAR(100),
    experience VARCHAR(100),
    apply_by DATE,
    start_date DATE,
    company VARCHAR(255),
    domain VARCHAR(255),
    image_url VARCHAR(500)
);

-- Insert sample job data
INSERT INTO job_entity (
    id, title, description, eligibility, skills, about, number_of_openings,
    location, ctc, mode_of_job, experience, apply_by, start_date,
    company, domain, image_url
)
VALUES
(UUID(), 'Software Engineer Intern', 
 'Work with the engineering team to develop and maintain scalable web applications.',
 'Pursuing B.Tech or equivalent in Computer Science or related field.',
 'Java, Spring Boot, React, MySQL, REST APIs',
 'Tata Consultancy Services (TCS) is a leading Indian multinational information technology (IT) services and consulting company that partners with global businesses on their digital transformation journeys',
 5, 'Bangalore', '₹30,000/month', 'Hybrid', '0-1 years',
 '2025-10-30', '2025-11-10', 'Tata Consultancy Services', 'Software Development',
 'https://res.cloudinary.com/dgievgllp/image/upload/v1759934136/internship/companies/fxngrwklcbdpoq9fo0go.png'),

(UUID(), 'Data Analyst', 
 'Analyze company data to identify trends and insights for business decisions.',
 'Graduate in Statistics, CS, or Mathematics.',
 'SQL, Python, Excel, Power BI, Data Visualization',
 'Capgemini is a French multinational information technology consulting, outsourcing, and professional services corporation that helps companies transform and manage their businesses using technology, with a focus on digital, cloud, data, and AI',
 3, 'Delhi', '₹6 LPA', 'Onsite', '1-2 years',
 '2025-11-05', '2025-12-01', 'Capgemini', 'Data Science',
 'https://res.cloudinary.com/dgievgllp/image/upload/v1759995494/internship/companies/qbiuqttygfuphe2eswgf.png'),

(UUID(), 'Frontend Developer', 
 'Build responsive and user-friendly web interfaces using modern frontend technologies.',
 'B.Tech/B.E in Computer Science or related field.',
 'HTML, CSS, JavaScript, React.js, REST APIs',
 'Flipkart is a leading Indian e-commerce company founded in 2007 by Sachin and Binny Bansal as an online bookstore. It is now a large marketplace offering over 150 million products across various categories and is part of the Walmart-owned Flipkart Group, which also includes Myntra, Flipkart Wholesale, Flipkart Health+, and Cleartrip.',
 4, 'Remote', '₹8 LPA', 'Remote', '1+ years',
 '2025-10-25', '2025-11-15', 'Flipkart', 'Web Development',
 'https://res.cloudinary.com/dgievgllp/image/upload/v1759994728/internship/companies/vf0flhcu1fwuj6nzeqpu.png'),

(UUID(), 'Machine Learning Engineer', 
 'Develop and optimize ML models for predictive analytics and automation.',
 'Bachelor’s/Master’s in CS, AI, or Data Science.',
 'Python, TensorFlow, Scikit-learn, Pandas, NLP',
 'Zomato is an Indian multinational company offering food delivery, restaurant discovery, and dining-out services, connecting customers with restaurants and delivery partners.',
 2, 'Pune', '₹10 LPA', 'Hybrid', '2+ years',
 '2025-11-10', '2025-12-05', 'Zomato', 'Artificial Intelligence',
 'https://res.cloudinary.com/dgievgllp/image/upload/v1759937554/internship/companies/rsl8oj7lkwoxnbxbet35.png');
