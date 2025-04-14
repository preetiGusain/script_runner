# Script Runner

This script runs a cron job to make periodic API calls. The API URL and the cron job schedule are configured via environment variables.

![Script Runner](logo.png)

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
backend_uri=<YOUR_API_URL>
CRON_STRING=<CRON_SCHEDULE>
```

- `backend_uri`: The API URL to which the script will make a GET request.
- `CRON_STRING`: The cron job schedule (e.g., `*/5 * * * *` to run every 5 minutes).

## Usage
After setting up the `.env` file, you can run the script:

```bash
node script.js
```

This will start the cron job immediately and it will continue making API calls as per the schedule specified in the `.env` file.

## Example

### .env
```env
backend_uri=https://api.example.com/data
CRON_STRING=*/5 * * * *  # This runs the job every 5 minutes
```

### Console output:
```pgsql
API URL from .env: https://api.example.com/data
Cron job is running. It will call the API every 5 minutes.
Making an API call at: 2025-02-24T12:00:00.000Z
API call successful: { "data": "Sample response data" }
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
