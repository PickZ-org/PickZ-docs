---
sidebar_position: 1
---

# Installation

## System Requirements

Before installing PickZ, ensure that your system meets the following requirements:

- **PHP**: Version 8.2 or higher
- **Composer**: Version 2.6.0 or higher
- **Database**: MySQL, PostgreSQL, or any Laravel-supported database
- **Web Server**: Apache, Nginx, or equivalent

## Installation Steps

### 1. Clone the Repository and Install Dependencies

Clone or extract the project files into a folder and run:

```sh
composer install -o --no-dev
```

### 2. Configure Environment Variables

PickZ requires a `.env` configuration file. Copy the provided `.env.example` template to create your own configuration file:

```sh
cp .env.example .env
```

Now, edit the `.env` file to set up your database, timezone, and application URL.

#### Application Settings

- `APP_TIMEZONE` - Define your application timezone.
- `APP_URL` - Set your application's base URL.

#### Database Settings

- `DB_CONNECTION` - Database type (e.g., mysql, pgsql)
- `DB_HOST` - Database server IP or hostname
- `DB_PORT` - Database connection port
- `DB_DATABASE` - Name of the database
- `DB_USERNAME` - Database user
- `DB_PASSWORD` - Database password

### 3. Generate Encryption Key and Set Up Database

Run the following commands to generate an application encryption key and initialize the database:

```sh
php artisan key:generate
php artisan migrate --force
php artisan db:seed --force
```

### 4. Set Up Scheduled Tasks

To ensure scheduled tasks run automatically, add the following cron job to your server:

```sh
* * * * * cd /path-to-PickZ && php artisan schedule:run >> /dev/null 2>&1
```

PickZ is now ready to use!

:::caution
The default login credentials are **admin/admin**. For security reasons, make sure to change them immediately after logging in.
:::

