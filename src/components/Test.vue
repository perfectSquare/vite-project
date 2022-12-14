<template><div>
	<div class="flex flex-col">
<div>{{user.name}}</div>
<div>{{user.age}}</div>
	</div>



</div></template>

<script setup>
	import { useRoute } from 'vue-router'

	const route = useRoute()

	const users = [
		{			
			name:'naeem',
			age:12		
		},
			{			
			name:'adam',
			age:11		
		},

	]

	const name = route.params.name 

	const user = users.find((u)=>{
			return u.name == name
		})

	
</script>

