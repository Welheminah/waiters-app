create table waiters(
    id serial not null,
    names text not null primary key
);

create table theDays(
    id serial not null,
    the_days text not null primary key
);

create table managers_access(
    id serial not null primary key,
    waiterName text not null,
    days text not null,
    foreign key(waiterName) references waiters(names),
    foreign key(days) references theDays(the_days)
);

INSERT INTO theDays(the_days) VALUES ('Monday');
INSERT INTO theDays(the_days) VALUES ('Tuesday');
INSERT INTO theDays(the_days) VALUES ('Wednesday');
INSERT INTO theDays(the_days) VALUES ('Thursday');
INSERT INTO theDays(the_days) VALUES ('Friday');
INSERT INTO theDays(the_days) VALUES ('Saturday');
INSERT INTO theDays(the_days) VALUES ('Sunday');

INSERT INTO waiters(names) VALUES ('Amu');
INSERT INTO waiters(names) VALUES ('Sipho');
INSERT INTO waiters(names) VALUES ('Musa');
INSERT INTO waiters(names) VALUES ('Tebza')
INSERT INTO waiters(names) VALUES ('Cremora');

INSERT INTO managers_access(waiterName, days) VALUES ('Moipone', 'Tuesday');