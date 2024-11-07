<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://gooischetrimsalon.nl/images/gooische-logo.png" width="100" alt="Laravel Logo"></a></p>

## About Gooische Trimsalon

Version 3 of the Gooische Trimsalon website located in Hilversum. In consists of an Admin panel where the user can access appointments that have been made, create animals, grooming options and handle the calendar.

### Requirements

- `PHP >= 8.1`
- `Laravel >= 10`
- `MySQL >= 8.1`
- `Node >= 18`
- `React >= 18`

## How to setup

This projects uses Laravel Sail as Docker development environment. Make sure you have Docker Desktop, or any other setup, installed on your computer.
Open the project and enter the following command:

```zsh
composer install

npm install

./vendor/bin/sail up

npm run dev
```

For more information about Sail please see the following [documentation](https://laravel.com/docs/11.x/sail)
