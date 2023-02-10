CREATE OR REPLACE FUNCTION random_string(int) RETURNS TEXT as $$
SELECT substr(md5(random()::text), 0, $1+1);                 
$$ language sql; 
SELECT random_string(6);
update jwt_secrets set "key" = random_string(32) where "key" is not null;
update jwt_secrets set "secret" = random_string(32) where "secret" is not null;
update jwt_secrets set "rsa_public_key" = random_string(256) where "rsa_public_key" is not null;
update consumers set "username" = random_string(256) where "username" is not null;
delete from plugins;
delete from routes;
delete from services;