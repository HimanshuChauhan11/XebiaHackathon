// json

// CREATE DYNAMIC TABLE.
function CreateTableFromJSON() {
  var myemployee = [
    {
      id: "1",
      name: "Vonny Fernan",
      department: "Recruitment",
      gender: "female",
      email: "vfernan0@merriam-webster.com",
      state: "California",
      city: "San Diego",
      pin: "92105",
    },
    {
      id: "2",
      name: "Anallese Cordaroy",
      department: "HR",
      gender: "male",
      email: "acordaroy4@upenn.edu",
      state: "Oklahoma",
      city: "Tulsa",
      pin: "74170",
    },
    {
      id: "3",
      name: "Felic Chippindale",
      department: "HR",
      gender: "male",
      email: "fchippindale8@mayoclinic.com",
      state: "New York",
      city: "New York",
      pin: "10280",
    },
    {
      id: "1",
      name: "Vonny Fernan",
      department: "Recruitment",
      gender: "female",
      email: "vfernan0@merriam-webster.com",
      state: "California",
      city: "San Diego",
      pin: "92105",
    },
    {
      id: "2",
      name: "Anallese Cordaroy",
      department: "HR",
      gender: "male",
      email: "acordaroy4@upenn.edu",
      state: "Oklahoma",
      city: "Tulsa",
      pin: "74170",
    },
    {
      id: "3",
      name: "Felic Chippindale",
      department: "HR",
      gender: "male",
      email: "fchippindale8@mayoclinic.com",
      state: "New York",
      city: "New York",
      pin: "10280",
    },
  ];
  var tableBody =
    '<table class="table"><tr class="table-heading"><th>Id</th><th>Name</th><th>Department</th><th>Gender</th><th>Email</th><th>State</th><th>City</th><th>Pin</th></tr>';

  myemployee.forEach(function (d) {
    tableBody +=
      '<tr class="table-data"><td>' +
      d.id +
      "</td><td>" +
      d.name +
      "</td><td>" +
      d.department +
      "</td><td>" +
      d.gender +
      "</td>><td>" +
      d.email +
      "</td><td>" +
      d.state +
      "</td><td>" +
      d.city +
      "</td><td>" +
      d.pin +
      "</td></tr>";
  });
  tableBody += "<table>";

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.

  var divContainer = document.getElementById("showData");
  divContainer.innerHTML = tableBody;
}

window.addEventListener("onload", CreateTableFromJSON());
