## Impossible to login after signout issue (Reprodution)

TL;DR : When using drizzle-adapter package the adapter cannot retrieve the 'provider' and 'providerAccountId' on the database,
causing the auth to throw OAuthAccountNotLinked Error.


## Reprodution

### 1. Clone the repository and install dependencies

```
git clone https://github.com/nextauthjs/next-auth-example.git
cd next-auth-example
npm install
```

### 2. Configure your local environment

Copy the .env.local.example and the drizzle.config.ts.example file in this directory to .env.local (which will be ignored by Git):


```
cp .env.local.example .env.local
cp drizzle.config.ts.example drizzle.config.ts
```
Populate those files

<!-- Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc). -->

#### Database
first, create a database using `turso-cli` - [how to](https://docs.turso.tech/tutorials/get-started-turso-cli/step-03-create-database)


then the connection was made using [turso / drizzle docs](https://orm.drizzle.team/docs/installation-and-db-connection/sqlite/turso) as reference:

### 4. Start the application

To run your site locally, use:

```
npm run dev
```
login, then signout, then try to login again. You'll be redirected because of the
`OAuthAccountNotLinked` Error.

