
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    skills: string;
    workExperience: string;
}

const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

const generateResume = (data: ResumeData): string => {
    return `
        <h2>${data.name}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h3>Education</h3>
        <p>${data.education}</p>
        <h3>Skills</h3>
        <p>${data.skills}</p>
        <h3>Work Experience</h3>
        <p>${data.workExperience}</p>
    `;
};

const handleSubmit = (event: Event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const resumeData: ResumeData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        education: formData.get('Education') as string,
        skills: formData.get('Skills') as string,
        workExperience: formData.get('WorkExperience') as string,
    };

    // Store data in localStorage
    localStorage.setItem('resumeData', JSON.stringify(resumeData));

    // Redirect to the resume page
    window.location.href = 'resume.html';
};

form.addEventListener('submit', handleSubmit);
