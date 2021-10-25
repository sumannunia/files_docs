async function searchresults(){
    let response  =  await fetch('./json.txt',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
    })
    let data  = await response.json()
    // console.log(data)
    return data
}
searchresults()
.then(data =>{
    
    data.NewDataSet.Product.map(details=>{
        console.log(details)
    })
    
})
// let xhr  = new XMLHttpRequest()
// xhr.open("GET","./json.txt", true)
// xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
// xhr.onload= function(){
//     if(this.readyState == 4 && this.status == 200){
//         let data = JSON.parse(this.response)
//         console.log(data)
//     }
// }
// xhr.send()