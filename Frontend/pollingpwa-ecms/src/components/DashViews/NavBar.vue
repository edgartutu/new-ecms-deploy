<template>
    <nav>
       <v-toolbar style=" background-color: #084524;"  fixed>
           
           <v-toolbar-title class="white--text" >eCMS</v-toolbar-title>
           <v-spacer></v-spacer>
           <v-toolbar-side-icon class="white--text" @click="drawer =!drawer" ></v-toolbar-side-icon>
        </v-toolbar>
                     <v-navigation-drawer v-model="drawer" app class="white">
                        <!-- <v-list dense> -->
                            <h2 style="color: #084524;">eCMS</h2>
                                    <v-btn
                                    icon
                                    @click="drawer=false"
                                    >
                                    <v-icon style="color: #084524;" >close</v-icon>
                                    </v-btn>
                            <v-divider></v-divider>
                            <v-list-tile v-for="link in links " :key="link.text" router  :to="link.route">
                                <v-list-tile-content>
                                    <v-list-tile-title class="black--text">
                                        {{link.text}}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-btn  style=" background-color: #084524;" @click=" logout()">LogOut</v-btn>
                           
                        <!-- </v-list> -->
                    </v-navigation-drawer>
                <!-- </v-menu> -->
              
               
                     <!-- <v-btn flat class="white--text">
                    <span>SignOut</span>
                    <v-icon>exit_to_app</v-icon>
                    </v-btn>  -->
        
    </nav>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
             drawer:false,
              mini: true,
            links:[
                // { text:'Dashboard', route:'/dashboard'},
                { text:'CHARTS', route:'/team'},
                { text:'MESSAGE',route:'/complaints'},
                
                //  { text:'LogOut',route:'/time'},
            ],
            projects:[
      
      ],
        }
    },
    methods:{
         logout() {
				this.$store.dispatch("logout").then(() => {
					this.$router.push("/");
				});
			}
    }
    // created(){
    //   axios.get('http://127.0.0.1:5000/alladmincomplaints').then(
    //     response =>{
    //       this.projects = response.data
    //       console.log(this.response)
    //     }
    //   )
    // }
}
</script>

