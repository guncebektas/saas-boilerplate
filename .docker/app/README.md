# First of all build the application
Run the build command in application's root folder 
```bash
meteor build --architecture=os.linux.x86_64 ../ritapos-output
```

This command will bundle the app and create `ritapos.tar.gz` in `../ritapos-output` folder.
Move tar file into this folder where Dockerfile exists.

# Build and Run the image
```bash
docker build -t app .
docker run --name ritapos -e ROOT_URL='http://localhost:3000' -e MONGO_URL='mongodb://localhost:27017/ritapos' -e METEOR_SETTINGS='$(cat settings.json)' app
docker run -e ROOT_URL='http://localhost:3000' -e MONGO_URL='mongodb://localhost:27017/ritapos' -e METEOR_SETTINGS='$(cat ./settings.json)' app
```