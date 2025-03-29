let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {number: "001", enrolled: 95, instructor: "me"},
        {number: "002", enrolled: 98, instructor: "me again"}
    ]
  };
  
  function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
  }
  
  function sectionTemplate(pigs) {
    return `<tr>
             <td>${pigs.number}</td>
             <td>${pigs.enrolled}</td>
             <td>${pigs.instructor}</td>
            </tr>`;
  }
  
  function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
  }
  
  setCourseInformation(aCourse);
  renderSections(aCourse.sections);
  