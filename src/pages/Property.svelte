<script>
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
    export let id = "";

</script>

<Navbar/>
{id}
<div class="single-property-container">
    <div class="main-details">
        <div class="images-container">
            <img src="https://images.adsttc.com/media/images/5e62/baaf/6ee6/7e36/9500/024b/newsletter/Sergio_Rueda_FI.jpg?1583528616" alt="" width="100%">
        </div>
        <div class="single-information-container">
            <img src="https://images.adsttc.com/media/images/5e62/baaf/6ee6/7e36/9500/024b/newsletter/Sergio_Rueda_FI.jpg?1583528616" alt="" width="100%">
        </div>
    </div>
</div>
<Footer/>

<style>
    .images-container{
        width: 50%;
        height: 100%;
    }
    .main-details{
        display: flex;
        height: 100%;
        width: 100%;
        margin-top: 5%;
        justify-content: center;
        flex-direction: row;
        border: 2px solid blue;
    }

    .single-property-container{
        display: flex;
        height: 100%;
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 5%;
        border: 2px solid red;
    }

</style>