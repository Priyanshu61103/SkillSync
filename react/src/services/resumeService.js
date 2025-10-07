import axios from "axios";

const API_URL = 'http://localhost:8080/resume';

export const analyzeResume = async(resume , id) => {
    const formData = new FormData();
    formData.append("resume" , resume);
    if(id){
        formData.append("id" , id);
    }
    try{
        const response = await axios.post(API_URL + "/analyzer" , formData ,
            {
                headers:{
                    "Content-Type":"multipart/form-data",
                },
            }
        );
        alert("Analysis Complete!");
        return response.data;
    }catch(error){
        alert("Failed to analyze resume.")
        throw error;
    }
};
