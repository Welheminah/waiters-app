create table waiters(
    id serial not null primary key,
    names varchar(100) not null
);

create table theDays(
    id serial not null primary key,
    the_days varchar(100) not null
);

create table managers_access(
    id serial not null primary key,
    days text not null,
    waiters_id int references waiters(id) ON DELETE CASCADE ON UPDATE CASCADE,
    theDays_id int references theDays(id) ON DELETE CASCADE ON UPDATE CASCADE
);


INSERT INTO theDays(the_days) VALUES ('Monday');
INSERT INTO theDays(the_days) VALUES ('Tuesday');
INSERT INTO theDays(the_days) VALUES ('Wednesday');
INSERT INTO theDays(the_days) VALUES ('Thursday');
INSERT INTO theDays(the_days) VALUES ('Friday');
INSERT INTO theDays(the_days) VALUES ('Saturday');
INSERT INTO theDays(the_days) VALUES ('Sunday');

create table waiters(
    id serial not null,
    names text not null primary key
);

create table theDays(
    id serial not null primary key,
    the_days text not null
);


create table managers_access(
    id serial not null primary key,
    waiterName text not null,
    days text not null,
    foreign key(names) references waiters(names),
    foreign key(the_days) references theDays(id)
);


INSERT INTO theDays(the_days) VALUES ('Monday');
INSERT INTO theDays(the_days) VALUES ('Tuesday');
INSERT INTO theDays(the_days) VALUES ('Wednesday');
INSERT INTO theDays(the_days) VALUES ('Thursday');
INSERT INTO theDays(the_days) VALUES ('Friday');
INSERT INTO theDays(the_days) VALUES ('Saturday');
INSERT INTO theDays(the_days) VALUES ('Sunday');
