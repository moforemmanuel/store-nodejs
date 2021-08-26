//import {productDOM,cartDOM,cartContent,openCart,closeCart,overlay,cartTotal,clearCartBtn,itemTotals} from "./app.js";
      $(document).ready(function(){
       
       var orderNow = $('.orderNow')
       var invalidFeedback = $('.invalid-feedback');
        const data = ['#firstName','#lastName','#email','#address','#country','#state'];
        
        const firstName = $('#firstName');
        const lastName = $('#lastName');
        const email = $('#email');
        const address = $('#address');
        const country = $('#country');
        const state = $('#state');
        const zip = $('#zip');
        const credit = $('.credit');
        const debit = $('.debit');
        const paypal = $('.paypal');
        const zelle = $('.zelle');
        const bitcoin = $('.bitcoin');
        const bank = $('.bank');
        const apple = $('.apple');

        /*foolish function check(){
          
            for (i = 0; i<data.length;i++){
               if(data[i].value != null){
                   return true;
               }

           }
           return true;
        }*/
       orderNow.on('click', function(e){
           
            if (firstName.value === "" &&
                lastName.value === "" &&
                email.value === "" &&
                address.value === "" &&
                country.value === "" &&
                state.value === "" &&
                zip.value === "" ){
                /*(credit.value != 'off'||
                debit.value != 'off'||
                paypal.value != 'off'||
                zelle.value != 'off'||
                bitcoin.value != 'off'||
                bank.value != 'off'||
                apple.value != 'off')){
                
                    alert("Good");
            }*/
            e.preventDefault();
            alert("Please fill required fields.");
           
       }
       /*else{
        console.log("YOOOOOOOOOO");
        window.location.href = "index.html";
       }*/
    });

      });