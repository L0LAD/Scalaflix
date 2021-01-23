# Prelude for Windows
To be run through the `npm run start` command, the package.json file needs some modification in the scripts part. The lines "prebuild" and "build" have to be replaced with their Linux counterparts :

|          |              Windows               |                       Linux                       |
| -------- |              --------              |                     --------                      |
| prebuild |           `"del dist",`            |                `"rm -rf dist/*",`                 |
|  build   | `"tsc && copy package.json dist",` | `"tsc && cp -rf package.json dist/package.json",` |

# Create and run a Docker container
1. Make sure Docker is installed and fonctionnal. Otherwise, the complete guide can be found on this link : https://docs.docker.com/get-docker/.
1. `docker build -t scalflix-users .`
1. `docker run -dp 5000:5000 scalflix-users`. If successful, the server should be accessible at one of those URLs : `0.0.0.0:5000` or `localhost:5000`.

# Test the functions
The functions can be tested using an API development platform such as Postman or RESTer.

## Catalog container
This service is accessible on port 5005.

* GET
    * Get all users' informations : `/users`
    * Get a user's informations : `/users/:id`
    * Get a user's playlist : `/users/:id/playlist`
    * Get a user's suggestions list : `/users/:id/suggestions`
* POST
    * Add a new user : `/users`
* PUT
    * Edit a user's informations : `/users/:id`
    * Edit a user's playlist : `/users/:id/playlist`
    * Edit a user's suggestions list : `/users/:id/suggestions`
* DELETE
    * Delete a user from the list : `/users/:id`

## Users container
This service is accessible on port 5000.

* GET
    * Get all movies' informations : `/movies`
    * Get a movie informations : `/movies/:id`
    * Get all archived movies' informations : `/archives`
    * Get an archived movie informations : `/archives/:id`
    * Get all genres : `/genres`
    * Get a genre's informations : `/genres/:id`
    * Get all people : `/people`
    * Get a person's informations : `/people/:id`
* POST
    * Add a new movie : `/movies`
    * Add a new genre : `/genres`
    * Add a new perosn : `/people`
* PUT
    * Edit a movie's informations : `/movies/:id`
    * Edit a genre's information : `/genres/:id`
    * Edit a person's information : `/people/:id`
* DELETE
    * Delete a movie from the list and add it to the archives list : `/movies/:id`
    * Delete a genre : `/genres/:id`
    * Delete a person : `/people/:id`
