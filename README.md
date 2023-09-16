# Utils to setup the environment

## Getting Started 🚀

### Prerequisites 📋
- SSH linked with your GitHub account
  - [generate ssh key](https://www.ssh.com/academy/ssh/keygen)
  - [add key to GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Setup 🔧

```bash
$ git clone path/to/repo
```

### Run 📦
If you are using the Docker app, i recommend to watch this [video](https://youtu.be/gAkwW2tuIqE).
If you're using the command line:

```bash
# Linux/MacOS
$ docker compose up
```

### More commands 📋
```bash
$ docker compose exec backend sh # Access backend container terminal
```

Inside the backend terminal:
```bash
$ db:create # Run make migrations
$ db:migrate # Run migrations
```

### Test ⚙️
Backend should be running on port 3000 and frontend on port 5173.

## Built With 🛠️
- Docker and Docker Compose
- Django - Backend REST API