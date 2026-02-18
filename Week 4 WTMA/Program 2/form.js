document.getElementById("studentForm").addEventListener("submit", function(e){
    e.preventDefault();

    let student = {
        id: document.getElementById("student_id").value,
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        grade: document.getElementById("grade").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value
    };

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Saved Successfully!");

    window.location.href = "index.html";
});
