const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name) 
} 
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const newcats = [...cats, name]
  return newcats
}
function prependCat(name){
    const deletecats = [name,...cats]
    return deletecats
}
function removeLastCat (){
   const onlytwocats = cats.slice(0, 2)
    return onlytwocats  
}
function removeFirstCat(){
    const lasttwocats = cats.slice(1)
    return lasttwocats
}



