<template>
<div class="dashboard">
    <navbar/>
    <v-layout wrap >
    <h3  style="color: #084524;">{{listem}}</h3>
         <v-flex xs12 md12>
            <v-card>
              <v-container fluid >
              <v-flex xs12 md6>
                <v-col cols="12">
                  <v-autocomplete
                    v-model="district"
                    :items="itemn"
                    outlined
                    dense
                    label="District Name"
                    single-line
                    
                  ></v-autocomplete>
                </v-col>
                  <!-- <v-text-field v-model="district"   label="District Name" required ></v-text-field> -->
              </v-flex>
                <v-flex xs12 md6>
                  <v-text-field v-model="town"  label="Town" required ></v-text-field>
              </v-flex>
              <v-flex xs12 md12>
                  <v-select
                      v-model="select"
                      :items="itemz"
                      label="Position"
                      required
                    ></v-select>
              </v-flex>
              
                <v-flex xs12 md12>
                  <v-select
                  v-model="select2"
                  :items="items"
                  label="Classification"
                   required
                    ></v-select>
              </v-flex>
                <v-flex xs12 md12>
                  
                  <v-textarea
                    v-model="complaints"
                    counter
                    label="Complaint"
                    :rules="rules"
                    
                  ></v-textarea>
              </v-flex>
            </v-container>
            <v-row justify="center">
              <v-btn
                style=" background-color: #084524;"
                dark
                @click.stop="dialog = true"
              >
                Forward To District
              </v-btn>

              <v-dialog
                v-model="dialog"
                max-width="290"
              >
                <v-card>
                  <v-card-title class="headline" style="color: #084524;">Submit Complaint</v-card-title>

                  <v-card-text>
                    Please Confirm Your Complaint Submission
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      color="green darken-1"
                      text
                      @click="dialog = false"
                    >
                      Disagree
                    </v-btn>

                    <v-btn
                      color="green darken-1"
                      text
                      @click="dialog = false;submit()"
                    >
                      Agree
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <!-- <v-btn   style=" background-color: #084524;" @click="submit()" >Forward To District</v-btn> -->
            <v-spacer></v-spacer>
                        <v-row justify="center">
              <v-btn
                style=" background-color: #084524;"
                dark
                @click.stop="dialogs = true;"
              >
                Forward To HeadOffice
              </v-btn>

              <v-dialog
                v-model="dialogs"
                max-width="290"
              >
                <v-card>
                  <v-card-title class="headline" style="color: #084524;">Submit Complaint</v-card-title>

                  <v-card-text>
                    Please Confirm Your Complaint Submission
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      color="green darken-1"
                      text
                      @click="dialogs = false"
                    >
                      Disagree
                    </v-btn>

                    <v-btn
                      color="green darken-1"
                      text
                      @click="dialogs = false;submits()"
                    >
                      Agree
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <!-- <v-btn style=" background-color: #084524;"  @click="submits()">Forward To HeadOffice</v-btn> -->
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
  data(){
    return{
        district:'',
        town:'',
        select:'',
        select2:'',
        complaints:'',
        rules: [v => v.length <= 500 || 'Max 500 characters'],
      items: [
        'Registration/Update',
        'Display/Register',
        'Nomination',
        'Campaigns',
        'Polling Day',
        'General Complaint'
      ],
      itemz:[
        'Staff',
        'Non Staff'
      ],
       radios: 'radio-1',
       name:'Submitted',
      projects:[],
      dialog: false,
      dialogs: false,
      listem:'Complaints',
       itemn:[
        'Buikwe',
'Bukomansimbi',
'Butambala',
'Buvuma',
'Gomba',
'Kalangala',
'Kalungu',
'Kampala',
'Kayunga',
'Kiboga',
'Kyankwanzi',
'Luweero',
'Lwengo',
'Lyantonde',
'Masaka',
'Mityana',
'Mpigi',
'Mubende',
'Mukono',
'Nakaseke',
'Nakasongola',
'Rakai',
'Sembabule',
'Wakiso',
'Amuria',
'Budaka',
'Bududa',
'Bugiri',
'Bukedea',
'Bukwa',
'Bulambuli',
'Busia',
'Butaleja',
'Buyende',
'Iganga',
'Jinja',
'Kaberamaido',
'Kaliro',
'Kamuli',
'Kapchorwa',
'Katakwi',
'Kibuku',
'Kumi',
'Kween',
'Luuka',
'Manafwa',
'Mayuge',
'Mbale',
'Namayingo',
'Namutumba',
'Ngora',
'Pallisa',
'Serere',
'Sironko',
'Soroti',
'Tororo',
'Abim',
'Adjumani',
'Agago',
'Alebtong',
'Amolatar',
'Amudat',
'Amuru',
'Apac',
'Arua',
'Dokolo',
'Gulu',
'Kaabong',
'Kitgum',
'Koboko',
'Kole',
'Kotido',
'Lamwo',
'Lira',
'Maracha',
'Moroto',
'Moyo',
'Nakapiripirit',
'Napak',
'Nebbi',
'Nwoya',
'Otuke',
'Oyam',
'Pader',
'Yumbe',
'Zombo',
'Buhweju',
'Buliisa',
'Bundibugyo',
'Bushenyi',
'Hoima',
'Ibanda',
'Isingiro',
'Kabale',
'Kabarole',
'Kamwenge',
'Kanungu',
'Kasese',
'Kibaale',
'Kiruhura',
'Kiryandongo',
'Kisoro',
'Kyegegwa',
'Kyenjojo',
'Masindi',
'Mbarara',
'Mitooma',
'Ntoroko',
'Ntungamo',
'Rubirizi',
'Rukungiri',
'Sheema',

      ]
      
     
    }
   
  },
   created () {
  
    window.addEventListener('load', this.greet)
  },
  
  

  methods: {
   
    getColor (status) {
        if (status =="Resolved" ) return 'orange'
        else if (status=="Declined") return 'red'
        else if (status=="Unresolved") return 'purple'
        else return 'green darken-2'
      },
      submit(){
        axios.post('https://aaomach.pythonanywhere.com/postcomplaint',{'email':localStorage.getItem('user'),'agent_staff':this.select,
     'district':this.district,'poling_station':this.town,'nature_complaint':this.select2,'complaint':this.complaints},{
            headers:{
            'x-access-token': localStorage.getItem('token')
            }
        }).then(response=>{
                window.location.reload()
                //  console.log(localStorage.getItem('user'))
                // console.log(response)
            })
      },

       submits(){
        axios.post('https://aaomach.pythonanywhere.com/PostComplaintshead',{'email':localStorage.getItem('user'),'agent_staff':this.select,
     'district':this.district,'poling_station':this.town,'nature_complaint':this.select2,'complaint':this.complaints},{
            headers:{
            'x-access-token': localStorage.getItem('token')
            }
        }).then(response=>{
                window.location.reload()
                //  console.log(localStorage.getItem('user'))
                // console.log(response)
            })
      },
        greet(event){
        alert('Your Complaint is ' + this.name + '!')

      //   if (event) {
      //   alert(event.target.tagName)
      // }
      }
      
      
        
      },
   
   
    

  }
 



</script>
<style lang="scoped">
/* .custom-selector{
  font-size: 3em;
  
} */
</style>
