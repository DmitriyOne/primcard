## FSD: Feature Sliced Design — Developer Briefing

Feature Sliced Design (FSD) is an architectural methodology for front-end applications where the product is divided into **independent, self-sufficient components** — "slices." Each slice is developed independently, ensuring **high modularity, flexibility, and scalability** of the project.

---

### Key Benefits and Goals

- **Isolation of Errors and Changes:** Modifying code in one "slice" has minimal impact on others, reducing the risk of regressions.
- **Clear Separation of Concerns:** Every module/directory has a strictly defined role, simplifying onboarding and navigation.
- **Scalability:** Suitable for large teams and long-term projects, allowing parallel work on different features without conflict.
- **Encapsulation:** The internal logic of a feature is hidden, enabling easy changes to its implementation without affecting its consumers.

---

### Clarification of Abstraction Levels (Layers)

The directory structure represents the FSD layers, which dictate the direction of dependencies (the **"Top-to-Bottom"** rule).

| Layer                | Purpose                                                                                                                               | Dependencies                                                |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------- |
| **src/01_app/**      | **Application Initialization** (Root components, routing, global providers).                                                          | Depends on all layers below.                                |
| **src/02_pages/**    | **Pages** (Composition of widgets and features to form the view of an entire page).                                                   | Depends on `widgets/`, `features/`, `entities/`, `shared/`. |
| **src/03_widgets/**  | **Independent and Self-contained Blocks** (Large UI blocks that can appear on different pages, e.g., Header, Sidebar, Shopping Cart). | Depends on `features/`, `entities/`, `shared/`.             |
| **src/04_features/** | **User Scenario Processing** (Business logic that the user can initiate: "Sign In," "Place Order," "Submit Form").                    | Depends on `entities/`, `shared/`.                          |
| **src/05_entities/** | **Business Entities and Domain Logic** (Description of the subject area: "User," "Product," "Order").                                 | Depends **only** on `shared/`.                              |
| **src/06_shared/**   | **Reusable Modules** (Low-level, non-business-specific: UI components, utilities, common types, API clients).                         | Has **No Dependencies** on other FSD layers.                |

---

### Strict Dependency Rule

**The Main FSD Rule:** Dependencies can **only** be directed **Top-to-Bottom** (from a higher level of abstraction to a lower one).

- ✅ `pages` can import from `features`.
- ❌ `features` **cannot** import from `pages` or `widgets`.
- ✅ `entities` can import from `shared`.

Adhering to this rule ensures that the lower levels remain reusable and are not dependent on the specific context of their usage.
