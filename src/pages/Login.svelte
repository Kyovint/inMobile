<script>
    import {auth}from "../firebase.js"
    import {GoogleAuthProvider, signInWithPopup}from "firebase/auth"
    import loggedUser from '../stores/auth'
    import {navigate} from 'svelte-routing'

    const authProcess = async() =>{
        if(!$loggedUser.IsLoggedIn){
            try{
            const provider = new GoogleAuthProvider();
            const res= await signInWithPopup(auth, provider);
            loggedUser.saveUser(res.user)
            navigate('/Home', {replace: true})
            }catch(error){
                console.log(error)
            }
        }
    }
</script>

<div class="login-container">
    <div class="square">
        <div class="information-part">
            Bienvenidos a InMobile
        </div>
        <div class="form-part">
            <div class="form">
                <h2>Inicio de sesión</h2>
                <input type="text" placeholder="Usuario">
                <input type="password" placeholder="Contraseña">
                <span>¿Olvidaste tu contraseña?</span>
                <button class="form-button"> Iniciar sesión</button>

                <div class="divider">
                    <span style="font-size: 20px; background-color: white; padding: 0 10px;">
                        ó 
                    </span>
                </div>

                <button class="google-button" on:click={authProcess}>
                    <img 
                    src="/src/assets/googleIcon.png"
                    alt="google"
                    style="width:30px; height:30px"/> 
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    .google-button{
        display:flex;
        height: 55px;
        width: 55px;
        border-radius: 50%;
        border: none;
        padding: 13px;
        background-color: white;
    }

    .divider{
        width: 90%;
        height: 20px; 
        border-bottom: 1px solid grey; 
        text-align: center;
        margin-top: 20px;
        margin-bottom: 15px;
    }

    .form-button {
        background: rgb(103,69,0);
        background-image: -webkit-linear-gradient(top, rgb(103,69,0),  rgba(255,187,33,1));
        background-image: -moz-linear-gradient(top, rgb(103,69,0),  rgba(255,187,33,1));
        background-image: -ms-linear-gradient(top, rgb(103,69,0),  rgba(255,187,33,1));
        background-image: -o-linear-gradient(top, rgb(103,69,0),  rgba(255,187,33,1));
        background-image: linear-gradient(to bottom, rgb(103,69,0),  rgba(255,187,33,1));
        -webkit-border-radius: 28;
        -moz-border-radius: 28;
        border-radius: 28px;
        color: #ffffff;
        font-size: 15px;
        padding: 5px 10px 5px 10px;
        text-decoration: none;
        border: none;
    }

    .form-button:hover {
        background:  rgba(255,187,33,1);
        background-image: -webkit-linear-gradient(top,  rgba(255,187,33,1),  rgba(255,187,33,1));
        background-image: -moz-linear-gradient(top,  rgba(255,187,33,1),  rgba(255,187,33,1));
        background-image: -ms-linear-gradient(top,  rgba(255,187,33,1),  rgba(255,187,33,1));
        background-image: -o-linear-gradient(top,  rgba(255,187,33,1),  rgba(255,187,33,1));
        background-image: linear-gradient(to bottom,  rgba(255,187,33,1),  rgba(255,187,33,1));
        text-decoration: none;
    }
    span{
        padding-right: 5%;
        width: 100%;
        text-align: end;
        margin-bottom: 20px;
    }
   *:focus {
        outline: none;
    }
    input{
        border: none;
        background-color: rgba(103, 69, 0, 0.244);
        border-radius: 28px;
        width: 90%;
        height: 35px;
        text-align: center;
        margin-bottom: 20px;
    }

    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: fit-content;
    }

    .form-part{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45%;
        height: 100%;
        background-color: white; 
        color:rgb(103,69,0);
    }

    .information-part{
        border-radius: 10px 0 0 10px;
        width: 55%;
        height: 100%;
        background-color: black;
        background:linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/loginbg.jpg");
        
    }

    .login-container{
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(103,69,0);
        background: linear-gradient(122deg, rgb(211, 143, 8) 0%, rgba(244,202,110,1) 63%, rgba(255,187,33,1) 100%);
        min-height: 100vh;
    }

    .square{
        display: flex;
        flex-direction: row;
        background-color: aliceblue;
        min-height: 200px;
        height: 80vh;
        min-width: 500px;
        width: 80%;
        border-radius: 10px;
    }
    
</style>