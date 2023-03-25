import Vue from 'vue';
import App from './App.vue';
import firebase from './firebase';

Vue.config.productionTip = false;

// Retrieve data from the database
firebase.database().ref('/path/to/data').once('value')
  .then((snapshot) => {
    const data = snapshot.val(); // Data as a JSON object

    // Create the Vue instance and pass the data as a prop to the App component
    new Vue({
      render: h => h(App, { props: { data: data } }),
    }).$mount('#app');

  })
  .catch((error) => {
    console.error(error);
  });
