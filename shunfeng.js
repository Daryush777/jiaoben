[rewrite_local]
^https:\/\/ccsp-egmas.sf-express.com\/cx-app-member\/member\/app\/user\/universalSign url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js

[task_local]
37 8 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.js, tag=顺丰, enabled=true

[mitm]
hostname = ccsp-egmas.sf-express.com