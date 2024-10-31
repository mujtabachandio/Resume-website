function downloadPDF() {
    const { jsPDF } = window.jspdf; // Access jsPDF if using a CDN

    // Create a new instance of jsPDF
    const doc = new jsPDF();

    // Gather personal details
    const name = document.getElementById("previewName").textContent;
    const email = document.getElementById("previewEmail").textContent;
    const contactNumber = document.getElementById("previewContactNumber").textContent;
    const address = document.getElementById("previewAddress").textContent;
    const profilePictureSrc = document.getElementById("previewProfilePicture").src;

    // Add blue background for name and profile picture
    doc.setFillColor(0, 123, 255); // Blue color
    doc.rect(0, 0, 210, 60, 'F'); // Background rectangle (A4 size 210x297 mm)

    // Add profile picture
    if (profilePictureSrc) {
        doc.addImage(profilePictureSrc, 'JPEG', 10, 10, 30, 30); // Adjust size as needed
    }

    // Add personal details to PDF
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255); // White text for name
    doc.text(name, 50, 20); // Aligning name next to profile picture
    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255); // White text for personal info
    doc.text(email, 10, 45);
    doc.text(contactNumber, 10, 50);
    doc.text(address, 10, 55);

    let yOffset = 70; // Starting y-offset for sections

    // Add Education and Experience section side by side
    const halfPageWidth = 105; // Half of A4 width

    // Education section
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Black text for section titles
    doc.text("Education", 10, yOffset);
    yOffset += 10; // Space between title and items
    const educationItems = document.querySelectorAll("#previewEducationSection li");
    educationItems.forEach((item, index) => {
        doc.setFontSize(12);
        doc.text(item.textContent, 10, yOffset + index * 10);
    });

    // Calculate new yOffset after education
    yOffset += educationItems.length * 10 + 10; // Add extra space after education section

    // Experience section
    doc.setFontSize(16);
    doc.text("Experience", halfPageWidth, yOffset - (educationItems.length * 10 + 10)); // Align with Education section
    yOffset += 10; // Space between title and items
    const experienceItems = document.querySelectorAll("#previewExperienceSection li");
    experienceItems.forEach((item, index) => {
        doc.setFontSize(12);
        doc.text(item.textContent, halfPageWidth, yOffset + index * 10);
    });

    // Move down for Skills and Languages
    yOffset += Math.max(educationItems.length, experienceItems.length) * 10 + 20; // Add space for next section

    // Add Skills and Languages section side by side
    const skillLangYOffset = yOffset; // Y-offset for skills and languages

    // Skills section
    doc.setFontSize(16);
    doc.text("Skills", 10, skillLangYOffset);
    yOffset += 10; // Space between title and items
    const skillsItems = document.querySelectorAll("#previewSkillsList li");
    skillsItems.forEach((item, index) => {
        doc.setFontSize(12);
        doc.text(item.textContent, 10, skillLangYOffset + 10 + index * 10);
    });

    // Languages section
    doc.setFontSize(16);
    doc.text("Languages", halfPageWidth, skillLangYOffset);
    yOffset += 10; // Space between title and items
    const languagesItems = document.querySelectorAll("#previewLanguagesList li");
    languagesItems.forEach((item, index) => {
        doc.setFontSize(12);
        doc.text(item.textContent, halfPageWidth, skillLangYOffset + 10 + index * 10);
    });

    // Save the generated PDF
    doc.save("resume.pdf");
}
