# Ethereum Token Balances Checker

---

This project is a simple web server and job that fetches and writes the balances
of all ERC20 tokens and Ethereum native tokens for a given address. The balances
are fetched using the web3.js API, and the token addresses are obtained from the
CoinGecko API.

The project consists of two parts:

1. A web server that exposes a GET endpoint that returns the balances of all
   ERC20 tokens and Ethereum native tokens for a given address. The endpoint
   can be accessed by sending a GET request to the `/balances` endpoint with the
   `address` query parameter set to the Ethereum address for which the balances should
   be fetched.
2. A job that fetches the balances using the web server and writes them to a file.
   The job runs every minute and writes the balances to a new file each time.

## Technologies Used

---

The project was implemented using the following technologies:

* Node.js
* Express.js
* TypeScript
* web3.js API
* CoinGecko API

## Available Routes

---

#### **GET** `/api/balances/:address`

* Used to return the balances of all ERC20 tokens and native Ethereum tokens at the specified address in JSON format.


## Getting Started

---

To get started with the project, follow these steps:

1. Clone the repository to your local machine.

2. Install the dependencies by running the following command in the project directory:

```bash
npm install
```

3. Start the web server by running the following command:
```bash
npm run start
```

4. Send a GET request to the `/balances` endpoint with the `address` query parameter set to the Ethereum address for which you want to fetch the balances. For example:
```
http://localhost:5000/api/balances/0xA145ac099E3d2e9781C9c848249E2e6b256b030D
```

5. Start the job by running the following command (the `job` starts with the execution of the main script, but you can run it independently):
```bash
npm run job-only
```

## What's included

Within the download you'll find the following working directories and files:



```
- project-root/
  ├── public/
  │   └── balance.json
  ├── src/
  │   ├── config/
  │   │   └── config.ts
  │   ├── controllers
  │   │   └── balanceController.ts  
  │   ├── helpers/
  │   │   ├── balanceJob.ts  
  │   │   ├── catchErrors.ts
  │   │   └── isValidEtherumAddress.ts   
  │   ├── middlewares/
  │   │   └── validateEtherumAddress.ts    
  │   ├── routes/
  │   │   └── balanceRouter.ts
  │   ├── services/
  │   │   └── balanceService.ts 
  │   ├── types/
  │   │   ├── balanceJob.ts  
  │   │   ├── catchErrors.ts
  │   │   └── isValidEtherumAddress.ts
  │   ├── jobRunner.ts   
  │   └── server.ts
  ├── .eslintrc
  ├── .gitignore
  ├── .prettierrc
  ├── nodemon.json
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── tsconfig.json
```

## Future Improvements

---

Here are some potential improvements that could be made to the project:

* Add support for fetching balances for multiple addresses at once.
* Allow users to specify which tokens they want to include in the balance report.
* Add support for other blockchain networks, such as Binance Smart Chain or Polygon.
