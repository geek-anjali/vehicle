starting=()=>{
    let bike=document.getElementById('bike');
    let car=document.getElementById('car');
    let bus=document.getElementById('bus');
    let truck=document.getElementById('truck');
    let img=document.getElementById('image');
    let btns=document.querySelectorAll('button');

    bike.addEventListener('click',(e)=>{
        img.firstElementChild.src='bike.png';
        console.log(e.target.classList);
        console.log(e.target.classList);
        console.log(btns);
        filterbtn(e);

        // img.innerHTML=`<img src="bike.png" alt="" class="mx-auto d-block">`;
    });

    car.addEventListener('click',(e)=>{
        img.firstElementChild.src='car.png';
        filterbtn(e);
        // img.innerHTML=`<img src="car.png" alt="" class="mx-auto d-block">`;
    });
    
    bus.addEventListener('click',(e)=>{
        img.firstElementChild.src='bus.png';
        filterbtn(e);
        // img.innerHTML=`<img src="bus.png" alt="" class="mx-auto d-block">`;
    });
    
    truck.addEventListener('click',(e)=>{
        img.firstElementChild.src='truck.png';
        filterbtn(e);
        // img.innerHTML=`<img src="truck.png" alt="" class="mx-auto d-block">`;
    });

    filterbtn=(e)=>{
        btns.forEach((item)=>{
            if(item.id===e.target.id)
            {
                e.target.classList.remove('btn-outline-danger');
                e.target.classList.add('btn-danger');
            }
            else{
                item.classList.remove('btn-danger');
                item.classList.add('btn-outline-danger');
            }
        });
    }
}
window.onload=starting