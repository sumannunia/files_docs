let x;
// if (localStorage.getItem('loginStatus') === null || localStorage.getItem('loginStatus') === undefined) {
//     window.location = './login.html'
// } else {
    async function getData() {
        let res = await fetch(`https://www.nightkingoil.in/:3000/api/user/all`);
        let data = await res.json();
        console.log(data);
        let tableBody = document.getElementById('tableBody');
        data.map((detail, index) => {
        })
        x = new RdataTB('myTable', {
            // HideColumn:["City"], // Hide column
            fixedTable: true, // fixed table
            RenderJSON: data, // Convert Json to Table html 
            ShowSearch: true, // show search field,
            ShowSelect: true, // show show select,
            ShowPaginate: true, // show paginate ,
            SelectionNumber: [10, 20, 50], //Change Option in Select
            ShowHighlight: true, // show Highlight if search
            fixedTable: true, // fixed table
            sortAnimate: true // show animated if sorted
        });
    }
    getData();
// }
