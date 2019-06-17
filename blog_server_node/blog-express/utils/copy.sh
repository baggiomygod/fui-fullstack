#!/bin/sh

cd /Users/wengf/work/self_test/1.test/7.mooc-pay/fui_admin_fullstack/blog_server_node/blog-node/logs
cp access.log $(date +%Y-%m-%d-%H).access.log
echo "" > access.log