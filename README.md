
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ffe72f2e-edfa-4cfa-929e-d0ae51700f64

## System Architecture and Flows

### User Journey
```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Supabase
    
    User->>Frontend: Visit changelog page
    Frontend->>Supabase: Fetch changelog entries
    Supabase-->>Frontend: Return entries data
    Frontend-->>User: Display changelog entries
    
    User->>Frontend: Click on entry details
    Frontend->>Supabase: Fetch single entry data
    Supabase-->>Frontend: Return detailed entry
    Frontend-->>User: Display entry details
    
    User->>Frontend: Filter by category
    Frontend->>Frontend: Apply filter to existing data
    Frontend-->>User: Show filtered entries
```

### Admin User Flow (Webhook Integration)
```mermaid
sequenceDiagram
    participant Admin
    participant CI/CD System
    participant Webhook API
    participant AIProcessor
    participant Supabase
    participant Frontend
    
    Admin->>CI/CD System: Trigger release
    CI/CD System->>Webhook API: POST release data
    Webhook API->>AIProcessor: Process webhook data
    AIProcessor->>AIProcessor: Format and enhance content
    AIProcessor->>Supabase: Store new changelog entry
    Supabase-->>Webhook API: Confirm storage
    Webhook API-->>CI/CD System: Success response
    
    Frontend->>Supabase: Poll for new entries
    Supabase-->>Frontend: Return updated entries
    Frontend-->>User: Display new changelog
```

### Database Schema
```mermaid
erDiagram
    CHANGELOG {
        int id PK
        string title
        text content
        string category
        timestamp release_date
        string released_by
        string dev
        text lessons_learned
        timestamp modified_date
        timestamp created_at
    }
```

### Project File Structure
```mermaid
graph TD
    A[src] --> B[api]
    A --> C[components]
    A --> D[hooks]
    A --> E[lib]
    A --> F[pages]
    A --> G[services]

    B --> B1[webhook.ts]

    C --> C1[ui]
    C --> C2[CategoryBadge.tsx]
    C --> C3[CategoryFilter.tsx]
    C --> C4[ChangelogDetail.tsx]
    C --> C5[ChangelogEntry.tsx]
    C --> C6[ChangelogList.tsx]
    C --> C7[Header.tsx]

    C1 -->|UI Components| C1A[toast.tsx]
    C1 -->|UI Components| C1B[button.tsx]
    C1 -->|UI Components| C1C[...]

    D --> D1[use-mobile.tsx]
    D --> D2[use-toast.ts]

    E --> E1[utils.ts]

    F --> F1[Index.tsx]
    F --> F2[NotFound.tsx]

    G --> G1[aiProcessor.ts]
    G --> G2[supabaseClient.ts]

    Root[Project Root] --> A
    Root --> Config[Configuration Files]
    
    Config --> Conf1[package.json]
    Config --> Conf2[tailwind.config.ts]
    Config --> Conf3[vite.config.ts]
    Config --> Conf4[tsconfig.json]
```

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ffe72f2e-edfa-4cfa-929e-d0ae51700f64) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Connecting to Supabase

This app is built to connect to Supabase for backend functionality. Here's how to connect your project:

1. Create a Supabase project at [https://supabase.com](https://supabase.com)
2. Create a `changelog` table with the following columns:
   - `id` (auto-incrementing integer, primary key)
   - `title` (text, not null)
   - `content` (text, not null)
   - `category` (text, not null)
   - `release_date` (timestamp with time zone, not null)
   - `released_by` (text, not null)
   - `dev` (text, not null)
   - `lessons_learned` (text)
   - `modified_date` (timestamp with time zone)
   - `created_at` (timestamp with time zone, default: now())

3. Create environment variables:
   - Set `VITE_SUPABASE_URL` to your Supabase project URL
   - Set `VITE_SUPABASE_KEY` to your Supabase anon/public key

Once connected, the app will automatically use your Supabase database instead of the mock data.

## API & Webhook Integration

The app supports webhooks to automatically create changelog entries. The webhook endpoint accepts POST requests with the following JSON structure:

```json
{
  "title": "New Feature Release v2.5.0",
  "content": "**Major improvements in this release:**\n\n- Added new features...",
  "category": "feature",
  "release_date": "2023-08-15T12:00:00Z",
  "released_by": "Release Team",
  "dev": "Dev Team Alpha",
  "lessons_learned": "**Lessons Learned:**\n\n- Cross-platform testing..."
}
```

This can be integrated with your CI/CD pipeline to automatically create changelog entries when releases are made.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ffe72f2e-edfa-4cfa-929e-d0ae51700f64) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

