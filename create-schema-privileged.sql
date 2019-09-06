create database aplicacionweb character set UTF8mb4 collate utf8mb4_bin;
create user aplicacionweb;
grant all on aplicacionweb.* to 'aplicacionweb'@'%' identified by 'aplicacionweb';
grant all on aplicacionweb.* to 'aplicacionweb'@'localhost' identified by 'aplicacionweb';
flush privileges;
