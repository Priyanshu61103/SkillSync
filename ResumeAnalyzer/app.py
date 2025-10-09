import pathlib
import tempfile
import fitz
import pdfplumber
import os 
import docx2txt
import docx
from flask import Flask, jsonify , request

from utils.feedbackService import get_resume_and_description_feedback , get_resume_only_feedback

app = Flask(__name__)

def extract_text(file_path , mimetype = None):
    ext = os.path.splitext(file_path)[1].lower()
    text = ""
    if(ext == ".pdf" or mimetype == "application/pdf"):
        try:
            doc = fitz.open(file_path)
            for page in doc:
                text += page.get_text()
            if text.strip():
                return text
            with pdfplumber.open(file_path) as pdf:
                for page in pdf.pages:
                    text += page.extract_text() or ""
            if text.strip():
                return text
        except Exception as e :
            return f"Error Extracting from PDF: {e}"
        
    elif ext == ".docx" or mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        try:
            text = docx2txt.process(file_path)
            return text.strip()
        except Exception:
            try:
                doc = docx.Document(file_path)
                for para in doc.paragraphs:
                    text += para.text + "\n"
                return text.strip()
            except Exception as e:
                return f"Error extracting from DOCX: {e}"

    return "Unsupported file format."

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Resume Analyzer API is running "
    })

@app.route("/analyze" , methods = ["POST"])
def analyze():
    
    print("FILES:", request.files)

    resume_file = request.files.get("resume")
    if not resume_file:
        return jsonify({"error": "Resume file not provided"}), 400

    job_description = request.form.get("description", "")
    title = request.form.get("title" , "")

    ext = pathlib.Path(resume_file.filename).suffix or ".pdf"

    with tempfile.NamedTemporaryFile(delete=False , suffix=ext) as tmp:
        resume_file.save(tmp.name)
        resume_text = extract_text(tmp.name , resume_file.mimetype)
        print(resume_text)
    os.remove(tmp.name)
    if job_description and title:
        response = get_resume_and_description_feedback(resume_text , job_description , title)
    else:
        response = get_resume_only_feedback(resume_text)
    return jsonify({
        "response": response.model_dump()
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)