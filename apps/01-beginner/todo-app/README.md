# Todo App - React

## Testing
1. Unit Testing (Logic in Isolation)
Tool: Vitest + React Testing Library

Unit tests focus on individual "units" of code—usually a single function or a stateless component. They are extremely fast and should make up the bulk of your test suite.

Target: Your TodoItem component or a helper like validateInput().

Test Case: "Does the TodoItem render the correct text and apply the line-through class when isCompleted is true?"

The Goal: Ensure that small pieces of the UI behave correctly regardless of the rest of the app.

2. Integration Testing (Component Interaction)
Tool: Vitest + React Testing Library

This is the "sweet spot" for React. Instead of testing one component, you test a feature (e.g., the TodoList interacting with the AddTaskForm).

Target: The App.tsx or a feature container.

Test Case: 1.  User types "Master Playwright" into the input.
2.  User clicks the "Add Task" button.
3.  Assertion: Check that the input is now empty and the list contains exactly one <li> with the text "Master Playwright."

The Goal: Ensure that state flows correctly between components.


 Test Pyramid with User Interface Tests, Integration Tests and Unit Tests 
3. Snapshot Testing (UI Regression)
Tool: Vitest or Playwright

Snapshot tests take a "picture" of your rendered component's HTML structure (or an actual image) and compare it to a stored version.

Target: Your styled components or layout.

Test Case: "Has the DOM structure of my TodoItem changed since the last time I checked?"

The Goal: Catch accidental UI changes. If you change a div to a span or modify a tailwind class, the test will fail and ask you: "Did you mean to change this?"

4. E2E Automation Testing (The User's Journey)
Tool: Playwright

This is a full automation test. Playwright spins up a real browser (Chromium, Firefox, or WebKit) and interacts with your app like a human would.

Target: The deployed application (or local dev server).

Test Case:

JavaScript
test('user can complete a full workflow', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('.add-task-input', 'Finish UI Design');
  await page.click('.add-task-button');
  await page.click('.checkbox-icon'); // Mark as done
  await expect(page.locator('.task-text')).toHaveCSS('text-decoration', /line-through/);
  await page.click('.delete-icon');
  await expect(page.locator('.task-text')).toHaveCount(0);
});
The Goal: Total confidence. If this test passes, you know the core functionality of your app isn't broken for the end user.

1. Color Palette
Primary Accent: #22C55E (Vibrant Green - used for buttons, active icons)

Secondary/Background: #F0F9FF (Very Light Blue Gradient Start) to #FFFFFF (White - Main Background)

Header/Text: #111827 (Near Black - Title)

Subtle Text/Faded: #6B7280 (Medium Grey - Placeholders, Struck-through Text)

Borders/Lines: #E5E7EB (Light Grey - Task Cards, Input Field, Separator)

2. Typography
Primary Font Family: Inter, sans-serif (A clean, modern sans-serif. Substitute with Roboto or Open Sans if preferred.)

h1.app-title (Header):

font-weight: 700; (Bold)

font-size: 30px;

letter-spacing: -0.025em;

color: #111827;

h2.section-title ("Active Tasks", "Completed"):

font-weight: 600; (Semi-bold)

font-size: 18px;

color: #111827;

text-transform: uppercase; (Optional, good for hierarchy)

p.task-text (Normal Task):

font-weight: 400; (Regular)

font-size: 16px;

color: #111827;

p.task-text.completed (Completed Task):

color: #6B7280;

text-decoration: line-through;

3. Main Input Area
.input-container (Layout Wrapper):

display: flex;

gap: 12px; (Space between input and button)

margin-bottom: 32px;

.add-task-input:

flex-grow: 1;

background-color: #F9FAFB; (Very Light Grey)

border: 1px solid #E5E7EB;

border-radius: 8px;

padding: 12px 16px;

font-size: 16px;

color: #111827;

box-sizing: border-box;

.add-task-button:

background-color: #22C55E; (Accent Green)

border: none;

border-radius: 8px;

color: #FFFFFF;

padding: 12px 24px;

font-weight: 600;

font-size: 16px;

cursor: pointer;

4. Todo List Items (Cards)
.todo-list (Main Container):

display: flex;

flex-direction: column;

gap: 16px;

.todo-item-card:

display: flex;

align-items: center; (Vertically center content)

background-color: #FFFFFF;

border: 1px solid #E5E7EB;

border-radius: 12px;

padding: 16px;

box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); (Subtle shadow)

position: relative;

.checkbox-container (Holding the Checkbox):

margin-right: 16px;

.delete-icon (Trash Can):

position: absolute;

right: 16px;

color: #D1D5DB; (Faded Grey by default)

font-size: 18px;

cursor: pointer;

.completed-separator:

border-top: 2px solid #E5E7EB;

margin: 40px 0 24px 0;