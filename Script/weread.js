var body = $response.body;
const path1 = "/pay/memberCardSummary";
const path2 = "/pay/balance";
var path = $request.path;
console.log('req-path',path)
function modify_card() {
  let obj = JSON.parse(body);
  let day = 1000*86400
  obj["expiredTime"] = obj["expiredTime"]+day;
  obj["expired"] = 0;
  obj["remainTime"] = obj["remainTime"]+day;
  body = JSON.stringify(obj);
}

// function modify_balance() {
//   let obj = JSON.parse(body);
//   obj["balance"] = 200;
//   obj["giftBalance"] = 100;
//   obj["peerBalance"] = 100;
//   body = JSON.stringify(obj);
//    }
   
if (path.indexOf(path1) != -1){
  modify_card();
}
// if (path.indexOf(path2) != -1 ){
//   modify_balance();
// }
$done(body);
