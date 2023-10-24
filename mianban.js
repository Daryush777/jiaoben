[Panel]
#GrouAuto
GroupAuto = script-name=GroupAuto 𝐉𝐏,update-interval=6
GroupAuto = script-name=GroupAuto 𝐒𝐆,update-interval=6
GroupAuto = script-name=GroupAuto 𝐇𝐊,update-interval=6
#GroupAuto = script-name=GroupAuto 𝐓𝐖,update-interval=6
GroupAuto = script-name=GroupAuto 𝐔𝐒,update-interval=6
GroupAuto = script-name=GroupAuto 𝐊𝐑,update-interval=6
GroupAuto = script-name=GroupAuto WARP+,update-interval=6
GroupAuto = script-name=GroupAuto,update-interval=6

#Ping CN CF
ProPing = script-name=ProPing,update-interval=120

#NetlSp
NetISP = script-name=NetISP,update-interval=43200

# macOS不生效
# > EDC_Surge-Panel
策略面板 = script-name=网上国网,update-interval=7200

# Surge Pro标题,可显示启动时间,点击刷新为重载配置
functionstatus = script-name=functionstatus, title="𝙎𝙪𝙧𝙜𝙚", content="请刷新", update-interval=60
#SurgePro_ReloadProfile = script-name=SurgePro_ReloadProfile,update-interval=1

# GPT
#CFGPT = script-name=CFGPT,update-interval=-1

#网络速率
#NetSpeed = script-name=NetSpeed,update-interval=-1

#网络连通性测试
#Connectivity_Test = script-name=Connectivity_Test,update-interval=1

# > 详细的显示你当前的网络信息
#NetInfoPanel=title="",content="",style=info,script-name=net-info-panel.js,update-interval=1

# 节假日提醒
TimeCard = script-name=TimeCard,update-interval=3600

# 流量统计
#TrafficStatistics = script-name=TrafficStatistics,update-interval=1

# 机场信息  
Sub_info = script-name=Sub_info,update-interval=3600
Sub_info1 = script-name=Sub_info1,update-interval=3600


# 流媒体检测 Scpshaku
#stream-all = script-name=stream-all, title="流媒体解锁检测", content="请刷新", update-interval=-1

# flush DNS
#flushDNS = script-name=flushDNS, title="Flush DNS", content="请刷新", update-interval=600

#油价
YJ = script-name=YJ,update-interval=43200


[Script]
# 附带重载配置,Surge Pro标题,显示卡片开关，可显示启动时间,点击刷新为重载配置
functionstatus = type=generic, script-path=https://raw.githubusercontent.com/Scpshaku/chskuawa/main/JS/functionstatus.js,argument=icon=crown&color=#FFD700
# Surge Pro标题,显示启动时间,点击刷新为重载配置
#SurgePro_ReloadProfile = type=generic,timeout=10,script-path= https://raw.githubusercontent.com/Scpshaku/chskuawa/main/JS/Surgepro_reloadprofile.js ,argument=icon=crown.fill&color=#f6c970

#GPT
#CFGPT = type=generic,timeout=6,script-path=https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/modules/Panel/CFGPT/CFGPT_2.js,argument=icon=lasso.and.sparkles&iconerr=xmark.seal.fill&icon-color=#336FA9&iconerr-color=#D65C51

#网络速率、默认 1MB
#NetSpeed = type=generic,script-path=https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/modules/Panel/Net_Speed/Net_Speed.js,argument=title=NetSpeed&iconfast=bolt&iconmid=hare&iconslow=tortoise&colorlow=#06D6A0&colormid=#FFD166&colorhigh=#EF476F&mb=3

#网络连通性测试
#Connectivity_Test = type=generic,timeout=3,script-path=https://raw.githubusercontent.com/Keywos/rule/main/JS/ConnectivityTest.js,argument=title=Connectivity Test&server=false

# > 详细的显示你当前的网络信息
#net-info-panel.js=script-path=https://raw.githubusercontent.com/Rabbit-Spec/Surge/Master/Module/Panel/Network-Info/Moore/Network-Info.js,type=generic,timeout=30

# 节假日提醒
TimeCard = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/smartmimi/conf/master/surge/timecard.js


# 流量统计
TrafficStatistics = type=generic,timeout=10,script-path= https://raw.githubusercontent.com/Scpshaku/chskuawa/main/JS/Trafficstatistics.js ,argument=icon=arrow.up.arrow.down.circle&color=#5d84f8

# 机场信息
Sub_info = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/modules/Panel/Sub-info/Moore/Sub-info.js,script-update-interval=0,argument=url=https%3A%2F%2Fv1.eflink.xyz%2Fapi%2Fv1%2Fclient%2Fsubscribe%3Ftoken%3D576949ebcd90c9cde4da76ec4ee2f655&reset_day=27&title=EF&icon=externaldrive.fill.badge.icloud=#007aff
Sub_info1 = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/modules/Panel/Sub-info/Moore/Sub-info.js,script-update-interval=0,argument=url=https%3A%2F%2Fv1.eflink.xyz%2Fapi%2Fv1%2Fclient%2Fsubscribe%3Ftoken%3Db523920417a6b42dec3bd31aa8881ba4&reset_day=14&title=EF100&icon=externaldrive.fill.badge.icloud=#007aff

# 流媒体检测带国旗
#stream-all= type=generic, timeout=15, script-path=https://raw.githubusercontent.com/Scpshaku/chskuawa/main/JS/stream_all.js


# D+解锁检测
#disney_check = type=generic,script-path=https://gist.githubusercontent.com/Hyseen/729fc4c3ac28c3f2e7c4a832d81780f3/raw/disney_check.js?version=1637153952428

# flushDNS
#flushDNS = type=generic,timeout=5,script-path=https://raw.githubusercontent.com/Scpshaku/chskuawa/main/JS/flushDNS.js,argument=title=DNS FLush&icon=arrow.clockwise&color=#3d3d5b

#油价
YJ = type=generic,timeout=5,script-path=https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/script/youjia.js,argument=zhejiang

#CNCF二合一
# 如果一行放不下了可以把参数 num=7 改成6或者更小
ProPing = type=generic,timeout=6,script-path=https://raw.githubusercontent.com/Keywos/rule/main/JS/ProPing.js,argument=color=#80A0BF&icon=barometer&num=7

#Netlsp
NetISP = type=generic,timeout=8,script-path=https://raw.githubusercontent.com/Keywos/rule/main/JS/Netisp.js

#GroupAuto
GroupAuto 𝐉𝐏 = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/Keywos/rule/main/JS/ProGroup.js, argument=tolerance=10&timecache=18&color=#6699FF&icon=speedometer&group=𝐉𝐏
GroupAuto 𝐒𝐆 = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/Keywos/rule/main/JS/ProGroup.js, argument=tolerance=10&timecache=18&color=#6699FF&icon=speedometer&group=𝐒𝐆
GroupAuto 𝐇𝐊 = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/Keywos/rule/main/JS/ProGroup.js, argument=tolerance=10&timecache=18&color=#6699FF&icon=speedometer&group=𝐇𝐊
#GroupAuto 𝐓𝐖 = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/Keywos/rule/main/JS/ProGroup.js, argument=tolerance=10&timecache=18&color=#6699FF&icon=speedometer&group=𝐓𝐖
GroupAuto 𝐔𝐒 = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/Keywos/rule/main/JS/ProGroup.js, argument=tolerance=10&timecache=18&color=#6699FF&icon=speedometer&group=𝐔𝐒
GroupAuto 𝐊𝐑 = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/Keywos/rule/main/JS/ProGroup.js, argument=tolerance=10&timecache=18&color=#6699FF&icon=speedometer&group=𝐊𝐑
GroupAuto WARP+ = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/Keywos/rule/main/JS/ProGroup.js, argument=tolerance=10&timecache=18&color=#6699FF&icon=speedometer&group=WARP+
GroupAuto = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/Keywos/rule/main/JS/ProGroup.js, argument=tolerance=10&timecache=18&color=#6699FF&icon=speedometer&group=𝐏𝐫𝐨𝐱𝐲

# 定时自动运行(可选需取消#注释) 30分钟一次,每天2到7点不运行
#Cron_GroupAuto = type=cron, cronexp="*/30 0,1,7-23 * * *", timeout=10,wake-system=0,script-path=https://raw.githubusercontent.com/Keywos/rule/main/JS/ProGroup.js, argument=tolerance=10&timecache=18&group=𝐏𝐫𝐨𝐱𝐲



