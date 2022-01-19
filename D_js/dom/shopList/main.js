    const items = document.querySelector('.items');
    const input = document.querySelector('.footer__input');
    const addBtn = document.querySelector('.footer__btn');

    function onAdd(){
        //1. 사용자가 입력한 input 받아오기
        const text = input.value;
        if(text === ''){
            alert('Add your list :)')
            input.focus();
            return
        }
        console.log(text);

        //2. 새로운 아이템 생성 (인풋 텍스트 + 삭제버튼)
        const item = createItem(text);
        
        //3. items 컨테이너 안에 새로 만든 아이템 추가
        items.appendChild(item)

        //4. 새로 추가된 아이템으로 스크롤링
        item.scrollIntoView({block : 'center'});

        //5. input창에 입력했던 텍스트 초기화
        input.value = '';
        input.focus();
    }

    function createItem(text){
        const itemRow = document.createElement('li');
        itemRow.setAttribute('class','item__row')  ;

        const item = document.createElement('div');
        item.setAttribute('class','item');

            const itemName = document.createElement('span');
            itemName.setAttribute('class','item__name');
            itemName.innerText = text;

            const deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class','item__delete');
            deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
            
            deleteBtn.addEventListener('click', ()=>{
                items.removeChild(itemRow);
            });

        const itemDivider = document.createElement('div');
        itemDivider.setAttribute('class','item__divider');

        item.appendChild(itemName);
        item.appendChild(deleteBtn);

        itemRow.appendChild(item);
        itemRow.appendChild(itemDivider);

        return itemRow;

    }

    addBtn.addEventListener('click', ()=>{
        onAdd();
    });

    input.addEventListener('keypress', event=>{
        if(event.key === 'Enter'){
            onAdd();
        }
        console.log('key') // 알파벳만 인식
    })

// - input에서 타이핑
// - item 등록 : 버튼 클릭 or 엔터키
// - 등록한 item은 list에 추가
// - item에 포함된 delelte 버튼으로 삭제
