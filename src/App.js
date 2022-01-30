import { useState } from "react";

export default function App() {
const [cartvalue, setCartValue] = useState(""); 
const [deliverydistance, setDeliveryDistance] = useState(""); 
const [numberofitems, setNumberOfItems] = useState(""); 
const [ordertime, setOrderTime] = useState(""); 
const [deliveryResult, setDeliveryResult] = useState(null);

function calculateDelivery() {
let delivery=0;

if(cartvalue>=100){
delivery = Number(0);}
else if (cartvalue>=10 && cartvalue<100 && deliverydistance<=500 ){
delivery = Number(1);
}
else if(deliverydistance>500){
delivery= Number(deliverydistance/500).toFixed(0); 
if( deliverydistance % 500 > 0){
delivery= Number(deliverydistance/500+1).toFixed(0);
}
}else if(cartvalue<10){
delivery= Number(10-cartvalue).toFixed(2); 
}

if (delivery>15){
    delivery=Number(15);
}


setDeliveryResult(delivery);
setCartValue("");
setDeliveryDistance("");
setNumberOfItems("");
setOrderTime("");

}



return (
<div className="w-full max-w-xs m-10">
<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
<h1 className="text-center mb-4 text-xl"> Delivery Fee Calculator</h1>
<div className="mb-4">
<label
className="block text-gray-700 text-sm font-bold mb-2"
for="username"
>
Cart Value
</label>
<input
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
id="CartValue "
type="text"
placeholder="euro"
value={cartvalue}
onChange={(e) => setCartValue(e.target.value)}
/>
</div>

<div className="mb-6">
<label
className="block text-gray-700 text-sm font-bold mb-2"
for="password"
>
Delivery Distance
</label>
<input
className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
id="DeliveryDistance"
type="text"
placeholder="In meters"
value={deliverydistance}
onChange={(e) => setDeliveryDistance(e.target.value)}
/>
</div>

<div className="mb-6">
<label
className="block text-gray-700 text-sm font-bold mb-2"
for="password"
>
Amount of items
</label>
<input
className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
id="NumberOfItems"
type="text"
placeholder=""
value={numberofitems}
onChange={(e) => setNumberOfItems(e.target.value)}
/>
</div>

<div className="mb-6">
<label
className="block text-gray-700 text-sm font-bold mb-2"
for="password"
>
Date
</label>
<input
className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
id="Ordertime"
type="date"
placeholder="numbers"
value={ordertime}
onChange={(e) => setOrderTime(e.target.value)}
/>
</div>


<div className="mb-6">
<label
className="block text-gray-700 text-sm font-bold mb-2"
for="password"
>
Time
</label>
<input
className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
id="Ordertime"
type="time"
placeholder="numbers"
value={ordertime}
onChange={(e) => setOrderTime(e.target.value)}
/>
</div>




<div className="flex items-center justify-center">
<button
className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
type="button"
onClick={calculateDelivery}
>
Calculate Delivery Price 
</button>
</div>
{deliveryResult && (
<div className="mt-4">
<p>Delivery price: {deliveryResult} €</p>

</div>
)}
</form>
</div>
);
}
