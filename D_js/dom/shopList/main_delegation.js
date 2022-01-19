    const items = document.querySelector('.items');
    const input = document.querySelector('.footer__input');
    const addBtn = document.querySelector('.footer__btn');
    const form = document.querySelector('.new_form');

    // 이벤트 위임하기_ items에 한번만 이벤트 할당하고 자식요소로 위임하기

    form.addEventListener('submit', (e)=>{
        e.preventDefault(); // submit 후 페이지가 reload 되는것 막음
        onAdd();
    });

    function onAdd(){
        const text = input.value;
        if(text === ''){
            alert('Add your list :)')
            input.focus();
            return
        }
        const item = createItem(text);
        items.appendChild(item)
        item.scrollIntoView({block : 'center'});
        input.value = '';
        input.focus();
    }

    let id = 0; //UUID같은 고유한 유니크 아이디 or 오브젝트에 있는 해시코드 이용해서 고유 아이디 만드는게 좋아

    function createItem(text){
        const itemRow = document.createElement('li');
        itemRow.setAttribute('class','item__row');
        itemRow.setAttribute('data-id', id);
        itemRow.innerHTML = `
            <div class="item">
                <span class="item__name">${text}</span>
                <button class="item__delete"><i class="far fa-trash-alt" data-id=${id}></i></button>
            </div>
            <div class="item__divider"></div>
        `
        id++;
        return itemRow;
    }

    // === form 태그 이용 === 
    // :: js에서 click이나 key 이벤트를 따로 처리 안해도 자동으로 submit 이벤트 발생

    // addBtn.addEventListener('click', ()=>{
    //     onAdd();
    // });

    // input.addEventListener('keyup', event => {
    //     if(event.key === 'Enter'){
    //         onAdd();
    //     }
    // });

    // input.addEventListener('keydown', event => {
    //     if(event.isComposing){
    //         return; //isComposing 이면 처리하지 않고 넘어감
    //     }
    //     if(event.key === 'Enter'){
    //         onAdd();
    //     }
    // });

    // keypress event : deprecated -> beforeinput / keydown(keyup) 으로 대체.
    // keydown : 한글 입력시 두번씩 입력된는 오류 
    // -> 1. keyup 사용 
    // -> 2. isComposing 활용. 글자가 만들어지는 중인지 아닌지 확인.



    items.addEventListener('click', e => {
        // if(e.target.nodeName === 'I'){console.log('nodeNameI')}
        // -> 아이콘이 여러개일땐...? type으로 지정하는건 위험해
        console.log('aaa');
        
        const id = e.target.dataset.id;
        if(id){
            const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
            toBeDeleted.remove();
        }
    });

