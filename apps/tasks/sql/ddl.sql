create extension if not exists "uuid-ossp";

create table if not exists users(
    id bigserial primary key,
    nickname varchar(255) not null, 
    external_id uuid not null unique default uuid_generate_v4()
);


create table if not exists  tasks(
    id bigserial primary key,
    external_id uuid not null unique default uuid_generate_v4(),
    title varchar(255) not null,
    description text,
    status int2 not null,
    created_by bigint references users(id) not null,
    create_at timestamp not null default now(),
    super_task_id bigint references tasks(id)
);

create table if not exists tasks_allocation(
    id bigserial primary key,
    task_id bigint references tasks(id) not null,
    user_id bigint references users(id) not null
);



create table if not exists attachments(
    id bigserial primary key,
    external_id uuid not null unique default uuid_generate_v4(),
    name varchar(150) not null,
    url varchar(200) not null,
    type varchar(50) not null,
    created_at timestamp default now(),
    created_by bigint not null references users(id),
    attached_to bigint not null references tasks(id)
);