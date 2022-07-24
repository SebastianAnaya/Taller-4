// esta validacion e hara para el formulario usercss.html subido al repositorio Taller 3
const nombre = document.getElementById("nombre");
const pais = document.getElementById('pais');
const apellido = document.getElementById("apellido");
const direccion = document.getElementById("direccion");
const usuario = document.getElementById("user");
const contra = document.getElementById("pswr");
const confContra = document.getElementById("con_pswr");
const email = document.getElementById("email");
const form = document.getElementById("form");

form.addEventListener('submit', e=>{
    let regexpswr= new RegExp (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#,%,/,&])([A-Za-z\d$@$!%*?&]|[^ ]){15,20}$/);
    let regexuser= new RegExp(/^[A-Za-z0-9\s]+$/g);
    e.preventDefault();
    if(!pais.value){
        alert('Debe seeccionar un pais');
    }
    if(!nombre.value){
        alert('El campo "Nombre" es obligatorio');
    }
    if(!apellido.value){
        alert('El campo "Apellido" es obligatorio');
    }
    if(!email.value){
        alert('El campo "Correo" es obligatorio');
    }
    if(nombre.value.length > 25){
        alert('El campo "Nombre" excede el límite de 25 caracteres');
    }
    if(apellido.value.length > 25){
        alert('El campo "Apellido" excede el límite de 25 caracteres');
    }
    if((direccion.value.startsWith('cll') || direccion.value.startsWith('cra') || direccion.value.startsWith('av') || direccion.value.startsWith('anv') || direccion.value.startsWith('trans')) === false){
        alert('la direccion debe comenxar con cll ó cra ó av ó anv ó trans');
    }
    if(usuario.value.length > 20 || usuario.value.length <10 || !regexuser.test(usuario.value)){
        alert('El campo "usuario" debe tener entre 10 y 20 caracters, no debe contener caracteres extraños');
    }
    if(!regexpswr.test(contra.value)){
        alert('La contraseña no es valida, debe contener maximo 20 y mínimo 15 caracteres. debe contener mayúsculas , numeros, letras y/o los siguientes caracteres [#,%,/,&]');
    }
    if(confContra.value != contra.value){
        alert('La confirmacion de contraseña no coincide con la contraseña ingresada en el campo anterior');
    }
    if(email.value.length > 120){
        alert('El campo "Correo" excede el límite de 25 caracteres');
    }
})