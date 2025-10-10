-- Create database if not exists
CREATE DATABASE IF NOT EXISTS skillsync;
USE skillsync;

-- Drop table if already exists (for resetting data during testing)
DROP TABLE IF EXISTS internship_entity;

-- Create table for internships
CREATE TABLE internship_entity (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    eligibility TEXT,
    skills TEXT,
    about TEXT,
    number_of_openings INT,
    location VARCHAR(255),
    stipend VARCHAR(100),
    mode_of_internship VARCHAR(100),
    duration VARCHAR(100),
    apply_by DATE,
    start_date DATE,
    company VARCHAR(255),
    domain VARCHAR(255),
    image_url TEXT
);

-- Insert sample data
INSERT INTO internship_entity (
    id, title, description, eligibility, skills, about, number_of_openings, location, stipend, mode_of_internship, duration, apply_by, start_date, company, domain, image_url
) VALUES
    (
        UUID(),
        'Software Development Intern',
        'Work on developing new modules for our in-house web application using Java Spring Boot and React.',
        'B.Tech CSE/IT students in their 3rd or 4th year with good programming knowledge.',
        'Java, Spring Boot, React, MySQL, Git',
        'Capgemini is a French multinational information technology consulting, outsourcing, and professional services corporation that helps companies transform and manage their businesses using technology, with a focus on digital, cloud, data, and AI',
        3,
        'Remote',
        '₹10,000/month',
        'Remote',
        '3 Months',
        '2025-11-30',
        '2025-12-10',
        'Capgemini',
        'Software Development',
        'https://res.cloudinary.com/dgievgllp/image/upload/v1759995494/internship/companies/qbiuqttygfuphe2eswgf.png'
    ),
    (
        UUID(),
        'AI Research Intern',
        'Assist in building and fine-tuning NLP models for resume analysis and interview simulations.',
        'B.Tech/M.Tech students with strong knowledge of Python and ML frameworks.',
        'Python, TensorFlow, NLP, Machine Learning',
        'Tata Consultancy Services (TCS) is a leading Indian multinational information technology (IT) services and consulting company that partners with global businesses on their digital transformation journeys',
        2,
        'Delhi, India',
        '₹12,000/month',
        'Hybrid',
        '4 Months',
        '2025-12-15',
        '2026-01-01',
        'Tata Consultancy Services',
        'Artificial Intelligence',
        'https://res.cloudinary.com/dgievgllp/image/upload/v1759934136/internship/companies/fxngrwklcbdpoq9fo0go.png'
    ),
    (
        UUID(),
        'Frontend Developer Intern',
        'Collaborate with the design and backend teams to implement responsive UI components in React.',
        'Students with a strong grasp of HTML, CSS, JS, and React fundamentals.',
        'React, JavaScript, Tailwind CSS, Git',
        'Zomato is an Indian multinational company offering food delivery, restaurant discovery, and dining-out services, connecting customers with restaurants and delivery partners.',
        4,
        'Bangalore, India',
        '₹8,000/month',
        'On-site',
        '2 Months',
        '2025-11-20',
        '2025-12-01',
        'Zomato',
        'Web Development',
        'https://res.cloudinary.com/dgievgllp/image/upload/v1759937554/internship/companies/rsl8oj7lkwoxnbxbet35.png'
    ),
    (
        UUID(),
        'Data Analyst Intern',
        'Support our analytics team in cleaning, visualizing, and interpreting business data for insights.',
        'Any graduate student with strong Excel and data visualization skills.',
        'SQL, Excel, Power BI, Data Analysis',
        'Flipkart is a leading Indian e-commerce company founded in 2007 by Sachin and Binny Bansal as an online bookstore. It is now a large marketplace offering over 150 million products across various categories and is part of the Walmart-owned Flipkart Group, which also includes Myntra, Flipkart Wholesale, Flipkart Health+, and Cleartrip.',
        5,
        'Mumbai, India',
        '₹15,000/month',
        'Hybrid',
        '6 Months',
        '2025-11-25',
        '2025-12-05',
        'Flipkart',
        'Data Science',
        'https://res.cloudinary.com/dgievgllp/image/upload/v1759994728/internship/companies/vf0flhcu1fwuj6nzeqpu.png'
    );
