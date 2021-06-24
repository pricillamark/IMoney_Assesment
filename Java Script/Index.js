 // let a=document.createElement("a");
                // a.setAttribute("href","##");
                // a.setAttribute("class","place-button");
                // a.innerText=element.state;
                // document.querySelector(".places-buttons").append(a);
                // console.log(a);
fetch("../JSON/stores.json").then((response)=>{

    return response.json().then((data)=>{
        var sortedStates=[];
            data.forEach((dataa)=>{
                if(dataa.status==true){
                if(sortedStates.indexOf(dataa.state)===-1){
                sortedStates.push(dataa.state);
                }     
            } 
            })
        sortedStates.forEach((state)=>{
            var a=document.createElement("a");
            a.setAttribute("class","place-button");
            a.setAttribute("href","######");
            a.setAttribute("onclick",`clickhandler("${state}")`);
            a.innerText=state;
            document.querySelector(".places-buttons").append(a);
           
            
        })
        })
    })


// fetch("../JSON/stores.json").then((response)=>{

    // return response.json().then((data)=>{
    //     var sortedStates=[];
    //         data.forEach((dataa)=>{
    //             if(dataa.status==true){
    //             if(sortedStates.indexOf(dataa.state)===-1){
    //             sortedStates.push(dataa.state);
    //             }     
    //         } 
    //         })
    //     sortedStates.forEach((state)=>{
    //         var a=document.createElement("option");
    //         a.setAttribute("name","place-button");
    //         a.setAttribute("value",`"${state}"`);
    //         document.querySelector(".res-s").addEventListener("change",clickhandler({state}))
    //         // a.setAttribute("onchange",`clickhandler("${state}")`);
    //         a.innerText=state;
    //         console.log(a);
    //         document.querySelector(".res-s").append(a);
           
            
    //     })
    //     })
    // })
    
  


fetch("../JSON/stores.json").then((response)=>{
    return response.json().then((data)=>{
        data.forEach((element) => {
           
            if(element.status==true){
                var place=document.createElement("div");
                place.setAttribute("class","place")
                place.innerHTML=`
                <div class="place-img"><img src="${element.image}" alt=""></div>
                <div class="place-title">${element.name}</div>
                <div class="place-location">${element.address}<br>${element.state}</div>
                <div class="operation-hours">
                    <div class="operation-head">Operation Hours</div>
                    <div class="operatin-time">${element.operation_hours}</div>
                </div>
                <hr>
                <div class="place-contact">
                    <div class="place-phone"><span class="pphone">Phone</span>${element.phone}</div> 
                    <div class="place-fax"><span class="pfax">Fax</span>${element.id}</div> 
                </div>`;
                document.querySelector(".places").append(place);
            }
            
        });
    })
})

$(document).ready(()=>{
    $(".responsive-bars").click(()=>{

       
        $(".links").toggle(1000);
        $(".links").css("display","flex");
    })
})























function clickhandler(buttonclick){
    console.log(buttonclick)
    const places=document.querySelectorAll(".place");
    places.forEach((placeremove)=>{
        placeremove.style.display="none";
    })
    







    fetch("../JSON/stores.json").then((response)=>{
        return response.json().then((data)=>{
            data.forEach((element) => {
               
                if(element.status==true){
                if(element.state==buttonclick){
                    var place=document.createElement("div");
                    place.setAttribute("class","place")
                    place.innerHTML=`
                    <div class="place-img"><img src="${element.image}" alt=""></div>
                    <div class="place-title">${element.name}</div>
                    <div class="place-location">${element.address}<br>${element.state}</div>
                    <div class="operation-hours">
                        <div class="operation-head">Operation Hours</div>
                        <div class="operatin-time">${element.operation_hours}</div>
                    </div>
                    <hr>
                    <div class="place-contact">
                        <div class="place-phone"><span class="pphone">Phone</span>${element.phone}</div> 
                        <div class="place-fax"><span class="pfax">Fax</span>${element.id}</div> 
                    </div>`;
                    document.querySelector(".places").append(place);
                }
            }
            });
        })
    })




}