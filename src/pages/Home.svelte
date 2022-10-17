<script>
    import { onMount } from 'svelte';
    import loggedUser from '../stores/auth'
    import {navigate} from 'svelte-routing'

    onMount(() =>{
        if(!$loggedUser.IsLoggedIn){
            navigate('/login', {replace: true})
        }
    })
</script>

<div>
    Hola {$loggedUser.name}
</div>