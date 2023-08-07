

// const getData = async() => {

// 	const url = 'https://workout-planner1.p.rapidapi.com/?time=30&muscle=biceps&location=gym&equipment=dumbbells';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '127b01cb2bmsh46a6583d7dfba84p10896fjsn2cc35120a365',
// 		'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// }


// getData()





const form = document.getElementById('myForm');


const handleSubmit = (e) => {

    e.preventDefault();

    const time = document.getElementById('time').value;
    const Muscle = document.getElementById('Muscle').value;
    const Location = document.getElementById('Location').value;
    const equipment = document.getElementById('equipment').value;




    const getData = async () => {

        const url = `https://workout-planner1.p.rapidapi.com/?time=${time}&muscle=${Muscle}&location=${Location}&equipment=${equipment}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '127b01cb2bmsh46a6583d7dfba84p10896fjsn2cc35120a365',
                'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            

            // result.Warm_up.map((cval) => {
                
            //     document.getElementById('WarmUp').innerHTML+=`
                
            //         <li>${cval.Exercise}</li>
            //         <li>${cval.Time}</li>
                
            //     `
            // })

            result.Exercises.map((cval) => {
                
                document.getElementById('exercises').innerHTML+=`
                
                    <li>${cval.Exercise}</li>
                    <li>${cval.Reps}</li>
                    <li>${cval.Sets}</li>
                
                `
            })

            // result.CoolDown.map((cval) => {
                
            //     document.getElementById('exercises').innerHTML+=`
                
            //         <li>${cval.Exercise}</li>
            //         <li>${cval.Time}</li>
                
            //     `
            // })


        } catch (error) {
            console.error(error);
        }


    }


    getData()




}




form.addEventListener('submit', handleSubmit)