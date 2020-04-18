<template>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="6"
            sm="8"
            md="4"
          >
          <v-layout row justify-center>
            <v-flex sm12 md6>
                   <v-card class="elevation-12" >
              <v-toolbar
                color="#084524"
                dark
                flat
              >
                <v-toolbar-title class="white--text">Register </v-toolbar-title>
                <div class="flex-grow-4"></div>
               <h2 style="margin-left:30%;color:#faee02;" >eCMS</h2>
                <v-spacer></v-spacer>
                <!-- <v-tooltip right> -->
                  <!-- <template v-slot:activator="{ on }"> -->
                      <router-link to="/login">
                            <v-btn
                            icon
                            large
                            href="https://codepen.io/johnjleider/pen/pMvGQO"
                            target="_blank"
                            v-on="on"
                            >
                            Login
                            </v-btn>
                      </router-link>
                  <!-- </template> -->
                  <!-- <span class="white--text" >Login Now</span> -->
                <!-- </v-tooltip> -->
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Name"
                    name="login"
                    v-model="name"
                    prepend-icon="person"
                     :rules="[() => !!name || 'This field is required']"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    name="login"
                    v-model="email"
                    prepend-icon="email"
                     :rules="[() => !!email || 'This field is required']"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    label="NIN"
                    name="login"
                    v-model="nin"
                    prepend-icon="email"
                     :rules="[() => !!nin || 'This field is required']"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    label="Tel"
                    name="login"
                    v-model="tel"
                    prepend-icon="email"
                     :rules="[() => !!tel || 'This field is required']"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="password"
                     :rules="[() => !!password || 'This field is required']"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    id="confirm"
                    label="Confirm Password"
                    name="password"
                    v-model="confirm"
                     :rules="[() => !!confirm || 'This field is required']"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-spacer></v-spacer>
                <v-btn color="orange darken-3" small @click="submit()">Register</v-btn>
              </v-card-actions>
            </v-card>
            </v-flex>
          </v-layout>
           
           
          </v-col>
        </v-row>
</template>
<script>
import axios from 'axios'
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      name:"",
      email:"",
      tel:"",
      password:"",
      confirm:"",
      nin:"",
      file: null,
      conf:'Registered'
    }),
     created () {
  
    window.addEventListener('load', this.greet)
  },
    methods:{

      submit(){
        const fd = new FormData();
        fd.append('foo', 'bar')
        fd.append('email', this.email)
        fd.append('name', this.name)
        fd.append('phone_number', this.tel)
        fd.append('password', this.password)
        fd.append('confirm', this.confirm)
        fd.append('nin', this.nin)
        axios.post('https://aaomach.pythonanywhere.com/pollingagentregistration',fd).then(response=>{
                window.location.reload()
            })
      },
       greet(event){
        alert('Your ' + this.conf + '!')

      //   if (event) {
      //   alert(event.target.tagName)
      // }
      }
    }
  }
</script>