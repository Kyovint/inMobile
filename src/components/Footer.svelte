<div class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col-1">
                <h3>Inmobile</h3>
                <p>Una app desarrollada con cariño desde Bogotá, Colombia</p>
            </div>
            <div class="footer-col-2">
                <img src="src/assets/imLogo.png" alt="logoNav" style="width:60px; height:30px">
                <p>Tesis Ingeniería de software UMB 2023. <br> Kevin Andres Ardila Sanabria <br> David Alejandro Rojas Espejo</p>
            </div>
            <div class="footer-col-3">
                <h3>Links Utiles</h3>
                <ul>
                    <li>Copnes</li>
                    <li>Legal</li>
                    <li>Gobierno</li>
                </ul>
            </div>
            <div class="footer-col-4">
                <h3>Siguenos en IG</h3>
                <ul>
                    <li>DavidRedz10</li>
                    <li>Kyovint</li>
                </ul>
            </div>
        </div>
        <hr>
        <p>Copyright 2022 - Kevin Ardila & David Rojas</p>
    </div>
</div>

<style>
    .container{
        max-width: 1300px;
        margin: auto;
        padding-left: 5%;
        padding-right: 5%;
    }

    .footer{
        background-color: black;
        color: white;
        font-size: 14px;
        padding: 40px 0  5px;
    }

    .footer p{
        color: white;
    }

    .footer h3{
        color: white;
        margin-bottom: 20px;
    }

    .footer-col-1, .footer-col-2, .footer-col-3, .footer-col-4{
        min-width: 250px;
        margin-bottom: 20px;
    }

    .footer-col-1{
        flex-basis: 30%;
    }

    .footer-col-2{
        flex: 1;
        text-align: center;
    }

    .footer-col-2 img{
        width: 180px;
        margin-bottom: 20px;
    }

    .footer-col-3, .footer-col-4{
        flex-basis: 12%;
        text-align: center;
    }

    ul{
        list-style-type: none;
    }

    .row{
        display:flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>