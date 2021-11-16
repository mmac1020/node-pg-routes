DROP TABLE IF EXISTS users, dogs;

create table users (
  id serial primary key,
  name text default null,
  imageurl text default null
);

create table dogs (
  id serial primary key,
  name text default null,
  imageurl text default null
);

INSERT INTO users (name, imageurl) values ('Mac', 'https://ca.slack-edge.com/T024FPYBQ-U017Z7YQ0SY-a18868e18f30-512');
INSERT INTO users (name, imageurl) values ('Zach', 'https://ca.slack-edge.com/T2VHPBHA5-U02BKERCU78-c8d5447be016-512');
INSERT INTO users (name, imageurl) values ('Sey', 'https://ca.slack-edge.com/T024FPYBQ-U01U52GE9HD-ad844432bdf3-512');
INSERT INTO users (name, imageurl) values ('Amber', 'https://ca.slack-edge.com/T024FPYBQ-U0254SSL8TW-ed2db073e6f8-512');
INSERT INTO users (name, imageurl) values ('Devonne', 'https://ca.slack-edge.com/T024FPYBQ-U024REQ113P-1c8254d97d77-512');
INSERT INTO users (name, imageurl) values ('Eric', 'https://ca.slack-edge.com/T024FPYBQ-U029NPV4TNH-dfc7016d7417-512');
INSERT INTO users (name, imageurl) values ('Greg', 'https://ca.slack-edge.com/T024FPYBQ-U029S12U8HH-ddf3217e4858-512');

INSERT INTO dogs (name, imageurl) values ('Casey', 'https://i.ytimg.com/vi/mRf3-JkwqfU/sddefault.jpg');
INSERT INTO dogs (name, imageurl) values ('Bubba', 'https://cf.ltkcdn.net/dogs/images/orig/236742-1600x1030-cutest-puppy-videos.jpg');
INSERT INTO dogs (name, imageurl) values ('Koda', 'https://i.pinimg.com/736x/c4/8d/ae/c48dae31367043443436e01abf1d0f06.jpg');
INSERT INTO dogs (name, imageurl) values ('Porter', 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2019/12/shutterstock_1120210925.jpg?resize=1024%2C684&ssl=1');
