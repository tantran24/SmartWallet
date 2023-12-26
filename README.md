# ExpensesApp
<<<<<<< Updated upstream
- `npm install` or `yarn` to install all the dependencies, React and React Native among others.
## Scenario

In Vietnam today, there is a lot of demand for personal financial management. Therefore, the team decided to create an application that can support the needs of tracking personal finances. This app aims to help users track their expenses, store and categorize data by date into charts for financial analysis, and manage their personal finances efficiently.

## Detail
- Main functions: Add, delete, edit transactions, Import, Export data to csv,xml,qif files. Manage data by date in the form of charts. Send notifications and schedule transactions automatically.Finally, search and filter fucntion help users can search and filter transactions by headings, dates and categories 
- Total time to complete: ~50h
- Framework: React-native
- Database: Firebase storage

## Feature
### ScreenShots

- Home Screen
- Financial analysis: Users can view their expenses and income in the form of charts, which helps them analyze their financial performance.
- Import and Export data: Users can import and export their data to and from csv,xml,qif files.
- Search and Filter: Users can search and filter transactions by headings, dates and categories
- Notifications: Users can set up notifications for upcoming transactions and receive reminders before the transaction date.
- Schedule transactions: Users can schedule transactions to occur automatically on specific dates.

This project aims to provide users with a user-friendly, efficient, and secure personal finance management application. The team has used React-native framework and Firebase storage for the project, and it took approximately 50 hours to complete.

## Attempt
During the development of the application, it was difficult to transfer and process data using traditional databases. Therefore, we decided to use Firebase instead of conventional database design. By using the provided API, it is easy to transfer and manipulate data.

Regarding improvement, we want to add diversity to various financial products and make it easy for accountants to use.

## Build Notes
```
#### With some versions of npm (>=v3.3.10)

Some builds from npm included bugs while `npm install`. So if you are using a npm version within the range form 3.3.10 to 3.6.0 included, you must run `npm install` twice. Those versions including npm v3.3.12 are the ones bundled by default with node from version v5.1.0 to v5.5.0.

- `npm install npm`
- `npm install npm` run it twice, because of the packages won't be installed after the first run [#10985](https://github.com/npm/npm/issues/10985)

```

