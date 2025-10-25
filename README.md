# SkillSync: The AI-Powered Career Evolution Platform**

# Overview

SkillSync is a comprehensive, full-stack career development platform designed to empower students and job seekers by providing real-time job and internship opportunities alongside powerful, AI-driven tools for interview preparation and resume optimization. The platform bridges the gap between candidates and recruiters by offering a centralized hub for talent discovery and skill enhancement.

The key innovation of SkillSync lies in its integration of an AI Mock Interview system and a Resume Analysis tool, driven by a powerful n8n workflow engine, offering immediate, actionable feedback to users.

# Project Demonstration

A full video demonstration of SkillSync's key features, including the Job Portal, Resume Analysis, and the AI Mock Interview process, is available here:

File Path: react/public/SkillSync Video/SkillSync Demo Video.mp4

# Key Features

# 1. AI-Powered Career Tools

These features are the core differentiator of SkillSync, built to provide personalized, intelligent guidance:

## AI Mock Interview:

Allows users to upload their Resume and a Job Description to create highly contextual and personalized mock interview tests.

The system uses an n8n workflow for backend intelligence, analyzing documents, managing conversation memory, and generating progressive, relevant technical questions.

Goal: To provide candidates with real-world interview practice tailored to their unique background and target role.

## Resume Analysis (ATS Score Checker):

Enables users to upload their CV (PDF/DOCX) for instant, detailed feedback.

Generates an ATS Compatibility Score (e.g., 80/100) and provides structured feedback, including clear Recruiter's Advice (actionable steps) and an analysis of Strengths and Points to Improve.

Goal: To help users optimize their resumes for Applicant Tracking Systems (ATS) and human recruiters.

# 2. Job & Internship Portal

## Extensive Listings: 
Users can browse and search for real-time Job and Internship opportunities.

## Advanced Filtering:
Comprehensive filtering options are available based on Profile/Role, Location, Years of Experience, Annual Salary/Stipend Range, and Job Type (Full-Time/Part-Time).

## Detailed Views: 
Listings offer full details including eligibility criteria, skills required (e.g., Java, Spring Boot, React, MySQL), job description, and application deadlines.

# 3. Recruiter/Host Features

## Post Opportunities: 
A dedicated interface allows recruiters to securely post new Jobs or Internships, capturing all necessary details like company logo, domain, mode, salary, and experience requirements.

## Role-Based Authentication: 
Separate login/signup flows ensure secure access for both Candidates and Recruiters.

# Tech Stack

## Component: Frontend

Technology:React JS

Role:Core UI development using functional components and hooks.

## Component: Styling

Technology:Tailwind CSS

Role:Utility-first framework for rapid, responsive, and modern dark-theme styling.

## Component:State Management

Technology:Redux Toolkit

Role:Used for predictable and scalable state management across complex features like filtering, authentication, and AI result display.

## Component:AI Workflow

Technology:n8n

Role:Orchestration of complex, multi-step AI logic for resume processing and generating contextual mock interview questions.

## Component:Backend (API)

Technology:Java Springboot

Role:Robust, scalable RESTful API services for handling business logic and data operations.

## Component: Database

Technology:MySQL

Role:Relational database used for persistent storage of user data, job listings, and recruiter information.
