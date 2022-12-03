# django-react-tasksapp

![image](https://user-images.githubusercontent.com/67972962/205440476-c952366c-54a3-4213-8328-b06088475e09.png)

first create your virtualenv

`$ cd server`

`$ python3 -m venv venv`

activate venv

`$ source venv/bin/activate`

then install requirements

`$ pip install -r requirements.txt`

install postgresql, login and create the database

`CREATE DATABASE <yourDBname>;`

create a .env file in the root folder

`$ touch .env`

and add your postgresql credentials and the app SECRET_KEY to .env file

>ENV_SECRET_KEY="{add a secret key like bhajfbkjhawbdkjhabdjh}"\
ENV_NAME='{yourDBname}'\
ENV_HOST='{your host or localhost}'\
ENV_PORT='{your db port or 5432}'\
ENV_USER='{your db user}'\
ENV_PASSWORD='{your db password}'

run the command:
`python manage.py migrate`

finally the project run with: 

`$ python manage.py runserver`

open your browser or your REST Client in: 

`GET localhost:8000`\
`POST localhost:8000`\
`GET PUT DELETE localhost:8000/task/<id>`

active the frontend with:

`cd ../frontend`\
`ng serve`

open the browser in:

`localhost:4200`
