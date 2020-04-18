<template>
<div class="dashboard">
    <navbar/>
    <v-layout wrap >
   
    
       
         <v-flex xs12 md12>
              <v-card
   
  
  >
    <v-toolbar
      color="white"
      dark
    >
    

      <v-toolbar-title class="black--text">Complaints</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  
      <v-layout >
        <v-flex xs12 md12 >
                  <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.nature_complaint"
        v-model="item.active"
        sub-group
      >
        
        <template v-slot:activator>
          <!-- <v-list-item-content> -->
            <v-layout wrap >
                <v-list-item-title class="black--text" v-text="item.nature_complaint"></v-list-item-title>
              <v-spacer></v-spacer>
              <!-- <v-chip> -->
                <v-list-item-title class="mx-3"  style="color: #084524;" v-text="item.status"></v-list-item-title>
              <!-- </v-chip > -->
               <v-flex xs4 md12>
                    <v-list-item-title class="float-left" v-text="item.date"></v-list-item-title>
               </v-flex>
            </v-layout>
            
            
          <!-- </v-list-item-content> -->
        </template>

        <v-list-item
        >
          <v-list-item-content>
            <h4 class="pink--text">Reference</h4>
            <v-list-item-title v-text="item.complaints_refn0"></v-list-item-title>
            <h4 class="black--text">Complaint</h4>
            <v-list-item-title v-text="item.complaint"></v-list-item-title>
            <!-- <h4>Date</h4>
             <v-list-item-title v-text="item.date"></v-list-item-title> -->
             <h4 class="green--text">status</h4>
             <v-list-item-title v-text="item.status"></v-list-item-title>
             <h4 class="orange--text">district resolution</h4>
             <v-list-item-title v-text="item.district_resolutions"></v-list-item-title>
             <h4 class="purple--text">headquaters resolution</h4>
               <v-list-item-title v-text="item. headresolution"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      
    </v-list>
        </v-flex>
      </v-layout>

    <!-- </v-container> -->
  </v-card>
         </v-flex>
       </v-layout>
  
</div>
</template>

<script>
import navbar from '../components/DashViews/NavBar'
import axios from 'axios'
export default{
    components:{
      navbar
    },
 data () {
      return {
        items: [
          // {
          //   action: 'local_activity',
          //   title: 'Attractions',
          //   items: [
          //     { title: 'List Item' },
          //   ],
          // },
          // {
          //   action: 'restaurant',
          //   title: 'Dining',
          //   active: true,
          //   items: [
          //     { title: 'Breakfast & brunch' },
          //     { title: 'New American' },
          //     { title: 'Sushi' },
          //   ],
          // },
          // {
          //   action: 'school',
          //   title: 'Education',
          //   items: [
          //     { title: 'List Item' },
          //   ],
          // },
          // {
          //   action: 'directions_run',
          //   title: 'Family',
          //   items: [
          //     { title: 'List Item' },
          //   ],
          // },
          // {
          //   action: 'healing',
          //   title: 'Health',
          //   items: [
          //     { title: 'List Item' },
          //   ],
          // },
          // {
          //   action: 'content_cut',
          //   title: 'Office',
          //   items: [
          //     { title: 'List Item' },
          //   ],
          // },
          // {
          //   action: 'local_offer',
          //   title: 'Promotions',
          //   items: [
          //     { title: 'List Item' },
          //   ],
          // },
        ],
      }
    },
    created(){
     axios.post('https://aaomach.pythonanywhere.com/GetComplaint',{'agent_idn0':localStorage.getItem('nin')},
     {
       headers:{
         'x-access-token': localStorage.getItem('token')
         }
         }).then(
      response => {this.items= response.data})
   
  },

  }
 



</script>
<style lang="scoped">
/* .custom-selector{
  font-size: 3em;
  
} */
</style>
