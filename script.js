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

const ul1 = document.getElementById("users");
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    
    data.map(function(user) {
        
        const obj = data.find(function (obj) { return obj.id === 3; });
        
    })
    
    return data.map(function(user) {
        let userData = `${user.name} ${user.id}`;
        
        let li = createNode('li');
        li.setAttribute("id", `${user.id}`);
        let span = createNode('span');
        
        li.innerHTML = `${user.name}`;
        
        append(ul1, li);
        
    })
})
.catch(function(error) {
    console.log(JSON.stringify(error));
});

/********************************************
*                TODOS                      *
********************************************/

const ul2 = document.getElementById("todos");
const ul3 = document.getElementById("todos1");

const url2 = 'https://jsonplaceholder.typicode.com/todos';

fetch(url2)
.then((resp) => resp.json())
.then(function(data) {
    
    return data.map(function(todo) {
        let li = createNode('li');
        li.setAttribute("class", "todo-" + `${todo.userId}` + "");
        let span = createNode('span');
        
        li.innerHTML = `${todo.title}`;
        
        let todoCompleted = todo.completed;
        if(todoCompleted) {
            
            li.setAttribute("class", "done");
        }
        
        append(ul2, li);
        
    })
})
.catch(function(error) {
    console.log(JSON.stringify(error));
});

/********************************************
*                TEST                      *
********************************************/

/********************************************
*               FUNCTIONS                   *
********************************************/

for (let i = 0; i < ul.length; i++) {
    ul[i].addEventListener("click", function(event) {
        let target = event.target;
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

        switch(user) {
            case "1":
                target.classList.toggle("marked");
                for(let i = 0; i < leanne.length; i++) {
                    leanne[i].classList.toggle("marked");
                }
                break;
            case "2":
                target.classList.toggle("marked");
                for(let i = 0; i < ervin.length; i++) {
                    ervin[i].classList.toggle("marked");
                }
                break;
            case "3":
                target.classList.toggle("marked");
                for(let i = 0; i < clementina.length; i++) {
                    clementine[i].classList.toggle("marked");
                }
                break;
            case "4":
                target.classList.toggle("marked");
                for(let i = 0; i < patricia.length; i++) {
                    patricia[i].classList.toggle("marked");
                }
                break;
            case "5":
                target.classList.toggle("marked");
                for(let i = 0; i < chelsey.length; i++) {
                    chelsey[i].classList.toggle("marked");
                }
                break;
            case "6":
                target.classList.toggle("marked");
                for(let i = 0; i < dennis.length; i++) {
                    dennis[i].classList.toggle("marked");
                }
                break;
            case "7":
                target.classList.toggle("marked");
                for(let i = 0; i < kurtis.length; i++) {
                    kurtis[i].classList.toggle("marked");
                }
                break;
            case "8":
                target.classList.toggle("marked");
                for(let i = 0; i < nicholas.length; i++) {
                    nicholas[i].classList.toggle("marked");
                }
                break;
            case "9":
                target.classList.toggle("marked");
                for(let i = 0; i < glenna.length; i++) {
                    glenna[i].classList.toggle("marked");
                }
                break;
            case "10":
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
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

})

const todoShow = document.querySelector('#todoShow');

const y = document.getElementById("todos");

todoShow.addEventListener("click", function() {
    
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }

})