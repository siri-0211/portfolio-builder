function generatePortfolio(){

    let name =
    document.getElementById("name").value;
    let email =
    document.getElementById("email").value;

    let skills =
    document.getElementById("skills").value;

    let education =
    document.getElementById("education").value;

    let projects =
    document.getElementById("projects").value;

    document.getElementById("output").innerHTML = `
        <h2>${name}</h2>
        <h3>Email</h3>
        <p>${email}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Projects</h3>
        <p>${projects}</p>
    `;
}