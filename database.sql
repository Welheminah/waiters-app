create table waiters(
    id serial primary key,
    names text not null
);

create table theDays(
    id serial primary key,
    the_days text not null
);

create table admin_access(
    id serial not null primary key,
    waiterName int not null,
    days int not null,
    foreign key(waiterName) references waiters(id),
    foreign key(days) references theDays(id)
);

INSERT INTO theDays(the_days) VALUES ('Monday');
INSERT INTO theDays(the_days) VALUES ('Tuesday');
INSERT INTO theDays(the_days) VALUES ('Wednesday');
INSERT INTO theDays(the_days) VALUES ('Thursday');
INSERT INTO theDays(the_days) VALUES ('Friday');
INSERT INTO theDays(the_days) VALUES ('Saturday');
INSERT INTO theDays(the_days) VALUES ('Sunday');