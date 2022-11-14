import './bootstrap';


Echo.channel('orders') //only your orders
.listen('Test', (e) => {

    console.log(e.order.status);


});
