



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
        const keys = Object.keys(data);
        const nestedKeys = Object.keys(data[keys[0]]);
        
        nestedKeys.forEach(function (sems){
            var semesters = document.getElementById('semesters');
            var div = document.createElement("div");
            div.classList.add('border','h-[200px]','md:h-[200px]','lg:h-[300px]', 'p-4','rounded-xl')
            div.textContent = sems
            semesters.appendChild(div);
        })
        

        
    })
    .catch((err) => {
        console.error(err);
    });


   
