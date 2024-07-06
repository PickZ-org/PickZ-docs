---
sidebar_position: 1
---

# Installation

## System Requirements

Before you get started with installing PickZ, ensure that your system meets the following requirements:

- **PHP**: Version 8.2 or higher
- **Composer**: Version 2.6.0 or higher
- **Database**: MySQL, PostgreSQL, or any supported database by Laravel
- **Web Server**: Apache, Nginx, or equivalent

## Installation steps

Clone or extract files into a folder and run:

```s
composer install -o --no-dev
```

There is a .env.example which is a template of the .env file that the project expects us to have.
So we will make a copy of the .env.example file and create a .env file that we can start to fill out to do things like database configuration in the next few steps.

```
cp .env.example .env
```

Now change the variables in the .env file for your database, timezone, and app URL.

###### Application settings
`APP_TIMEZONE` Application timezone

`APP_URL` Application URL

###### Database settings
`DB_CONNECTION` Database type

`DB_HOST` IP or hostname

`DB_PORT` Port

`DB_DATABASE` Database name

`DB_USERNAME` Username

`DB_PASSWORD` Password

Run these commands to generate an app encryption key and set up the initial database tables and records.

```
php artisan key:generate
php artisan migrate --force
php artisan db:seed --force
```

Finally, don't forget to add a cron entry to your server for scheduled tasks.

```bash
* * * * * cd /path-to-PickZ && php artisan schedule:run >> /dev/null 2>&1
```

PickZ should now be ready to run!

:::caution
The default username/password is admin/admin, make sure to immediately change this after logging in the first time.
:::
