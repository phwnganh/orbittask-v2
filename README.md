# OrbitTask - Lightweight Task Management for Small Teams
A lightweight task management web app designed for students and small teams, focusing on simplicity, controlled collaboration, and essential workflows only.

1. Live Demo:
2. Source Code:

## Key Highlights
- Designed and built a full product flow: Authentication -> Project -> Collaboration -> Task Management.
- Applied feature-based architecture for scalability and maintainability.
- Focused on solving real problems of student teams (complex tools and lack of control).
- Implemented collaboration features: invitation flow, task discussion, attachments.

## User Problem

Students and small teams often struggle with existing task management tools:
- Tools like Jira are too complex and heavy.
- Tools like Trello are too limited without paid features.
- Collaboration control (who can do what) is often unclear or restricted.

From my experience working in small teams, these tools either create friction in setup or lack essential collaboration features, making project management inefficient.

** There is a need for a simple, accessible, and structured solution tailored for small teams. **



## Solution
OrbitTask simplifies task management by focusing on:
- Minimal setup: users can start collaborating in seconds.
- Controlled collaboration: invitation and approval flow for better project control.
- Essential features only: no clutter, no paywall basics.

** The goal is to balance simplicity (like Trello) and structure (like Jira).

## MVP Scope
The MVP focuses on delivering core functionalities to support end-to-end project and task management:
1. User authentication (email/password, Google Oauth).
2. Project Management (create, update, delete project).
3. Team collaboration within projects (invite existing users, manage membership, join/leave project).
4. Task Management within projects (create, update, and track task status).

## Product Roadmap
### Phase 1: Core Collaboration
1. Goal: Enable users to access the system and collaborate on projects.
2. Features:
- Authentication system.
- Project and team management.
- Task creation and status tracking.
- Task filtering and organization.
3. Outcome: Users can fully manage projects and collaborate efficiently.

### Phase 2: Task Collaboration
1. Goal: Improve communication within tasks.
2. Features:
- Comment system (replies, reactions, edit permissions).
- Attachment handling (upload/delete, limit 5 per task).
- Label management.
3. Outcome: Enhance feedback loops between team members.

### Phase 3: Workflow & Visibility
1. Goal: Improve control and task visibility
2. Features:
- Task update request workflow (approval-based editing).
- Calendar view for task visualization.
- Notification system.
3. Outcome: Better tracking and collaboration control.

### Phase 4: Analytics & Insights Dashboard
1. Goal: Provide data-driven insights.
2. Features:
- Task distribution by status.
- Project progress tracking.
- Member performance metrics.
3. Outcome: Support better decision-making for project owners.

## System Design
### Tech Stack
- Frontend: React, Typescript, TailwindCSS.
- State: Zustand (client state), Tanstack Query (server state).
- Backend: Supabase (Auth, Postgres, Storage, Row Level Security).
### Frontend Structure
The project follows a feature-based architecture to improve scalability and maintainability.\
Instead of organizing code by technical type (components, hooks, services), the app is structured by business features, where each feature encapsulates its own logic, UI, and data handling.\
Structure:
1. assets/: static resources
2. features/: core business logic (auth, project, task, etc)
3. layouts/: shared layout structures
4. pages/: route-level components
5. routes/: centralized routing configuration
6. shared/: reusable components, hooks, utilities

### Data Flow
API (Supabase) -> Tanstack Query -> UI Rendering -> Zustand (if needed) -> UI Update

** This separation ensures:
- Better performance (caching & reduced re-fetching).
- Cleaner state management.
- Predictable data flow.

### Authentication
Supabase Authentication is used to handle:
- User login/signup (Email & Google Oauth).
- JWT-based session management.\
** This reduces backend complexity while ensuring secure authentication flow. **

### Design Trade-offs
- Choose Supabase to speed up development -> trade-off: less backend control.
- Used Zustand instead of Redux -> trade-off: simpler API, less boilerplate, suitable for MVP.
- Adopted Tanstack Query for better server-state handling than manual fetch logic.


## Design Decisions
- Prioritized authentication as the foundation for all user flows.
- Adopted feature-based architecture to support scalability and code organization.
- Focused on MVP-first development before adding advanced features.
- Designed system to support incremental development across phases.

## Future Improvements
- Role-based access control (RBAC) -> support more complex team structures.
- Refresh token & session management -> enhance security.
- Real-time updates (WebSocket) -> improve collaboration responsiveness.
- Notifications system -> improve user engagement.

## What I Learned
- How to design a product from problem -> solution -> roadmap.
- Structuring a scalable frontend with feature-based architecture.
- Balancing simplicity vs functionality in product design.
- Thinking beyond coding: user experience and collaboration flow.