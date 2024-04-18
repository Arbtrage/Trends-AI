![testify.ai](https://socialify.git.ci/Arbtrage/testify.ai/image?description=1&language=1&name=1&owner=1&pattern=Charlie%20Brown&theme=Dark)

# Trend - Stock Market Analysis Tool

Trend is a Next.js application that provides a comprehensive suite of tools for stock market tracking and analysis. It offers an interactive experience with real-time data visualizations, trend analysis, and investment insights.

## Directory Structure

- `.next/`: Contains the output from Next.js' build process.
- `app/`: The core directory where the application's main files are located.
  - `api/`: API routes and logic for server-side processing.
  - `global-error.tsx`: Global error handling components.
  - `globals.css`: Global CSS file for application-wide styles.
  - `layout.tsx`: Main layout components used across the application.
  - `page.tsx`: Individual page components.
  - `Provider.tsx`: React context providers for global state management.
- `components/`: React components categorized by complexity:
  - `atoms/`: The smallest building blocks of the UI, like buttons and icons.
  - `molecules/`: Groups of atoms functioning together as a unit.
  - `organism/`: Complex UI sections composed of groups of molecules and atoms.
  - `template/`: Reusable page layouts.
  - `ui/`: Custom UI components that might combine several organisms and templates.
- `constants/`: Constant values used throughout the application.
- `context/`: React context files for state management across the application.
- `lib/`: Library code, including utilities and data-fetching functions.
  - `fetchers.ts`: Functions to fetch data from APIs.
  - `utils.ts`: Utility functions for common tasks.
- `public/`: Static files like images and the app's favicon.
- `node_modules/`: Dependencies installed by npm.
- `.env`: Environment variable definitions (not to be committed to version control).
- `.eslintrc.json`: ESLint configuration for code linting.
- `next-env.d.ts`: TypeScript declaration file for Next.js types.
- `next.config.mjs`: Next.js configuration file.
- `package-lock.json`: Auto-generated file to lock down npm dependencies versions.
- `package.json`: Defines scripts and dependencies of the project.
- `postcss.config.mjs`: PostCSS configuration for processing CSS.
- `README.md`: Documentation to help developers understand the project structure and setup.
- `tailwind.config.ts`: Configuration for Tailwind CSS.

## Core Features

1. **Real-Time Market Data**: Trend provides live updates on stock prices, volume, and market changes, allowing users to make timely and informed decisions.

2. **Interactive Data Visualization**: With advanced charting tools, users can visualize stock performance over time through line, bar, and candlestick charts, as well as custom overlays like moving averages.

3. **Customizable Dashboards**: Users can personalize their dashboards with widgets to track specific stocks, market indices, or sectors, providing a unique at-a-glance view of the metrics that matter most to them.

4. **Insightful Analytics**: The app includes features for calculating key financial indicators such as profit margins, P/E ratios, and more, giving users a deeper understanding of a stock's valuation.

5. **Trend Detection Algorithms**: By leveraging machine learning, Trend can identify potential stock patterns and forecast market trends, aiding in predictive analysis.

6. **Performance-Driven Design**: The application utilizes server-side rendering for a fast initial load and smooth interactivity, coupled with client-side rendering for dynamic updates, ensuring an optimal balance between performance and real-time responsiveness.

7. **Efficient Data Handling**: Trend implements smart caching strategies to minimize bandwidth usage and improve the speed of data retrieval, employing SWR (stale-while-revalidate) techniques for efficient data fetching and state management.

8. **Search Optimization**: With throttled search inputs, the application efficiently handles API requests, reducing unnecessary load and enhancing the user experience.

9. **Contextual State Management**: The use of React Context allows for state to be maintained across components without prop drilling, making for a clean and maintainable codebase.

10. **Responsive Layout**: Trend is built with a mobile-first approach, ensuring a seamless experience across all devices.

11. **Environmentally Aware**: Environment variables are used to securely manage API keys and other sensitive information, keeping them out of the codebase and reducing the risk of exposure.

## Performance Boosting Logic

1. **Throttling and Debouncing**: Input fields are throttled to limit API calls during search operations, and debouncing techniques ensure that calls are made only when the user has stopped typing, optimizing the number of requests made to the server.

2. **Memoization**: React's `useMemo` and `useCallback` hooks are utilized to prevent unnecessary re-renders, improving performance for computationally expensive operations.

3. **Code Splitting**: Using dynamic imports, the application loads only the code users need when they need it, greatly reducing initial load times.

4. **Lazy Loading**: Images and non-critical resources are lazy-loaded, ensuring they are only fetched when they enter the viewport.

5. **Concurrent Mode**: React's Concurrent Mode is leveraged to prepare new views in the background without blocking the main thread, ensuring a smooth and jank-free UI.

6. **SWR for Data Fetching**: The SWR hook is employed for its efficient caching and revalidation strategy, which significantly improves data fetching performance by avoiding unnecessary network requests.

7. **Server-Side Rendering (SSR)**: Critical page content is rendered on the server, which improves SEO and provides faster page load times by reducing the amount of JavaScript needed to be executed on the client-side.

8. **Compression and Minification**: All assets are compressed and minified, reducing their size and improving load times.

9. **Smart Error Handling**: Robust error handling prevents unnecessary retries and wasted resources by handling failures gracefully.

10. **Efficient State Updates**: State is updated in a batch to minimize component re-renders, ensuring that UI updates are efficient and user interactions remain smooth.

---

By incorporating these features and performance strategies, Trend provides an efficient, engaging, and user-friendly platform for stock market analysis.
## Run Locally

Clone the project

```bash
  git clone https://github.com/Arbtrage/testify.ai
```

Go to the project directory

```bash
  cd testify.ai
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_RAPID_API_KEY`
`NEXT_PUBLIC_RAPID_API_KEY2` (Same as key)
`NEXT_PUBLIC_RAPID_API_URL`


## Screenshots

![image](https://github.com/Arbtrage/testify.ai/assets/100552235/4c03db3d-270d-45ee-b666-fbfb94ef7222)

![image](https://github.com/Arbtrage/testify.ai/assets/100552235/8f5fbd04-8560-45a6-8a57-759847d0a070)


## Tech Stack

**Client:** NextJs, ContextAPI, TailwindCSS, Recharts

**API:** Alpha Vantage 

