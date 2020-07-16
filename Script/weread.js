/*
[rewrire_local]

#微信读书
^https:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary url script-response-body wxds.js

MITM=i.weread.qq.com

by:chamberlen

自慰已而，仅供娱乐!

*/



let obj = JSON.parse($response.body);
obj={
 "remainCoupon": 0,
 "expiredTime": 1995692865,
 "expired": 0,
 "autoRenewablePrice": 1900,
 "remainTime": 8374727480,
 "day": 145,
 "isAutoRenewable": 0,
 "autoRenewableChannel": 0,
 "autoRenewableTime": 0,
 "totalFreeReadDay": 0,
 "isPaying": 1,
 "historyAutoRenewable": 0,
 "remainCount": 0,
 "permanent": 1,
 "hintsForRecharge": {
  "predictedSavedMoney": 10315,
  "predictedChapterPrice": 15,
  "sendCoupons": 0,
  "pricePerMonth": 900
 },
 "freeBookIds": [
  "22261199",
  "462592",
  "462952"
 ],
 "startTime": 1584176345,
 "savedMoney": 3073198764
};
$done({body: JSON.stringify(obj)})
