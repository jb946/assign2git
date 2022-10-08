console.log("Hello world\n");
let date1 = Date.now();
console.log(date1);
const api_url = "https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=";

function search_team(){
    var select = document.getElementById('team');
    var value = select.options[select.selectedIndex].value;
    team_name = value;
    get_event(team_name);
}



async function get_event(team_name){
    const response = await fetch(api_url+team_name);
    response.json().then(value =>{
        let i;
        let index;
        for(i=24;i>=0;i--){
            if(date1<=Date.parse(value.event[i].strTimestamp)){
                index = i;
                i=-1;
            }
        }

        console.log(value.event[index].strFilename);


        //integration in the HTML
        document.getElementById("result").innerHTML = value.event[index].strFilename;
    });
    //const data = await response.json();


    //const obj = JSON.parse(data);
}

