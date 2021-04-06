// let nav = document.getElementById("nav");
// let btn = document.getElementById("btn");


// btn.addEventListener('click', (e) => {
//         nav.classList.toggle("active");
// });
let list = document.querySelectorAll('ul li');
list.forEach(function (li) {
        li.addEventListener('click', function (e) {
                e.preventDefault();
                let listdata = e.target.parentNode.children[1];
                if (listdata === undefined) {
                        console.log("no dropdown");

                }
                else {
                        listdata.classList.toggle("active");
                        console.log(listdata);
                }

        });
});