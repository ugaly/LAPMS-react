import API from "../api";


export default class AuthService {
    static login(payload) {
        return API.ax.post('login', payload).catch(e => console.log(e))
    }

    // static getCount(){
    //     return API.ax.get('model_count/',  {
    //         headers: {
    //           'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
    //           'Content-Type': 'application/json',
    //         }
    //       }).catch(e => console.log(e))
    // }


    static getCount(){
        return API.ax.get('model_count/').catch(e => console.log(e))
    }

    static getReport(){
        return API.ax.get('user_activity/').catch(e => console.log(e))
    }

    static postAnswer(data){
        return API.ax.post('post_answer/', data).catch(e => console.log(e))
    }





}