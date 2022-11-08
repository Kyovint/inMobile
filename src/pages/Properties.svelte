<script>
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/Footer.svelte';
    import {addDoc, collection, onSnapshot} from 'firebase/firestore'
    import {db} from '../firebase'
    import { navigate, Link } from 'svelte-routing';
    

    var allProperties = []

    var property = {
        address: "cll 56 bis # 45 90",
        antiquity: 2,
        area: 72,
        baths: 2,
        description: "casa de damara",
        elevator: true,
        enclosure: "Conjunto la plaza",
        garage: true,
        idUser: "o6XQyiuFxBOyRaIvj0lJoWBF0wg2",
        location:"Bogotá",
        managementPrice: 234000,
        price: 324570000,
        rooms: 3,
        stratum: 4,
        title: "Apt. 567 calle 3",
    }

    const handleSubmit = async () =>{
        await addDoc(collection(db,'apartments'),property)
        console.log("Succesfull")
    }

    onSnapshot(collection(db, 'apartments'), (querySnapshot) =>{
        allProperties = querySnapshot.docs.map(doc => {
            return {...doc.data(), id: doc.id}
        })
    }, error =>{
        console.log("ha ocurrido un error " +  error)
    })

    const COPformatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'COP'
    })

</script>

<Navbar/>
<button on:click={handleSubmit}>dasdas</button>

<div class='properties-container'>



    <div class="card-container">
        {#each allProperties as property}
            <button class="card" >
                <Link to="properties/{property.id}" getProps={()=>{return {class:'card-without-Link-styles'}}}>
                    <img src="src/assets/interior.jpg" alt="propertyImg" style="width:100%;">
                    <div class="information-container">
                    <h3><b>{property.title}</b></h3> 
                    <h4>$ {COPformatter.format(property.price)}</h4>
                    <span>
                        <i class="bi bi-geo-alt"></i>
                        {property.location}
                    </span>
                    <hr class="solid">
                    <span>
                        <i class="bi bi-arrows-fullscreen"></i> {property.area}m<sup>2</sup> 
                        {#if property.garage === true}
                         &#10072; <i class="bi bi-car-front"></i> Parq.
                        {/if}
                    </span>
                    </div>
                </Link>
            </button>
        {/each}
    </div>
</div>
<Footer/>

<style>

    .card :global(.card-without-Link-styles){
        text-decoration: none;
        color: black;
        transition: 0.5s;
    }

    .card :global(.card-without-Link-styles):hover{
        color: white
    }

    h3{
        font-size: 25px;
        font-weight: bold;
        text-decoration: none;
    }
    h4{
        font-size: 18px;
    }
    .properties-container{
        display: flex;
        height: 100%;
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 5%;
    }
    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        padding: 9px;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 30%;
        height: 100%;
        margin: 10px;
        transition: 0.5s;
        padding-top: 5px;
    }

    img{
        filter: grayscale(80%);
        border-radius: 6px;
    }

    img:hover{
        filter: grayscale(0%);
        border-radius: 6px;
    }

    

    .information-container{
        width: 100%;
        line-height: 0;
        padding-left: 3%;
        padding-bottom: 3%;
        padding-top: 5px;
        padding-right: 3%;
        text-align: left;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        background-color: rgb(255, 166, 99);
    }

    .card-container {
        padding: 2px 16px;
        height: 100%;
    }
</style>