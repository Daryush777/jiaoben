[Script]
#Drafts
Drafts_8 = type=http-response, pattern=^https?:\/\/backend\.getdrafts\.com\/api\/v\d\/verification\/(account_status|verify_receipt), requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/Drafts.js, timeout=60, script-update-interval=0

#Metronome
metronome_8 = type=http-response, pattern=^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$), requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/Revenuecat/metronome.js, timeout=60, script-update-interval=0
metronome_9 = type=http-request, pattern=^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$), script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/Revenuecat/metronome.js, timeout=60, script-update-interval=0

#MoneyThings
MoneyThings = type=http-response, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$), script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/MoneyThings.js, requires-body=true, max-size=-1, timeout=60

MoneyThings = type=http-request, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$), script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/MoneyThings.js, timeout=60


#notability
notability_8 = type=http-response, pattern=^https?:\/\/notability\.com\/(global|subscriptions), requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/notability.js, timeout=60, script-update-interval=0

#Vision
Vision_8 = type=http-response, pattern=^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$), requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/Revenuecat/Vision.js, timeout=60, script-update-interval=0
Vision_9 = type=http-request, pattern=^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$), script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/Revenuecat/Vision.js, timeout=60, script-update-interval=0

#Xmind
Xmind_9 = type=http-response, pattern=^https?:\/\/www\.xmind\.(cn|net|app)\/.+\/devices, requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/Xmind.js, timeout=60, script-update-interval=0

#AllMyBatteries
AllMyBatteries_3 = type=http-response, pattern=^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$, requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/Guding88/Script/main/AllMyBatteries.js, timeout=60, script-update-interval=0

#Goognotes
gg_6 = type=http-response, pattern=^https:\/\/isi\..*\.g.*\.com\/.+\/(receipts$|subscribers\/?(.*?)*$), requires-body=true, max-size=3145728, script-path=http://git.yycm.link/chxm1023/Rewrite/raw/main/gg.js, timeout=60, script-update-interval=0
gg_7 = type=http-request, pattern=^https:\/\/isi\..*\.g.*\.com\/.+\/(receipts$|subscribers\/?(.*?)*$), script-path=http://git.yycm.link/chxm1023/Rewrite/raw/main/gg.js, timeout=60, script-update-interval=0



[MITM]

hostname = %APPEND% backend.getdrafts.com,api.revenuecat.com,notability.com,www.xmind.*,buy.itunes.apple.com,isi.*.g*.com