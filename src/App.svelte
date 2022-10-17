<script>
	import {Router, Route} from "svelte-routing";
  import Login from "./pages/Login.svelte"
  import Home from "./pages/Home.svelte"
</script>

<Router>
  <Route path="/login">
		<Login/>
	</Route>

  <Route path="/home">
		<Home/>
	</Route>
</Router>