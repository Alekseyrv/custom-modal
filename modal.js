function Modal(selection, params){
    let elem = document.querySelector(selection) //находим что копировать
    let overlay = document.getElementById('overlay')
    //проверяем наличие элемента overlay что бы не дублировать вставки
    if (!(overlay)) { 
        var generatedOverlay = document.createElement('div') 
        generatedOverlay.id = ('overlay') 
        var container= document.createElement('div') 
        container.className = ('container')
        //создаем
        if ( params === 'hide') {
            generatedOverlay.className += " disabled"
     
        } else if ( params === 'show'){
            generatedOverlay.className += " actived"  
        }
        
        container.innerHTML = '<div class="head"><div class="close"><svg viewBox="0 0 20 20"><path fill="#000000" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path></svg></div></div>'
        //можно было и просто "X", но так интереснее))
        container.appendChild(elem)
        generatedOverlay.appendChild(container)
        
        document.querySelector('body').appendChild(generatedOverlay)
        
    } else {
       
        if ( ( params === 'hide' ) || (params === '' ) ) {
            overlay.classList.remove('actived')
            overlay.classList.add('disabled')
        } else if ( params === 'show') {
                overlay.classList.remove('disabled')
                overlay.classList.add('actived')
                }
        }
    let currentOverlay = document.getElementById('overlay')
    var closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.addEventListener('click', (evt) => {
            currentOverlay.classList.remove('actived')
            currentOverlay.classList.add('disabled')
    }) 

    currentOverlay.addEventListener('click', (evt) => {
        if (evt.target.id == 'overlay') {
            currentOverlay.classList.remove('actived')
            currentOverlay.classList.add('disabled')
        }         
    }) 
};



 
