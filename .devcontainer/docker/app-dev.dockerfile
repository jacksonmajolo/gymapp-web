FROM node

ENV LAST_UPDATED 2025-11-19

RUN ln -sf /usr/share/zoneinfo/America/Fortaleza /etc/localtime

# Arguments defined in docker-compose.yml
ARG user
ARG uid
ARG gid

# Install system dependencies
RUN apt-get update && apt-get install -y \
	git \
	curl \
	zip \
	unzip \
    vim

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /var/www

# Expose port 3000
EXPOSE 3000

# Create a user and group with the specified UID and GID
RUN getent group ${gid} || groupadd -g ${gid} ${user} \
  && useradd -u ${uid} -g ${gid} -ms /bin/bash ${user}

# Set the user to run the container
USER $user