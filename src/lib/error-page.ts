// SSR error page renderer
export function renderErrorPage(): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Application Error — Sterling Resort Manager</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background: #fcfcfc;
          color: #333;
          margin: 0;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
        }
        .container {
          max-width: 500px;
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          border: 1px solid #eaeaea;
        }
        h1 {
          font-size: 1.5rem;
          margin-top: 0;
          color: #e11d48;
        }
        p {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #666;
        }
        button {
          background: #7c3aed;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          margin-top: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Something went wrong</h1>
        <p>An unexpected server-side error occurred while loading this page. Please try refreshing or contact support if the issue persists.</p>
        <button onclick="window.location.reload()">Refresh Page</button>
      </div>
    </body>
    </html>
  `;
}
