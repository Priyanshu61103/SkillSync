from typing import List
# from langchain_google_genai import ChatGoogleGenerativeAI
from pydantic import BaseModel
from langchain_perplexity import ChatPerplexity
# from config import GEMINI_API_KEY
from config import PERPLEXITY_API_KEY
# llm  = ChatGoogleGenerativeAI(model = "gemini-2.5-pro" , api_key = GEMINI_API_KEY)
llm = ChatPerplexity(model="sonar" , api_key=PERPLEXITY_API_KEY)

class ResumeAndDescriptionFeedbackSchema(BaseModel):
    job_match : int
    strengths : List[str]
    weakness : List[str]
    missing_skills : List[str]
    feedback: List[str]
    ats_score: int

class ResumeOnlyFeedback(BaseModel):
    strengths: List[str]
    weaknesses: List[str]
    recruiter_advice: List[str]
    ats_score : int

structuredModel1 = llm.with_structured_output(ResumeAndDescriptionFeedbackSchema)
structuredModel2 = llm.with_structured_output(ResumeOnlyFeedback)

def get_resume_and_description_feedback(resume_text , job_description , title):
    prompt = f"""
    You are a senior HR manager and recruiter for top MNCs.
    Analyze this candidate’s resume against the given job description.

    Resume : 
    {resume_text}

    Job Title: {title}
    Job Description: {job_description}

    Provide an in-depth recruiter-style evaluation. 
    Remember:
    - 'job_match': integer 0-100, overall suitability score
    - 'strengths': list of candidate strengths
    - 'weakness': list of recruiter-style weaknesses
    - 'missing_skills': list of important missing skills
    - 'feedback': list of recruiter-like feedback
    - 'ats_score':overall ats score of the candidate resume
    """
    return structuredModel1.invoke(prompt)

def get_resume_only_feedback(resume_text):
    prompt = f"""
        You are a senior HR manager and recruiter for top MNCs.
        Analyze the following resume and provide constructive feedback.
        
        Resume:
        {resume_text}
        
        Provide:
        - Key strengths
        - Weaknesses
        - Recruiter advice to improve chances of shortlisting
        - ats score of the cadidate resume
        """
    return structuredModel2.invoke(prompt)