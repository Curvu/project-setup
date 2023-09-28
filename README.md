# Utils to setup the environment

## Getting Started 🚀

### Prerequisites 📋
- SSH linked with your GitLab account
  - [generate and add ssh key to GitLab](https://docs.gitlab.com/ee/user/ssh.html#add-an-ssh-key-to-your-gitlab-account)

- [Docker](https://www.docker.com/products/docker-desktop/)

- If you are not using the docker app, you will also need:
  - [Docker Compose](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually)

### Setup 🔧

```bash
git clone git@gitlab.com:dei-uc/es2023/pl3.git
```

After cloning the project, you need to create a `.env` file in the `DEV/frontend` like the `.env.sample` file (copy-paste that file and rename it to just ".env").

#### VSCode Extensions

These are the extensions that are recommend for VSCode, the first one is the most important.

- dbaeumer.vscode-eslint
- usernamehw.errorlens
- dsznajder.es7-react-js-snippets
- wix.vscode-import-cost
- christian-kohler.npm-intellisense
- mrmlnc.vscode-scss
- ms-python.python
- naumovs.color-highlight

### Run 📦
If you are using the Docker app, i recommend to watch this [video](https://youtu.be/gAkwW2tuIqE).\
To run the project, you just need to run the following command in the `DEV` folder:

```bash
docker compose up
```

### More commands 📋
```bash
docker compose exec backend sh # Access backend container terminal
docker compose exec frontend sh # Access frontend container terminal
```

Inside the backend terminal:
```bash
db:create # Make migrations
db:migrate # Migrate
create:admin # Create superuser (admin)
django # instead of using `python3 manage.py` you can use `django`
```

### Checking Server 🖥️
Backend should be running on port 8080 and frontend on port 3000.

### Testing ⚙️
- Not possible yet

## Built With 🛠️
- Docker and Docker Compose
- Backend
  - Django Rest Framework
- Frontend
  - Vite - React
  - Sass
