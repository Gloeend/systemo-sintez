**Getting Started**
---------------

### Installation

Run `yarn install` to install all dependencies.

### Development

Run `yarn start` to start the development server.

### Building

Run `yarn build` to build the application for production.

**Project Structure**
--------------------

### FSD Architecture

Our project follows the Feature-Sliced Design (FSD) architecture, which organizes the codebase into features, each containing its own slice of the application's functionality.

* `features/`: Top-level directory for all features.
+ `feature1/`: A sample feature, containing its own components, containers, and reducers.
- `components/`: React components for the feature.
- `containers/`: Higher-order components for the feature.
- `reducers/`: Redux reducers for the feature.
+ `feature2/`: Another sample feature, following the same structure as `feature1`.

### Redux and Redux Toolkit

We use Redux for state management, and Redux Toolkit to simplify the process of creating and managing reducers.

* `store.ts`: The central Redux store, created using Redux Toolkit.
* `reducers/`: Directory for all Redux reducers, including those for each feature.

### Apollo GraphQL and GraphQL Subscriptions

We use Apollo GraphQL for data fetching and GraphQL Subscriptions for real-time updates.

* `graphql/`: Directory for all GraphQL schema and resolvers.
* `subscriptions/`: Directory for all GraphQL subscriptions.

### Tailwind CSS

We use Tailwind CSS for styling and theming.

* `tailwind.config.js`: Configuration file for Tailwind CSS.
* `styles/`: Directory for all CSS styles, including those generated by Tailwind CSS.

**Technologies Used**
--------------------

* React
* TypeScript
* Tailwind CSS
* Redux
* Redux Toolkit
* Apollo GraphQL
* GraphQL Subscriptions
* Feature-Sliced Design (FSD) architecture

**Resources**
------------

* [Redux Toolkit]
* [Feature-Sliced Design]
* [Apollo GraphQL]
* [GraphQL Subscriptions]
* [Tailwind CSS]

**License**
-------

This project is licensed under the MIT License.phql.com/: https://graphql.org/learn/subscriptions/: https://tailwindcss.com/