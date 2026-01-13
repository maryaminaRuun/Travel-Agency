# Technical Specifications & Requirements
# All-in-One Travel & Service Platform

## 1. Executive Summary
This specifiction outlines the functional and non-functional requirements for the All-in-One Travel & Service Platform. The system is designed to support 3 distinct user personas (Applicant, Admin, Agent) across 9 core service modules.

## 2. User Roles & Authentication
### 2.1 Applicant (End-User)
- **Registration**: Email/Password.
- **Profile**: Manage personal details, passport info, payment methods.
- **Capabilities**: specific search, booking, payment, and tracking for all services.

### 2.2 Service Agent
- **Role Assignment**: Assigned to specific verticals (e.g., "Visa Agent", "Ticketing Agent").
- **Capabilities**: View queue of requests, update status (Pending -> Processing -> Approved), upload result documents.

### 2.3 Admin/Super-Admin
- **Capabilities**: User management, financial reporting, system configuration content management (CMS).

## 3. Core Modules Functional Requirements

### 3.1 Ticketing Services (Flight)
- **Search**: Origin, Destination, Date, Class, Passengers.
- **Results**: Filter by price, duration, airline.
- **Booking**: Passenger details form, PNR generation (mock).

### 3.2 Visa Services
- **Country Selection**: Database of visa requirements per country.
- **Document Upload**: Passport scan, photo, bank statement.
- **Tracking**: Real-time status timeline.

### 3.3 Tour Packages
- **Listing**: Grid view of packages with rich media.
- **Customization**: Ability to add/remove days or amenities.

### 3.4 Cargo Services
- **Quotation**: Weight, Dimensions, Origin, Destination -> Estimated Cost.
- **Tracking**: AWB (Air Waybill) number tracking.

### 3.5 Hotel & Real Estate
- **Search & Filter**: Location, Price Range, Amenities.
- **Viewing**: Gallery view, Map view (placeholder).

## 4. Technical Architecture
- **Frontend**: Next.js 15 (App Router), React Server Components.
- **Styling**: CSS Modules with Glassmorphism Design System.
- **State Management**: React Hooks.
- **Database**: PostgreSQL (Planned).

## 5. UI/UX Guidelines
- **Theme**: "Future of Travel" - Premium, Glassmorphism, Vibrant Blues/Oranges.
- **Responsiveness**: Mobile-first design for all modules.
- **Accessibility**: WCAG 2.1 AA compliance.
