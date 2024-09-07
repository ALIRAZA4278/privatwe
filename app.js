var form = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
var generateResume = function (data) {
    return "\n        <h2>".concat(data.name, "</h2>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(data.education, "</p>\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(data.workExperience, "</p>\n    ");
};
var handleSubmit = function (event) {
    event.preventDefault();
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: formData.get('Education'),
        skills: formData.get('Skills'),
        workExperience: formData.get('WorkExperience'),
    };
    var resumeHtml = generateResume(resumeData);
    resumeOutput.innerHTML = resumeHtml;
};
form.addEventListener('submit', handleSubmit);
