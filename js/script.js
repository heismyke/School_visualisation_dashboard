async function fetchData() {
    try {
        const url = "https://aptech-g9bt.vercel.app/school.json";
        var response = await axios.get(url);

        if (response.status === 200) {
            var data = response.data;
            return data;
        } else {
            throw new Error("Error fetching data: " + response.status);
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

fetchData()
    .then((data) => {
        const aptechStudents = data["Aptech students"];
     
        var numbers = 0
        for(const semesterName in aptechStudents){

            console.log(semesterName)

            var semesters = document.getElementById('semesters');
           
            var div = document.createElement("div");
            var headings = document.createElement("h1");
            div.classList.add('border','h-[200px]','md:h-[200px]','lg:h-[200px]', 'p-4','rounded-xl','bg-white','hidden','mainContent');
            headings.textContent = semesterName;
            headings.classList.add('semHeadings');
            div.appendChild(headings);
            semesters.appendChild(div);

            
          

            if(aptechStudents.hasOwnProperty(semesterName)){
                const semesterData = aptechStudents[semesterName];
                const students = semesterData.students;

                var studentsCount = students.length
                var paragraph = document.createElement('p');
                paragraph.classList.add('semParagraph');
                paragraph.textContent = `No of students : ${studentsCount}` 
                numbers += studentsCount
                
            }

            div.appendChild(paragraph);

            var buttons = document.createElement('button');

            buttons.textContent = 'Learn more';

            buttons.classList.add('semButton');
            div.appendChild(buttons);
            
            setTimeout(() => {
                var contents = document.querySelectorAll('.content'); 
                var mainContents = document.querySelectorAll('.mainContent');

                for (var i = 0; i < contents.length; i++) {
                    contents[i].style.display = 'none';
                }
                
                for (var i = 0; i < mainContents.length; i++) {
                    mainContents[i].style.display = 'block';
                }
            }, 5000);
        }

   
        
       
        
        
      
    }).catch((err) => {
        console.error(err);
    });


   
