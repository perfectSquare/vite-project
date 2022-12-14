<template><div class="flex flex-col gap-y-2 p-4">      

  <div class="flex gap-4">
    <div @click='loadData("acc")' class="bg-gray-100 p-2">accessories</div>
    <div @click='loadData("lap")' class="bg-gray-100 p-2">laptops</div>
    <div @click='loadData("sto")' class="bg-gray-100 p-2">storage</div>
    <div @click='loadData("mon")' class="bg-gray-100 p-2">monitors</div>
  </div>

  <div class="p-6 grid grid-cols-3 gap-4"> 
  <template v-for='(ax,i) in dt' :key='i'>
    <div class="flex flex-col gap-y-1 p-2">
      <img :src="ax.image" class='h-64'>
      <div>{{ax.name}}</div>
      <div><span class='text-red-400'>$</span> {{ax.price}}</div>

      <div class='flex justify-center'>
        <div @click='delDoneAcc(ax.id)'>del</div>
        <div @click='newDone(ax.type)'>new</div>
      </div>     

    </div>
  </template>        
  </div>

  
  <router-link to='/test'>test page</router-link> 

</div></template>

<script setup>


  import axios from 'axios'
  import { ref } from 'vue'

  const galleryShow = ref(false)
  const two = ref(false)

  const dt = ref([])

  const loadData = (x) => {
    if(x == 'acc'){
      axios.get("http://localhost:3000/accessories")
      .then((res) => {
        dt.value = res.data      
      })
    }
    else if(x == 'lap'){
      axios.get("http://localhost:3000/laptops")
    .then((res) => {
      dt.value = res.data      
    })
    }
    else if(x == 'sto'){
      axios.get("http://localhost:3000/storage")
    .then((res) => {
      dt.value = res.data      
    })
    }
    else if(x == 'mon'){
      axios.get("http://localhost:3000/monitors")
      .then((res) => {
        dt.value = res.data      
    })
    }
  }  

  const delDoneAcc = (id) => {
    axios.delete(`http://localhost:3000/accessories/${id}`)
    .then(() => {
      axios.get("http://localhost:3000/accessories")
      .then((res) => {
        dt.value = res.data      
      })
    })
  }


const newDone = (type) => {
  axios.put(`http://localhost:3000/accessories`, {
    "id":17,
        "type": "accessories",
        "price": 299.99,
        "name": "new",
        "description": "Seagate IronWolf Pro 16TB NAS Internal Hard Drive HDD – CMR 3.5 Inch SATA 6GB/S 7200 RPM 256MB Cache for Raid Network Attached Storage, Data Recovery Rescue Service (ST16000NE000)",
        "manufacturer": "Seagate",
        "image":"/assets/dashboard/storage/2.jpg",
        "best":false,
        "stock": 20,
        "stars": 4.6
  })
}
    

</script>

<style scoped>
  .st{
    background-color: seagreen;
    padding: 10px;
    margin: 10px;    
  }
  .fixedDiv{
    width: 90%;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
  }
  .v-enter-from{ opacity:0;  }
  .v-enter-to{ opacity:1;  }
  .v-enter-active{ transition:all 1s linear;  }
</style>
