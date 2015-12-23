oauth info

create api user/pass in the database

curl http://127.0.0.1:8080/oauth/token --request POST --insecure --data "username=[xxx]&password=[yyy]&grant_type=password&scope=read%20write&client_secret=[your app secret]&client_id=[your app id] " -H "Authorization:Basic [base64 of your appid:appsecrt]"

http://stackoverflow.com/questions/28269487/jhipster-oauth-how-can-i-get-the-access-token-via-curl/28278293#28278293