# discordeno-node

## Usage

1. Use the template to make your own repo.
2. `npm i`
3. Setup the `.prettierrc` if you would prefer different options.
4. Setup PRISMA! https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgres/ Pick the database you desire and follow instructions to setup your configs.
4a. If you have a SQL database, once you setup step 4 `npx prisma db pull` to automatically create the schema files. You can try this with MongoDB but I think Prisma + MongoDB at the time of this templates creation did not yet support it.
5. 

## TODO: 

1. Setup dotenv and then get configs registered safely with proper typings.
2. Setup a nice logger system.