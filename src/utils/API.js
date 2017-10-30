import axios from "axios";

export default {
    random: function() {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    search: function(breed){
        return axios.get(" https://dog.ceo/api/breed/"+ breed +"/images")
    }
};