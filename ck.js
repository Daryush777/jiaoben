[Script]
#iios兑换苹果app
iios获取token_23 = type=http-request, pattern=^https:\/\/www\.iios\.fun\/api\/(base|user\/info)$, script-path=https://raw.githubusercontent.com/Sliverkiss/GoodNight/master/Script/iios.js, timeout=30
#顺丰
Rewrite: 顺丰速运 = type=http-request, pattern=^https:\/\/ccsp-egmas.sf-express.com\/cx-app-member\/member\/app\/user\/universalSign,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js,requires-body=true
#雨辰
ios游戏迷获取token_15 = type=http-request, pattern=^https:\/\/yuchen.tonghuaios.com\/users\?tab=index, script-path=https://raw.githubusercontent.com/Sliverkiss/GoodNight/master/Script/yuchenios.js, timeout=30
#茅台
茅台Token = type=http-request,pattern=^https:\/\/app\.moutai519\.com\.cn\/xhr\/front\/mall\/message\/unRead\/query,requires-body=0,max-size=0,script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/i-maotai.js
#霸王茶姬
霸王茶姬获取token = type=http-request, pattern=^https:\/\/qmwebapi\.qmai\.cn\/web\/catering2-apiserver\/crm\/points-info, script-path=https://gist.githubusercontent.com/Sliverkiss/4984f7f34d6df8bcdd1e13ecac4bba51/raw/bwcj.js, timeout=10
#bilibili
BiliBili_10 = type=http-request, pattern=^https?:\/\/app\.bilibili\.com\/x\/resource\/domain\?, script-path=https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/Task/BiliBili.js, timeout=60, script-update-interval=0
BiliBili_11 = type=http-request, pattern=^https?:\/\/m.bilibili.com/$, script-path=https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/Task/BiliBili.js, timeout=60, script-update-interval=0
#TF信息获取
TF信息获取 = type=http-request,pattern=^https:\/\/testflight\.apple\.com\/v3\/accounts/.*\/apps$,requires-body=0,script-path=https://github.com/w164955/Config/blob/main/JavaScript/TF_keys.js?raw=true
#松鼠
松鼠ios获取token_25 = type=http-request, pattern=^https\:\/\/ios\.songshuyouxi\.com\/user, script-path=sxios.js, timeout=30
#海信
海信数据 = type=http-response,pattern=^https:\/\/sweixin\.hisense\.com\/ecrp\/member\/initMember,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/Hisense.js
#云闪付
http-request ^https:\/\/youhui.95516.com\/newsign\/api\/sharing_power\/showUserTask script-path=ysf.js, timeout=10, tag=云闪付签到获取token
#建行生活
建行数据 = type=http-request,pattern=^https:\/\/yunbusiness\.ccb\.com\/(clp_coupon|clp_service)\/txCtrl\?txcode=(A3341A038|autoLogin),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/jhsh_checkIn.js
#复游度假
获取托迈酷客Cookie = type=http-request,pattern=^https:\/\/apis\.folidaymall\.com\/online\/capi\/uc\/getCount,requires-body=0,max-size=0,script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/ThomasCook.js
#有赞
SakuraCheckbox获取token_54 = type=http-response, pattern=https://h5.youzan.com/wscump/checkin/get_activity_by_yzuid_v2.json.+, script-path=https://gist.githubusercontent.com/Sliverkiss/585daf69a0a6c7243db8993f5394a124/raw/youzan.js, timeout=30



[MITM]
hostname = %APPEND% www.iios.fun,i.meituan.com,ccsp-egmas.sf-express.com,yuchen.tonghuaios.com,app.moutai519.com.cn,qmwebapi.qmai.cn,app.bilibili.com,m.bilibili.com,testflight.apple.com,ios.songshuyouxi.com,sweixin.hisense.com,cps.hisense.com,youhui.95516.com,yunbusiness.ccb.com,apis.folidaymall.com,h5.youzan.com

