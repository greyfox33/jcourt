OAUTH2 TOKEN USAGE
==================

curl -X POST -vu jcourt2app:mySecretOAuthSecret http://127.0.0.1:8080/oauth/token -H "Accept: application/json" -d "username=robbt3&password=robbt3&grant_type=password&scope=read&client_id=jcourt2app&client_secret=mySecretOAuthSecret"

1. create login with new user
2. use the above curl command to get a token
3. include the token in REST requests from clients
4. Note that token refresh is not implemented -- just set token to 10hrs. 
TODO: get the token automatically and 


curl http://127.0.0.1:8080/api/users -H "Authorization: Bearer <replace with token from response>"

e.g. 
curl http://127.0.0.1:8080/api/users -H "Authorization: Bearer fde65317-45b9-4677-9617-e18ebde65ec3"

(after creating a hearing)
curl http://127.0.0.1:8080/api/hearings/1 -H "Authorization: Bearer fde65317-45b9-4677-9617-e18ebde65ec3"

**Resources:**
"access_token":"fde65317-45b9-4677-9617-e18ebde65ec3","token_type":"bearer"
resh_token":"b65ac4dc-195b-4d5e-8a9b-bda1c6fd158f","expires_in":1799,"scope
ad"}* Connection #0 to host 127.0.0.1 left intact

* http://stackoverflow.com/questions/28269487/jhipster-oauth-how-can-i-get-the-access-token-via-curl/28278293#28278293

* http://stackoverflow.com/questions/30266065/get-access-token-from-jhipster-with-oauth2