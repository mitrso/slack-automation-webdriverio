# Automation for Saved message validations in Slack

This framework is based on or utilizes the following 

- NodeJS
- WebdriverIO
- Mocha
- Chai
- Docker

## Local Setup for the suite

1. Install Node LTS - https://nodejs.org/en/download/

2. Install Java (will need this for report generation)

2. Open a terminal For installing all the libraries simply use this command

    ```sh
    npm i or npm install
    ```

3. Once setup and all libraries are downloaded the suite should be ready to test

4. Run the automation suite with the following command

    ```sh
    npm run test
    ```

5. The suite should start running and allure report should automatically be generated.

6. To open the report you can use this command

    ```sh
    allure open or  npm run open-report
    ```

If you have any issues generating the report use this command 

    allure generate allure-results/ --clean && allure open


## Running the suite in Docker

To run the suite in docker, please follow the steps

### Pre-requisites: 

Local Docker should be installed. 

Chrome will run in headless mode so please follow this step inside the wdio.conf.js

    'goog:chromeOptions': {
            args: ['--no-sandbox', '--disable-dev-shm-usage', '--headless']
            //If you are running local, please uncomment below line and comment the above line
            //args: ['--no-sandbox', '--disable-dev-shm-usage']
        }

1. Open a terminal and run the following command

    docker-compose up

2. Now, you can create an image on which you can run the test or you can run on an already created image

3. To create an image use this command

    ```sh
    docker build -t <projectname:tagName> .
    ```
    example: docker build -t slackautodemo:v1 .  (This image has already been created)

This should install all the libraries and dependencies.

4. If you want to run the test in the docker image use this command

    ```sh
    docker run -it <projectname:tagName>
    ```

    example: docker run -it slackautodemo:v1 (This image has already been created)

5. If you have any issues regarding JAVA_HOME and it fails to generate the report, please use the following to generate the report

    For opening only - allure open or npm open-report
    For generating and opening - allure generate allure-results/ --clean && allure open

