
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

window.addEventListener('load', () => { 
    //load가 끝나면 아래 실행.
    

    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    console.log(targetRect)

    window.addEventListener('mousemove', (e) => {
    
        const x = e.clientX;
        const y = e.clientY;
    
        // horizontal.style = `top: ${y}px`;
        // vertical.style =   `left: ${x}px`;
        horizontal.style.transform = `translateY(${y}px)`;
        vertical.style.transform = `translateX(${x}px)`;
    
        
    
        target.style.transform = `translate(${x-targetHalfWidth}px,${y-targetHalfHeight}px)`;
        // target.style.transform = `translateX(${x}px)`;
    
        tag.innerHTML = `${e.clientX}px , ${e.clientY}px`;
    
        tag.style.transform = `translate(${x}px,${y}px)`;
        // tag.style.left = `${x}px`;

    })

})//end

// console창 performance -> 브라우저 성능 체크
// Ctrl + Shift + p -> 콘솔창 팔레트 _ 




