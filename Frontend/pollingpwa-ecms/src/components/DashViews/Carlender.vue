<template>
<div >
 
   <v-container max-height="400px" style="overflow-y: auto">
     <v-card  flat class="white"  v-for="project in projects" :key="project.nature_complaint">
       <v-layout row wrap :class="`pa-3 project ${project.status}`">
         <v-flex xs12 md6>
           <div class="caption grey--text">Complaint Category</div>
           <div>{{project.nature_complaint}}</div>  
         </v-flex>
         <v-flex xs4  md6>
          <div class="right">
            <v-chip  small :class="`${project.status} white--text caption my-3`">
              {{project.status}}
            </v-chip>
          </div>
         </v-flex>
       </v-layout>
        
     </v-card>
     
  </v-container>
</div>
 
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return{
      projects:[]

      
    }
  },
  created(){
    axios.get('https://aaomach.pythonanywhere.com/admingetcomplaints',{
            headers:{
            'x-access-token': localStorage.getItem('token')
            }
        }).then(response =>{
      this.projects = response.data
    }
      
    )
  }

  

}

</script>

<style lang="stylus" scoped>
.project.Pending{
  border-left: 4px solid green
}
.project.Resolved{
  border-left: 4px solid orange
}
.project.Declined{
  border-left: 4px solid tomato
}
.project.Unresolved{
  border-left: 4px solid purple
}
.v-chip.Pending{
  background: green 
}
.v-chip.Resolved{
  background:  #004080
}
.v-chip.Declined{
  background:  tomato
}
.v-chip.Unresolved{
  background:  purple
}
</style>
