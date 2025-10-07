import axios from "axios";

const API_URL = 'http://localhost:8080/internship';

export const createInternship = async (postInternshipData) => {
    const formData = new FormData();
    formData.append("title" , postInternshipData.title);
    formData.append("description" , postInternshipData.description);
    formData.append("location" , postInternshipData.location);
    formData.append("stipend" , postInternshipData.stipend);
    formData.append("duration" , postInternshipData.duration);
    formData.append("startDate" , postInternshipData.startDate);
    formData.append("company" , postInternshipData.company);
    formData.append("industry" , postInternshipData.industry);
    formData.append("imageFile" , postInternshipData.imageFile);

    try{
        const response = await axios.post(
            API_URL+"/createInternship" , 
            formData
        );
        if (response.data.id != null && response.data.imageUrl != null){
            return "Internship created successfully";
        }else{
            return "Error creating internship";
        }
    }
    catch(error){
        console.error('Error posting internship' , error);
        console.error('Error status' , error.response?.status);
        throw error;
    }
    
};

export const getAllInternships = async() =>{
    try{
    const response = await axios.get(
        API_URL+"/getAllInternships" 
    );
    return response.data;
    }catch(error){
        throw error;
    }
};