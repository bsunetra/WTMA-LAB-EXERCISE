const tableBody = document.getElementById("students");

document.getElementById("loaddata").addEventListener("click", loadStudents);
document.getElementById("cleardata").addEventListener("click", clearStudents);

function loadStudents(){
    tableBody.innerHTML = "";
    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.forEach(student => {
        let row = `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.grade}</td>
                <td>${student.email}</td>
                <td>${student.address}</td>
                <td>${student.phone}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function clearStudents(){
    localStorage.removeItem("students");
    tableBody.innerHTML = "";
    alert("All Student Data Cleared!");
}
