# Salekin's Design System

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Installation

To install the design system, run:

```bash
npm install salekin-design-system
```

## Usage

### Button

```tsx
import React from 'react';
import { Button } from 'salekin-design-system';

const App = () => (
  <Button variant="outlined">Click Me</Button>
);

export default App;
```

### Input

```tsx
import React from 'react';
import { Input } from 'salekin-design-system';

const App = () => (
  <Input type="text" placeholder="Enter text" variant="filled" />
);

export default App;
```

### Card

```tsx
import React from 'react';
import { Card, Button } from 'salekin-design-system';

const App = () => (
  <Card body="Card Body" footerItems={[<Button key="1">Footer Button</Button>]} />
);

export default App;
```
