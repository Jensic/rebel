/********************************************
*            HELPER FUNCTIONS               *
********************************************/

function createNode(element) {
    
    return document.createElement(element);

}

function append(parent, el) {
    
    return parent.appendChild(el);
    
}

/********************************************
*               VARIABLES                   *
********************************************/

const ul = document.querySelectorAll('.list');

/********************************************
*                USERS                      *
********************************************/

/*const ul1 = document.getElementById("users");

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    //console.log(data);
    
    return data.map(function(user) {
        
        let li = createNode('li');
        li.setAttribute("id", `${user.id}`);
        let span = createNode('span');
        
        span.innerHTML = `${user.name} ${user.id}`;
        
        append(li, span);
        append(ul1, li);
        
    })
})
.catch(function(error) {
    console.log(JSON.stringify(error));
});*/

/********************************************
*                TODOS                      *
********************************************/

/*const ul2 = document.getElementById("todos");

const url2 = 'https://jsonplaceholder.typicode.com/todos';

fetch(url2)
.then((resp) => resp.json())
.then(function(data) {
    //console.log(data);
    
    return data.map(function(todo) {
        //console.log(todo);
        let li = createNode('li');
        li.setAttribute("id", `${todo.userId}`);
        let span = createNode('span');
        
        span.innerHTML = `${todo.title} ${todo.userId} ${todo.completed}`;
        
        append(li, span);
        append(ul2, li);
        
    })
})
.catch(function(error) {
    console.log(JSON.stringify(error));
});*/

/********************************************
*                TEST                      *
********************************************/

/*const ul1 = document.getElementById("users");

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    //console.log(data);
    
    data.map(function(user) {
        
        const obj = data.find(function (obj) { return obj.id === 1; });
        //console.log(obj);
        
    })
    
    return data.map(function(user) {
        let userData = `${user.name} ${user.id}`;
        //console.log(userData);
        
        let li = createNode('li');
        li.setAttribute("id", `${user.id}`);
        let span = createNode('span');
        
        //span.innerHTML = `${user.name}`;
        li.innerHTML = `${user.name}`;
        
        //append(li, span);
        append(ul1, li);
        
    })
})
.catch(function(error) {
    console.log(JSON.stringify(error));
});

const ul2 = document.getElementById("todos");
const ul3 = document.getElementById("todos1");

const url2 = 'https://jsonplaceholder.typicode.com/todos';

fetch(url2)
.then((resp) => resp.json())
.then(function(data) {
    //console.log(data);
        
    for(let i = 0; i < data.length; i++) {
        let test = data[i];
        //console.log(test);
        if(data[i].userId === 1) {
            console.log("match");
        }
    }
    
    return data.map(function(todo) {
        //console.log(todo);
        let li = createNode('li');
        li.setAttribute("class", "todo-" + `${todo.userId}` + "");
        let span = createNode('span');
        
        //span.innerHTML = `${todo.title}`;
        li.innerHTML = `${todo.title}`;
        
        let todoCompleted = todo.completed;
        //console.log(todoCompleted);
        if(todoCompleted) {
            //console.log("Ho");
            li.setAttribute("class", "done");
        }
        
        //append(li, span);
        append(ul2, li);
        
    })
})
.catch(function(error) {
    console.log(JSON.stringify(error));
});*/

/*var url = 'https://jsonplaceholder.typicode.com/users';

var result = fetch(url)
.then(function(response) {
    
    return response.json(); // pass the data as promise to next then block
  
})
.then(function(data) {
    
    console.log(data);
    //var id = data[0].id;

    //console.log(id);
  
    //return fetch('https://jsonplaceholder.typicode.com/todos/' + id); // make a 2nd request and return a promise
    return fetch('https://jsonplaceholder.typicode.com/todos/'); // make a 2nd request and return a promise
  })
.then(function(response) {
    
    return response.json();

})
.catch(function(error) {
    
    console.log('Request failed', error)

})

// I'm using the result variable to show that you can continue to extend the chain from the returned promise
result.then(function(r) {
    
  console.log(r); // 2nd request result

});*/

var apiRequest1 = fetch('https://jsonplaceholder.typicode.com/users').then(function(response){ 
         return response.json()
});
var apiRequest2 = fetch('https://jsonplaceholder.typicode.com/todos').then(function(response){
         return response.json()
});
var combinedData = {"apiRequest1":{},"apiRequest2":{}};
                    
Promise.all([apiRequest1,apiRequest2]).then(function(values){
    combinedData["apiRequest1"] = values[0];
    combinedData["apiRequest2"] = values[1];
    //return combinedData;
    //console.log(combinedData);
    test(combinedData);
    
});
//console.log(combinedData);
let test = (combinedData) => {
    console.log(combinedData);
}
test();
/********************************************
*               FUNCTIONS                   *
********************************************/

for (let i = 0; i < ul.length; i++) {
    ul[i].addEventListener("click", function(event) {
        let target = event.target;
        //console.log(event);
        //target.classList.toggle("done");
        //let user = event.path[1].id;
        let user = event.srcElement.id;
        
        let leanne      = document.querySelectorAll(".todo-1");
        let ervin       = document.querySelectorAll(".todo-2");
        let clementine  = document.querySelectorAll(".todo-3");
        let patricia    = document.querySelectorAll(".todo-4");
        let chelsey     = document.querySelectorAll(".todo-5");
        let dennis      = document.querySelectorAll(".todo-6");
        let kurtis      = document.querySelectorAll(".todo-7");
        let nicholas    = document.querySelectorAll(".todo-8");
        let glenna      = document.querySelectorAll(".todo-9");
        let clementina  = document.querySelectorAll(".todo-10");
        //console.log(leanne);
        

        switch(user) {
            case "1":
                console.log(event.srcElement.innerText);
                target.classList.toggle("marked");
                for(let i = 0; i < leanne.length; i++) {
                    leanne[i].classList.toggle("marked");
                }
                break;
            case "2":
                console.log(event.srcElement.innerText);
                target.classList.toggle("marked");
                for(let i = 0; i < ervin.length; i++) {
                    ervin[i].classList.toggle("marked");
                }
                break;
            case "3":
                console.log(event.srcElement.innerText);
                target.classList.toggle("marked");
                for(let i = 0; i < clementina.length; i++) {
                    clementine[i].classList.toggle("marked");
                }
                break;
            case "4":
                console.log(event.srcElement.innerText);
                target.classList.toggle("marked");
                for(let i = 0; i < patricia.length; i++) {
                    patricia[i].classList.toggle("marked");
                }
                break;
            case "5":
                console.log(event.srcElement.innerText);
                target.classList.toggle("marked");
                for(let i = 0; i < chelsey.length; i++) {
                    chelsey[i].classList.toggle("marked");
                }
                break;
            case "6":
                console.log(event.srcElement.innerText);
                target.classList.toggle("marked");
                for(let i = 0; i < dennis.length; i++) {
                    dennis[i].classList.toggle("marked");
                }
                break;
            case "7":
                console.log(event.srcElement.innerText);
                target.classList.toggle("marked");
                for(let i = 0; i < kurtis.length; i++) {
                    kurtis[i].classList.toggle("marked");
                }
                break;
            case "8":
                console.log(event.srcElement.innerText);
                target.classList.toggle("marked");
                for(let i = 0; i < nicholas.length; i++) {
                    nicholas[i].classList.toggle("marked");
                }
                break;
            case "9":
                console.log(event.srcElement.innerText);
                target.classList.toggle("marked");
                for(let i = 0; i < glenna.length; i++) {
                    glenna[i].classList.toggle("marked");
                }
                break;
            case "10":
                console.log(event.srcElement.innerText);
                target.classList.toggle("marked");
                for(let i = 0; i < clementina.length; i++) {
                    clementina[i].classList.toggle("marked");
                }
                break;

        }
    })
} 

const userShow = document.querySelector('#userShow');

const x = document.getElementById("users");

userShow.addEventListener("click", function() {
    //console.log("Hi");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

})

const todoShow = document.querySelector('#todoShow');

const y = document.getElementById("todos");

todoShow.addEventListener("click", function() {
    //console.log("Hi");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }

})