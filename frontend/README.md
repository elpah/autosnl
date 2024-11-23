# Getting Started with the app

##

### GIT

main
│
├── dev
│   ├── feature/
│   │   ├── feature/add-user-authentication
│   │   ├── feature/user-profile
│   │   └── feature/payment-integration
│   │
│   ├── bugfix/
│   │   ├── bugfix/login-issue
│   │   └── bugfix/payment-error
│   │
│   └── release/
│       └── release/v1.0.0 dev
│
└── hotfix/
    └── hotfix/reset-password-fix

1. master: The root branch.
    - hotfix/: A separate branch for urgent fixes that need immediate attention in production, created directly from master.
2. dev: The integration branch for ongoing development, where features and bug fixes are merged.
    - feature/: Contains all feature branches. Each feature branch should be named descriptively to indicate its purpose.
    - bugfix/: Contains branches for bug fixes.
    - release/: Contains release branches for preparing new versions for deployment.
  
## Docker

- To list all environment variables inside a running container, run
    docker exec -it <container_name_or_id> env
- To access the shell of a running container, use:
    docker exec -it <container_name_or_id> sh
- To view logs of a specific container
    docker logs <container_name_or_id>
- To list all Docker networks
    docker network ls
- To list all Docker volumes
    docker volume ls
- To list all containers
    docker ps -a

## Makefile Commands

- `make build SERVICE=<service> ENVIRONMENT=<env>`: Build and start a specific service.
- `make build-all ENVIRONMENT=<env>`: Build and start all services.
- `make up ENVIRONMENT=<env>`: Start all services.
- `make down`: Stop and remove all containers.
- `make restart SERVICE=<service>`: Restart a specific service.
- `make prune`: Stop, clean up, and remove unused containers and images.
- `make logs SERVICE=<service>`: Show logs for a specific service.
- `make ps`: List running containers.

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
