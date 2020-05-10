import fs from 'fs';
import { privateDecrypt } from 'crypto';

let state = {
    order: JSON.parse(fs.readFileSync('./data.json').toString())
};

let updateOrder = Object.assign({}, state.order, {
    receive: '서울시 강남구 논현동...'
});
updateOrder.payment.method = "Mobile";

console.log(state.order, updateOrder, state.order === updateOrder);
