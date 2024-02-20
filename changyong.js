[Script]
#阿里云盘
alidrive_8 = type=http-response, pattern=^https?:\/\/(api|member)\.(aliyundrive|alipan)\.com\/(.+\/(users|activity|user\/get)|((business|apps)\/.+\/users|adrive\/.+\/user)), requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/alidrive.js, timeout=60, script-update-interval=0

#bilibili
# ～ BiliBili_哔哩哔哩_视频播放下方商品推广@ddgksf2013
bilibili_json_93 = type=http-response, pattern=^https?:\/\/api\.bili(api|bili)\.(net|com)\/pgc\/season\/app\/related\/recommend\?, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_屏蔽直播间商品广告浮窗[还有一个域名]@ddgksf2013
bilibili_json_96 = type=http-response, pattern=^https?:\/\/api\.live\.bilibili\.com\/xlive\/e-commerce-interface\/v\d\/ecommerce-user\/get_shopping_info\?, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_直播去广告@bm7
bilibili_json_98 = type=http-response, pattern=^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_应用开屏广告预加载@yjqiang
bilibili_json_105 = type=http-response, pattern=^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_1080P高码率+4K画质[番剧和影视除外]@ddgksf2013
bilibili_json_108 = type=http-response, pattern=^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\?, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_屏蔽直播页顶部轮播图@ddgksf2013
bilibili_json_111 = type=http-response, pattern=^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-interface\/v2\/index\/feed, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_推荐去广告@ddgksf2013
bilibili_json_115 = type=http-response, pattern=^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_追番去广告@ddgksf2013
bilibili_json_117 = type=http-response, pattern=^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/bangumi, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_观影页面去广告@ddgksf2013
bilibili_json_119 = type=http-response, pattern=^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/cinema\/tab\?, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_标签页处理@ddgksf2013
bilibili_json_122 = type=http-response, pattern=^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_我的页面处理@ddgksf2013
bilibili_json_124 = type=http-response, pattern=^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_屏蔽首页右上活动@ddgksf2013
bilibili_json_126 = type=http-response, pattern=^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_热搜发现@ddgksf2013
bilibili_json_128 = type=http-response, pattern=^https://app.bilibili.com/x/v2/search/square, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_搜索去广告@BiliUniverse
bilibili_proto_beta_133 = type=http-response, pattern=^https?:\/\/(grpc\.biliapi\.net|app\.bilibili\.com)\/bilibili\.polymer\.app\.search\.v1\.Search\/SearchAll$, requires-body=true, max-size=3145728, binary-body-mode=true, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_交互点赞投票弹幕及会员弹幕@BiliUniverse
bilibili_proto_beta_135 = type=http-response, pattern=^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.community\.service\.dm\.v1\.DM\/(DmView|DmSegMobile), requires-body=true, max-size=3145728, binary-body-mode=true, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_青少年弹窗@BiliUniverse
bilibili_proto_beta_137 = type=http-response, pattern=^https:\/\/(grpc\.biliapi\.net|app\.bilibili\.com)\/bilibili\.app\.interface\.v1\.Teenagers\/ModeStatus, requires-body=true, max-size=3145728, binary-body-mode=true, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_UP主推荐广告[适配ipad端]@BiliUniverse
bilibili_proto_beta_139 = type=http-response, pattern=^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.(view|viewunite)\.v1\.View\/(View|TFInfo)$, requires-body=true, max-size=3145728, binary-body-mode=true, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_动态综合页及视频页去广告@BiliUniverse
bilibili_proto_beta_141 = type=http-response, pattern=^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.dynamic\.v2\.Dynamic\/Dyn(All|Video)$, requires-body=true, max-size=3145728, binary-body-mode=true, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_启动时开启直连模式[自行启用]@ddgksf2013
#bilibili_startup_direct_144 = type=http-response, pattern=^https?:\/\/app\.bilibili\.com\/x\/resource\/domain, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_startup_direct.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_繁体CC字幕转中文简体[自行启用hostname=aisubtitle.hdslb.com,i0.hdslb.com]@ddgksf2013
#bilibili_cc_146 = type=http-response, pattern=^https?:\/\/.*\.hdslb\.com\/bfs\/subtitle\/.+\.json, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_cc.js, timeout=60, script-update-interval=0
# ～ BiliBili_哔哩哔哩_去除统一设置的皮肤[注释留存]@ddgksf2013
#bilibili_json_148 = type=http-response, pattern=^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\?, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, timeout=60, script-update-interval=0

#彩云
caiyun_9 = type=http-response, pattern=^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info), requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyun.js, timeout=60, script-update-interval=0

#Spotify
spotify-json = type=http-request,pattern=^https:\/\/spclient\.wg\.spotify\.com\/(artistview\/v1\/artist|album-entity-view\/v2\/album)\/,requires-body=0,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-json.js
spotify-proto = type=http-response,pattern=^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$,requires-body=1,binary-body-mode=1,max-size=0,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js,script-update-interval=0


#Spotify翻译
#spotify歌词翻译 = type=http-response,pattern=^https:\/\/spclient\.wg\.spotify\.com\/color-lyrics\/v2\/track\/,requires-body=1,binary-body-mode=1,max-size=0,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-lyric.js,argument=appid=20221101001429166&securityKey=ywqxd_z_Yt7h1aerUzf4

#wps
WPS_8 = type=http-response, pattern=^https?:\/\/(vas|account|drive)\.wps\.cn\/(query\/api\/.+\/list_purchase_info|api\/(v\d\/spaces|users\/.+\/overview)), requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/WPS.js, timeout=60, script-update-interval=0

#小红书
# > 小红书_视频播放页商品推广@ddgksf2013
redbook_json_17 = type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/note\/widgets, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, timeout=60, script-update-interval=0
# > 小红书_短视频流去水印+强制开启保存功能@ddgksf2013
redbook_json_19 = type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/note\/redtube\?, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, timeout=60, script-update-interval=0
# > 小红书_信息流视频去水印+强制开启保存功能@ddgksf2013
redbook_json_21 = type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/note\/videofeed\?, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, timeout=60, script-update-interval=0
# > 小红书_信息流图片去水印@ddgksf2013
redbook_json_23 = type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/note\/feed\?, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, timeout=60, script-update-interval=0
# > 小红书_开屏广告@ddgksf2013
redbook_json_25 = type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/splash_config, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, timeout=60, script-update-interval=0
# > 小红书_首页瀑布流@ddgksf2013
redbook_json_27 = type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/homefeed\?, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, timeout=60, script-update-interval=0
# > 小红书_启动处理@ddgksf2013
redbook_json_29 = type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/config\?, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, timeout=60, script-update-interval=0
# > 小红书_热搜发现@ddgksf2013
redbook_json_31 = type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/search\/hot_list, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, timeout=60, script-update-interval=0
# > 小红书_默认填词@ddgksf2013
redbook_json_33 = type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/search\/hint, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, timeout=60, script-update-interval=0
# > 小红书_去除购物@ddgksf2013
redbook_json_35 = type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/homefeed\/categories, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, timeout=60, script-update-interval=0
# > 小红书_猜你想搜@ddgksf2013
redbook_json_37 = type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/search\/trending, requires-body=true, max-size=3145728, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, timeout=60, script-update-interval=0

#微博
wb_23 = type=http-response, pattern=https:\/\/new\.vip\.weibo\.cn\/aj\/appicon\/list, requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/wb.js, timeout=60, script-update-interval=0
wb_24 = type=http-response, pattern=https:\/\/api\.weibo\.cn\/device\/get, requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/wb.js, timeout=60, script-update-interval=0
wb_25 = type=http-response, pattern=https:\/\/weibointl\.api\.weibo\.cn\/portal\.php, requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/wb.js, timeout=60, script-update-interval=0

#YouTube
# ======= 视频PIP|后台播放|瀑布流|搜索页|播放页|短视频|贴片广告  ======= #
youtube.request.beta_17 = type=http-request, pattern=^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|reel\/reel_watch_sequence)\?, requires-body=true, max-size=3145728, binary-body-mode=true, script-path=https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/dist/youtube.request.beta.js, timeout=60, script-update-interval=0
youtube.response.beta_18 = type=http-response, pattern=^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|search|reel\/reel_watch_sequence|guide|account\/get_setting)\?, requires-body=true, max-size=3145728, binary-body-mode=true, script-path=https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/dist/youtube.response.beta.js, timeout=60, script-update-interval=0

#百度云盘
bdcloud_9 = type=http-response, pattern=^https?:\/\/pan\.baidu\.com\/(youai\/(user\/.+\/getminfo|membership\/.+\/adswitch)|(rest\/.+\/membership\/user|act\/.+\/(bchannel|welfare)\/list|api\/usercfg)), requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/bdcloud.js, timeout=60, script-update-interval=0

# 解锁个人中心
TIDALHiFiPlusCrack = type=http-response, pattern=^https?:\/\/api\.tidal\.com\/v1\/users\/\d+\/subscription.+, requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/yqc007/QuantumultX/master/TIDALHiFiPlusCrack.js, timeout=60, script-update-interval=0


[MITM]

hostname = %APPEND% *.aliyundrive.com,*.alipan.com,-broadcast.chat.bilibili.com,-*cdn*.biliapi.net,-*tracker*.biliapi.net,app.bilibili.com,api.live.bilibili.com,*.bilibili.com,*.bilibili.*,grpc.biliapi.net,*biliapi.net,*.cyapi.cn,adx.sogaha.cn,spclient.wg.spotify.com,*.wps.cn,edith.xiaohongshu.com,www.xiaohongshu.com,pages.xiaohongshu.com,referee.xiaohongshu.com,new.vip.weibo.cn,api.weibo.cn,weibointl.api.weibo.cn,-redirector*.googlevideo.com,*.googlevideo.com,www.youtube.com,s.youtube.com,youtubei.googleapis.com,pan.baidu.com


[URL Rewrite]

# ～ BiliBili_哔哩哔哩_屏蔽IP请求@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/ip - reject
# ～ BiliBili_哔哩哔哩_屏蔽DefaultWord@ddgksf2013
^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.interface\.v1\.Search\/Default - reject

#YouTube
# ======= 视频广告请求 ======= #
(^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+) $1$2$3 302



[Map Local]

# ～ BiliBili_哔哩哔哩_屏蔽广告浮窗@ddgksf2013
^https?:\/\/api\.bilibili\.com\/pgc\/activity\/deliver\/material\/receive data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-dict.json"
# ～ BiliBili_哔哩哔哩_Material_Ad@ddgksf2013
^https?:\/\/api\.bilibili\.com\/x\/vip\/ads\/material\/report data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-dict.json"
# ～ BiliBili_哔哩哔哩_小卡片广告@ddgksf2013
^https://api.bilibili.com/pgc/season/player/cards data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-dict.json"
# ～ BiliBili_哔哩哔哩_应用开屏去广告@bm7
^https://app.bilibili.com/x/v2/splash/show data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-dict.json"
# ～ BiliBili_哔哩哔哩_漫画去广告@ddgksf2013
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/(Flash|ListFlash|GetActivityTab) data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-dict.json"

#彩云
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-200.txt"

#小红书
# > 小红书_通用广告请求@ddgksf2013
^https?:\/\/www\.xiaohongshu\.com\/api\/sns\/v\d\/(tag\/)?ads data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-dict.json"
# > 小红书_隐私屏蔽@ddgksf2013
^https?:\/\/referee\.xiaohongshu\.com\/v\d\/stateReport data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-dict.json"
# > 小红书_Switches@ddgksf2013
^https?:\/\/pages\.xiaohongshu\.com\/data\/native\/matrix_switches data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-dict.json"
# > 小红书_青少年请求@ddgksf2013
^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/user\/teenager\/status data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-dict.json"
# > 小红书_启动引导@ddgksf2013
^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/guide\/home_guide data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-dict.json"

#YouTube
^https?:\/\/[\w-]+\.googlevideo\.com\/(?!(dclk_video_ads|videoplayback\?)).+&oad data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-200.txt"
# ======= 通用广告请求 ======= #
^https?:\/\/(www|s)\.youtube\.com\/api\/stats\/ads data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-200.txt"
^https?:\/\/(www|s)\.youtube\.com\/(pagead|ptracking) data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-200.txt"
^https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adcontext data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-200.txt"