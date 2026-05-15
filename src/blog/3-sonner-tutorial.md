---
title: "Using Sonner to add notification on React App"
thumbnail: "/blog-portfolio.png"
date: "Nov 28 2025"
---

The most popular and modern approach is using **react-hot-toast** or **sonner** — both are lightweight and integrate cleanly with Inertia's flash messages. Here's how to do it with **sonner** (the newer, more elegant option used by shadcn/ui):

## Setup with Sonner + Laravel Inertia React

### 1. Install Sonner

```bash
npm install sonner
```

### 2. Flash the message in your Laravel Controller

```php
return redirect()->route('posts.index')
    ->with('success', 'Post created successfully!');
```

### 3. Share flash messages via Inertia (HandleInertiaRequests.php)

```php
// app/Http/Middleware/HandleInertiaRequests.php
public function share(Request $request): array
{
    return [
        ...parent::share($request),
        'flash' => [
            'success' => $request->session()->get('success'),
            'error'   => $request->session()->get('error'),
        ],
    ];
}
```

### 4. Add the Toaster to your root layout

```jsx
// resources/js/Layouts/AppLayout.jsx
import { Toaster } from 'sonner';

export default function AppLayout({ children }) {
    return (
        <>
            {children}
            <Toaster position="top-right" richColors />
        </>
    );
}
```

### 5. Create a reusable hook to trigger toasts on page load

```jsx
// resources/js/hooks/useFlash.js
import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { toast } from 'sonner';

export function useFlash() {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) toast.success(flash.success);
        if (flash.error)   toast.error(flash.error);
    }, [flash]);
}
```

### 6. Use the hook in your pages or layout

```jsx
// In any page component, or better — in your AppLayout
import { useFlash } from '@/hooks/useFlash';

export default function AppLayout({ children }) {
    useFlash(); // ← fires on every page visit

    return (
        <>
            {children}
            <Toaster position="top-right" richColors />
        </>
    );
}
```

If you're already using **shadcn/ui**, sonner is already the recommended pairing. For **react-hot-toast**, the approach is identical — just swap `Toaster`/`toast` imports from `react-hot-toast`. The key insight is placing `useFlash()` in your **layout**, not individual pages — that way every redirect with a flash message automatically shows the toast without any per-page wiring.
