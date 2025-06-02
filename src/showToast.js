export function showToast(operation, id){
    const toast = document.createElement('div');
    toast.classList.add('customToast');

    if(operation === "add"){
        toast.textContent = `Product With ID ${id} has been added.`
    }else{
        toast.textContent = `Product with ID ${id} has been deleted.`
    }


    document.body.append(toast);

    // Remove the toast after some time 
    setTimeout(() => {
        toast.remove();
    }, 2000)

}

