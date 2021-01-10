async function get(){
    const response = await fetch("https://www.breakingbadapi.com/api/characters/")
    const data = await response.json()

    console.log(data)

    document.querySelector(".actor").innerHTML=
    `
        <select id="mySelect">
            <option>Select</option>
            ${
                data.map(actor=>`<option value="${actor.char_id - 1}">${actor.name}</option>`)
            }
            
        </select>
    `

    document.querySelector("#mySelect").addEventListener("change", myFunction);
    function myFunction() {
        var x = document.querySelector("#mySelect");
        var n=x.value;
        
        document.querySelector("#content h1").innerHTML=data[n].name;

        document.querySelector("#content .image img").src=data[n].img;

        document.querySelector("#bilgi h1").innerHTML="Personal information<br>-------------";
        document.querySelector("#bilgi .birthday").innerHTML="Birthday : "+data[n].birthday;
        document.querySelector("#bilgi .nickname").innerHTML="Nickname : "+data[n].nickname;
        document.querySelector("#bilgi .occupation").innerHTML="Occupation : "+data[n].occupation;

    

        
    }

}




get()


