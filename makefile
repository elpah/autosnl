DOCKER_COMPOSE = docker-compose -f docker-compose.yml -f docker-compose.database.yml -f docker-compose.backend.yml -f docker-compose.frontend.yml
DOCKER_COMMAND = ENVIRONMENT=$(ENVIRONMENT) $(DOCKER_COMPOSE)

SERVICE ?= all
ENVIRONMENT ?= development  # Default to development if not specified

default: up

build:
	@echo "Building and starting service: $(SERVICE) in $(ENVIRONMENT) mode"
	@$(DOCKER_COMMAND) up --build --no-deps $(SERVICE)

build-all:
	@echo "Building and starting all services in $(ENVIRONMENT) mode"
	@$(DOCKER_COMMAND) up --build

down:
	@echo "Cleaning up containers"
	@$(DOCKER_COMMAND) down -v

prune:
	@echo "Stopping all services gracefully"
	@$(DOCKER_COMMAND) stop
	@echo "Cleaning up containers"
	@$(DOCKER_COMMAND) down -v
	@echo "Destroying All Containers and Unused Images"
	@docker system prune -af

restart:
	@echo "Restarting service: $(SERVICE) in $(ENVIRONMENT) mode"
	@$(DOCKER_COMMAND) restart $(SERVICE)

rebuild:
	@echo "Rebuilding and restarting service: $(SERVICE) in $(ENVIRONMENT) mode"
	@$(DOCKER_COMMAND) up --build --force-recreate --no-deps $(SERVICE)

stop:
	@echo "Stopping all services gracefully"
	@$(DOCKER_COMMAND) stop

up:
	@echo "Running all services in $(ENVIRONMENT) mode"
	@$(DOCKER_COMMAND) up

logs:
	@echo "Displaying logs for service: $(SERVICE)"
	@$(DOCKER_COMMAND) logs -f $(SERVICE)

ps:
	@echo "Listing running containers"
	@$(DOCKER_COMMAND) ps


# DOCKER_COMPOSE = docker-compose -f docker-compose.yml -f docker-compose.database.yml -f docker-compose.backend.yml -f docker-compose.frontend.yml

# SERVICE ?= all
# ENVIRONMENT ?= development  # Default to development if not specified

# build:
# 	@echo "Building and starting service: $(SERVICE) in $(ENVIRONMENT) mode"
# 	@$(DOCKER_COMPOSE) up --build --no-deps $(SERVICE)

# build-all:
# 	@echo "Building and starting all services in $(ENVIRONMENT) mode"
# 	@$(DOCKER_COMPOSE) up --build

# down:
# 	@echo "Cleaning up containers"
# 	@$(DOCKER_COMPOSE) down -v

# prune:
# 	@echo "Stopping all services gracefully"
# 	@$(DOCKER_COMPOSE) stop
# 	@echo "Cleaning up containers"
# 	@$(DOCKER_COMPOSE) down -v
# 	@echo "Destroying All Containers and Unused Images"
# 	@docker system prune -af

# restart:
# 	@echo "Restarting service: $(SERVICE) in $(ENVIRONMENT) mode"
# 	@$(DOCKER_COMPOSE) restart $(SERVICE)

# rebuild:
# 	@echo "Rebuilding and restarting service: $(SERVICE) in $(ENVIRONMENT) mode"
# 	@$(DOCKER_COMPOSE) up --build --force-recreate --no-deps $(SERVICE)

# stop:
# 	@echo "Stopping all services gracefully"
# 	@$(DOCKER_COMPOSE) stop

# up:
# 	@echo "Running all services in $(ENVIRONMENT) mode"
# 	@$(DOCKER_COMPOSE) up
