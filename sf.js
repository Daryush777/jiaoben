[MITM]
hostname = ccsp-egmas.sf-express.com

[rewrite_local]
^https:\/\/ccsp-egmas.sf-express.com\/cx-app-member\/member\/app\/user\/universalSign url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js

[task_local]
1 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.js