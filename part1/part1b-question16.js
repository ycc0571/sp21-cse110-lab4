for (const property in r) {
    if(property.charAt(0) == 'r'){
        console.log(`${r[property]}`);
    }else if((r[property] % 2) == 1){
        console.log(`${r[property]}`);
    }
}