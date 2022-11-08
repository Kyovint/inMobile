<script>
	import {Router, Route} from "svelte-routing";
  	import Login from "./pages/Login.svelte"
  	import Home from "./pages/Home.svelte"
	import Properties from "./pages/Properties.svelte";
	import Property from "./pages/Property.svelte";
</script>

<Router>
	<Route path="/">
		<Home/>
	</Route>

    <Route path="/login">
		<Login/>
	</Route>

	<Route path="/properties">
		<Properties/>
	</Route>

	<Route path="/properties/:id" let:params>
		<Property id={params.id}/>
	</Route>
</Router>