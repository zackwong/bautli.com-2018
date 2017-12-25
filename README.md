bautli.com-2018
=============

堡利莱印刷机械官网2018年版


域名绑定、301转向及nginx配置
-----

新建配置文件: ``sudo nano /etc/nginx/sites-available/bautli.com``

编辑配置文件及保存: 

    server {
        server_name bautli.com;
        return 301 http://www.bautli.com$request_uri;
    }
    server {
        server_name www.bautli.com;
        index index.html;
        root /srv/bautli.com-2018/_site;
    }

建立链接: ``sudo ln -s /etc/nginx/sites-available/bautli.com /etc/nginx/sites-enabled/``

重启nginx: ``sudo service nginx restart``


下载及生成网站
-----

1. 下载网站源码: ``git clone git://github.com/zackwong/bautli.com-2018.git``

2. 进入源码根目录: ``cd bautli.com-2015``

3. 生成网站: ``jekyll build``


开发者
---------

* Zack Wong &lt;hzzzoo@126.com&gt;
