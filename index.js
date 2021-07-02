results= function(element) {
    return (element.result==="W") 

}
function superbowlWin(array) {
    const dub= array.find(results)
    if (dub===undefined) {
        return undefined;
    } else {
    return dub.year;
    }
}