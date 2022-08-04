// $(selector).accion()

// $("li").hide()

// $(document).ready() -> esto es lo mismo $(() => {})

$(() => {
    //selectores:
    //id="el-1" => "#el-1"
    //class="el-1" => "#el-1"
    // Borra el elemento selecionado
    //$("#el-1").hide()

    $(".hide-btn").click(() => {
        //$("h1").hide()
        //.FADEOUT genera un pequeño dilay al ser borrado
        $("h1").fadeOut()
    })
    $(".show-btn").click(() => {
        //$("h1").show()
        $("h1").fadeIn()
    })
    
    // .CSS Cambiar de color haciendo un doble click
    $("li").dblclick(() => {
        $("h1").css({ color: "red" })
    })

    // PREPEND Añadir un nuevo elemento a la lista 
    $(".new-element").click(() => {
        // al final de la lista
        // $("ul").append("<li>New Element</li>")
        // al principio de la lista
        $("ul").prepend("<li>New Element</li>")
    })

    // MOUSEENTER ealiza un hover
    $("li").mouseenter((elem) => {
        //console.log("Ha entrado el raton (hover)")
        elem.target.style.color = "blue"
    })

    $("li").mouseleave((elem) => {
        elem.target.style.color = "black"
    })
})