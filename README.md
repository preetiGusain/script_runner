# Script Runner

This script runs a cron job to make periodic API calls. The API URL and the cron job schedule are configured via environment variables.

<img src="logo.png" width="300"/>

## Prerequisites
- Node.js (version 12.x or above)
- npm (Node Package Manager)

## Installation
1. Clone or download the repository.
2. Navigate to the project directory.

```bash
git clone <repository-url>
cd <project-directory>
```

3. Install the required dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory of the project and configure the following variables:

```env
CRON_JOBS=[{"url":"<YOUR_API_URL>","cron":"<CRON_SCHEDULE>"}]
```

CRON_JOBS: A JSON array containing objects with two keys:

- url: The API endpoint to which the script will make a GET request.

- cron: The cron schedule string (e.g., `*/5 * * * *` to run every 5 minutes).

## Usage
After setting up the `.env` file, you can run the script:

```bash
node script.js
```

This will start the cron job immediately and it will continue making API calls as per the schedule specified in the `.env` file.

## Example

### .env
```env
CRON_JOBS=[{"url":"https://api.example.com/data","cron":"*/5 * * * *"}]
```

### Console output:
```pgsql
jobs fetched  [
  {
    url: 'https://api.example.com/data',
    cron: '*/5 * * * *'
  }
]
Cron jobs started!
Calling : https://api.example.com/data at :  2025-04-19T07:52:20.004Z
API call successful: { "data": "Sample response data" }
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
