let uinp=document.getElementById('uinput')
        let opt=document.getElementById('option')
        let pri=document.getElementById('pri')
        let dislist1=document.getElementById('span1')
        let dislist12=document.getElementById('span12')
        let dislist2=document.getElementById('span2')
        let dislist21=document.getElementById('span21')
        let btn=document.getElementById('btn')
        let a=[ ]
        let ar=[ ]
        let b=[ ]
        let br=[ ]

        btn.addEventListener('click',function(event){
            event.preventDefault();
            let res1=""
            let res2=""
            if(opt.value=="1"){
                a.push(uinp.value)
                ar.push(pri.value)
                a.forEach(element => {
                res1+= `<li>${element}</li>`;
                });
                ar.forEach(element =>{
                    res2+=`<li>${element}</li>`;
                })
            dislist1.innerHTML=res1
            dislist12.innerHTML=res2
            }else{
                b.push(uinp.value)
                br.push(pri.value)
                b.forEach(element => {
                res1+= `<li>${element}</li>`;
                });
                br.forEach(element =>{
                    res2+=`<li>${element}</li>`;
                })
            
            dislist2.innerHTML=res1
            dislist21.innerHTML=res2
            }
        })