up:
	docker compose up -d
down:
	docker compose down
exec:
# pass docker compose service name as argument
	docker compose exec $(filter-out $@,$(MAKECMDGOALS)) /bin/bash