<script>
    import { onMount } from 'svelte';
    import loggedUser from '../stores/auth'
    import {navigate} from 'svelte-routing'
    
    var accountText = "Login"

    const accountButton = () => {
        if($loggedUser.name === undefined){
            navigate('/login', {replace: true})
        }else{
            navigate('/profile', {replace: true})
        }
    }

    onMount(()=>{
        if($loggedUser.name != undefined){
            accountText = $loggedUser.name
        }
    })
</script>

<header class="navbar">
    <div class="logo">
        <button class="home-icon" on:click={()=>{navigate('/', {replace: true})}}>
            <img src="src/assets/imLogo.png" alt="logoNav" style="width:60px; height:30px">
            <h3>Inmobile</h3>
        </button>
        
    </div>
    <nav>
        <ul>
            <li><button class="navbarOption" on:click={()=>{navigate('/', {replace: true})}}>Home</button></li>
            <li><button class="navbarOption" on:click={()=>{navigate('/properties', {replace: true})}}>Properties</button></li>
            <li><button class="navbarOption" on:click={()=>{}}>About us</button></li>
            <li>
                <button class="navbarOption accountLogOut" on:click={accountButton}>{accountText}
                    {#if $loggedUser.name != undefined}
                        <i class="bi bi-power"></i>
                    {/if}
                </button>
            </li>
        </ul>
        

    </nav>
    
</header>

<style>
    .home-icon{
        background-color: transparent;
        border:none;
    }

    .navbarOption{
        border: none;
        background-color: transparent;
    }

    .navbarOption:hover{
        border-bottom: 2px solid #f0b04c;
    }

    nav ul li{
        display: inline-block;
    }

    nav ul{
        display: inline-block;
        list-style: none;
        padding-top: 1.5vh;
    }

    nav{
        flex:1;
        text-align: right;
    }

    .navbar{
        height: 10vh;
        display: flex;
        align-items: center;
        padding-left: 5%;
        padding-right: 5%;
        -webkit-box-shadow: 0px -16px 44px -1px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px -16px 44px -1px rgba(0,0,0,0.75);
        box-shadow: 0px -16px 44px -1px rgba(0,0,0,0.75);
    }

    .accountLogOut:hover{
        color:red
    }
</style>