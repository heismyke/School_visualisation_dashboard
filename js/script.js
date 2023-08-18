



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
        
        for (let i = 0; i < nestedKeys.length; i++) {
            console.log(nestedKeys[i])
        }
        

        
    })
    .catch((err) => {
        console.error(err);
    });


   
