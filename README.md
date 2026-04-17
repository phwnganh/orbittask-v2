# OrbitTask - Lightweight Task Management for Small Teams
A lightweight task management web app designed to prevent "free-riding" in student teams (3-5 members) by focusing on accountability, visibility, and centralized communication.

1. Live Demo: https://orbittask-v2.vercel.app/
2. Source Code: https://github.com/phwnganh/orbittask-v2.git

## Key Highlights
- Built a product that enforces accountability in small student teams (typically 3-5 members).
- Designed an end-to-end product flow: Authentication -> Project -> Task -> Collaboration.
- Centralized task-based communication to reduce scattered discussions.
- Applied feature-based architecture for scalability and maintainability.
- Used modern frontend practices: React + Zustand + TanStack Query.

**## User Problem

Students working in small teams (typically 3-5 members) often face difficulties when managing group assignments.\
From my experience working in student projects:
- Tasks are assigned informally (via chat), making in unclear who is responsible for what.
- Progress is rarely updated, leading to last-minute rushes before deadlines.
- Communication is fragmented across platforms (Messenger / Zalo), causing loss of context.
- Some members become inactive, but there is no visibility into contribution.\

While tools like Jira provide strong structure, they are too complex for short-term student projects. Meanwhile, Trello offers simplicity but lacks mechanisms to enforce accountability.\

=> Core problem: Small student teams lack a lightweight system that ensures clear ownership, visible progress, and centralized communication.



## Solution
OrbitTask is designed to enforce accountability and clarity while keeping the system lightweight.
1. Clear Ownership
- Each task is assigned to 1 member.
- Responsibility is visible at all times.

2. Progress Visibility
- Task status and deadlines are clearly tracked.
- Overdue tasks are highlighted.

3. Task-based Communication
- Comments are tied directly to tasks.
- Supports replies, tagging, and reactions.

4. Minimal Onboarding
- Users can create projects and invite teammates quickly.
- No complex setup like Jira.

## MVP Scope
The MVP focuses on solving the core accountability and collaboration problems:
1. User authentication (email/password, Google Oauth).
2. Project Management (create, update, delete project).
3. Team collaboration within projects (invite existing users, manage membership, join/leave project).
4. Task Management within projects (create and assign tasks, track task status and deadlines, task filtering).

## Product Roadmap
### Phase 1: Accountability Core
1. Goal: Establish clear ownership and task visibility.
2. Features:
- Authentication system.
- Project and team management.
- Task creation with required assignee.
- Task status tracking.
- Task filtering.
- "My Tasks" view.
3. Outcome: Users know exactly who is responsible for what.

### Phase 2: Task-based Communication
1. Goal: Centralized communication within tasks.
2. Features:
- Comment system (replies, reactions, tagging).
- Attachment support (for design files, reports).
- Edit/delete permissions.
3. Outcome: Reduced fragmented communication and keep discussions within context.

### Phase 3: Workflow & Visibility
1. Goal: Improve transparency without adding complexity
2. Features:
- Activity log (track who made changes to tasks).
- Calendar view for task visualization.
- Notification system.
3. Outcome: Users can easily track progress and changes.

### Phase 4: Insights and Accountability Metrics
1. Goal: Provide visibility into team contribution.
2. Features:
- Task distribution per member.
- Overdue tracking.
- Contribution/activity metrics.
3. Outcome: Teams can identify:
- Bottlenecks.
- Inactive members.
- Workload imbalance.**

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
- Prioritized accountability over feature quantity.
- Avoid complex workflows (e.g., approval system) to maintain simplicity.
- Focused on MVP-first development.
- Designed system to support incremental development across phases.

## Future Improvements
AI-assisted task summaries (to highlight key discussions instead of validating comments).- Improved onboarding experience.
- Real-time updates (WebSocket).
- Smarter notifications.

## What I Learned
- How to translate real user problems -> product decisions.
- Designing systems that enforce user behavior, not just provide features.
- Balancing simplicity vs functionality in product design.
- Structuring scalable frontend architecture.