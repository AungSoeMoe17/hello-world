/* Shopping List */
let inputTag = document.querySelectorAll('.form-control')[0];
let shoppingListTag = document.querySelectorAll('.shoppingList')[0];
let productList = [];
let productId = 1 ;

let handleChange = (event) => {
    if(event.keyCode === 13){
        let productContainer = document.createElement('div');
        productContainer.classList.add('productContainer');

        let parentTag = document.createElement('div');
        parentTag.classList.add('productName');

        let spangTag = document.createElement('span');
        spangTag.id = 'product' + productId ;

        let trashIcon = document.createElement('i');
        trashIcon.classList.add('fa-solid','fa-trash','trashIcon');
        trashIcon.addEventListener( 'mouseenter', () => { trashIcon.classList.add('fa-bounce')});
        trashIcon.addEventListener( 'mouseleave', () => { trashIcon.classList.remove('fa-bounce')});
        trashIcon.addEventListener( 'click', () => {
            productList.splice( productList.indexOf(productContainer),1);
            productContainer.remove();
            productId--;
            for(let x in productList){
                let spanTag = productList[x].querySelector('span') ;
                spanTag.id = 'product' + x ;
                spanTag.innerText = (Number(x)+1) + '. ' + [...spanTag.innerText].splice(3).join('');
            }
        })
        spangTag.append( productId + '. '+ event.target.value);
        parentTag.addEventListener( 'click', (event)=>{
            const classExist = parentTag.classList.contains('purchased');
            if(classExist){
                parentTag.classList.remove('purchased');
            }else{
                parentTag.classList.add('purchased');
            }
        })
        
        parentTag.append(spangTag);
        productContainer.append(parentTag,trashIcon);
        shoppingListTag.append(productContainer);
        productList.push(productContainer);
        event.target.value = '';

        productId++;
    }
}

inputTag.addEventListener( 'keydown', handleChange );
