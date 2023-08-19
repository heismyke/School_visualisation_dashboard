async function fetchData() {
    try {
        var url = "https://aptech-g9bt.vercel.app/school.json";

        var response = await axios.get(url);

        if (response.status === 200) {
            var data = response.data;
            return data;
        } else {
            console.error("Failed to fetch data. Status code:", response.status);
            if (response.status === 404) {
                console.error("The requested resource was not found.");
            } else if (response.status === 500) {
                console.error("An internal server error occurred.");
            } else {
                console.error("An unknown error occurred.");
            }
        }

    } catch (error) {
        throw new Error("Error fetching data: " + error);
    }
}

fetchData()
    .then((data) => {
        const aptechStudents = data["Aptech students"];
        
        const keys = Object.keys(aptechStudents)

        const first_semester = keys[0]

        if(aptechStudents.hasOwnProperty(first_semester)){
            var students =  aptechStudents[first_semester].students

            var first_student_properties = students[0]

            for(var key in first_student_properties){
               
                var tableHeader = document.querySelectorAll('.table-header')


                tableHeader.forEach((header) => {

                var heading = document.createElement('h1')

                var div = document.createElement('div')

                heading.textContent = key
                div.appendChild(heading)
                div.classList.add('eachHeader', 'flex', 'justify-start', 'pl-4', 'md:pl-0', 'items-center', 'w-full', 'md:w-[70%]','md:flex', 'md:justify-center', 'md:items-center',)
                header.appendChild(div)
                })
            }   
        }

        console.log(first_semester)
    }).catch((error) => {
        console.log("An error occurred:", error);
    });
