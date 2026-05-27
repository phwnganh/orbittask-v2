# OrbitTask - Lightweight Task Management for Small Teams
A lightweight task management web app designed to reduce "free-riding" in student teams (typically 3-5 members) by improving accountability, task visibility, and centralized communication.

1. Live Demo: https://orbittask-v2.vercel.app/
2. Source Code: https://github.com/phwnganh/orbittask-v2.git

## Key Highlights
- Built a product focused on accountability in small student teams.
- Designed an end-to-end product flow: Authentication -> Project -> Task -> Collaboration.
- Centralized task-based communication to reduce fragmented discussions across chat platforms.
- Applied feature-based FE architecture for scalability and maintainability.
- Used modern frontend practices: React + Zustand + TanStack Query.
- Focused on MVP-first product development instead of feature-heavy project management.

**## User Problem

Students working in small teams (typically 3-5 members) often struggle to coordinate group assignments effectively.\
From my experience working on student projects, several recurring problems appear:
- Tasks are assigned informally through chat, making ownership unclear.
- Team leaders often need to manually follow up because progress is not updated consistently.
- Communication is fragmented across platforms (Messenger / Zalo), causing important context to be lost.
- Some members become inactive, but contribution visibility is limited until deadlines are close.
- Workload distribution becomes uneven, leading to frustration and last-minute rushes.\

Existing tools do not fully fit this environment:\
- Jira provides strong structure but feels too complex for short-term student projects.
- Trello is simple and easy to use, but it lacks mechanisms that encourage accountability and progress visibility.\

=> Core problem: Small student teams lack a lightweight collaboration that provides clear ownership, visible progress tracking, centralized communication, and better accountability within the team.



## Solution
OrbitTask is designed to improve accountability and collaboration while keeping the experience lightweight and easy to adopt.
1. Clear Ownership
- Each task is assigned to a single member.
- Responsibility remains visible throughout the project lifecycle.
- Teams can quickly identify who is responsible for each deliverable.

2. Progress Visibility
- Task status and deadlines are clearly tracked.
- Overdue tasks are highlighted.
- Team members can monitor project progress without repeatedly asking for updates.

3. Task-based Communication
- Discussions are attached directly to tasks.
- Supports replies, tagging, and reactions.
- Reduces fragmented communication across external messaging platforms.

4. Lightweight Collaboration
- Users can quickly create projects and invite teammates.
- Minimal onboarding without complex configuration.
- Designed specifically for short-term academic collaboration.

## MVP Scope
The MVP focuses on solving the core accountability and collaboration problems:
1. User authentication (email/password, Google Oauth).
2. Project Management:\
  - Create, update, and delete projects.
  - Invite and manage project members.
  - Join and leave projects functionality.\
3. Task Management within projects:\
  - Create and assign tasks.
  - Track task status and deadlines.
  - Filter tasks by status and assignee.
  - "My Tasks" view for personal accountability.\
4. Collaboration:\
  - Task-based comments.
  - Replies and reactions.
  - Centralized discussion flow.\
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
3. Outcome: Team members know exactly who is responsible for what.

### Phase 2: Task-based Communication
1. Goal: Centralized communication within project tasks.
2. Features:
- Comment system.
- Replies, reactions, and tagging.
- Attachment support (for design files, reports).
- Edit/delete permissions.
3. Outcome: Reduced fragmented communication and preserved discussion context.

### Phase 3: Workflow & Visibility
1. Goal: Improve transparency without introducing enterprise-level complexity.
2. Features:
- Activity log (track who made changes to tasks).
- Calendar view for task visualization.
- Notification system.
3. Outcome: Teams can easily track project changes and deadlines more effectively.

### Phase 4: Accountability Insights
1. Goal: Provide lightweight visibility into team contribution and workload balance.
2. Features:
- Task distribution per member.
- Overdue tracking.
- Contribution/activity insights.
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
The application follows a feature-based architecture to improve scalability and maintainability.\
Instead of organizing code by technical type (components, hooks, services), the project is structured around business features, where each feature encapsulates its own logic, UI, and data handling.\
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
- Cleaner state management between server state and UI state.
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
- Thinking beyond CRUD features toward product usability and collaboration workflows.
