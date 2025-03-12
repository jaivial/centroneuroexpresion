# UX/UI Guide: Centro de Intervención Temprana

## Design Philosophy
This early intervention center website embraces a **modern, cute, and approachable design** that prioritizes mobile users while maintaining full functionality across all devices. The design should convey professionalism and trust while feeling warm, inviting, and child-friendly.

## Mobile-First Approach
All design decisions should start with the mobile experience and then expand to larger screens:
- Design for smallest screens first (320px width)
- Use progressive enhancement for larger screens
- Test on actual mobile devices throughout development
- Ensure touch targets are at least 44×44px
- Minimize load times for mobile networks

## UI Color Palette

### Primary Colors
- **Soft Sky Blue** `#75C2F6` - Main brand color, conveys trust and tranquility
- **Sunshine Yellow** `#FFD166` - Warm, cheerful accent for CTAs and highlights
- **Coral Pink** `#FF8C8C` - Playful accent for secondary elements

### Secondary Colors
- **Mint Green** `#A6E3B7` - Fresh, calming secondary color
- **Lavender** `#D9C6FF` - Gentle accent for variety

### Neutral Colors
- **Off-White** `#F9F7F3` - Background color
- **Light Gray** `#E8E8E8` - Subtle separators and backgrounds
- **Medium Gray** `#9A9A9A` - Secondary text
- **Charcoal** `#3D3D3D` - Primary text

### Functional Colors
- **Success Green** `#4CAF50` - Confirmations and success messages
- **Alert Orange** `#FF9800` - Warnings and important notices
- **Error Red** `#F44336` - Error messages

### Color Usage Guidelines
- Maintain WCAG 2.1 AA contrast ratio (minimum 4.5:1 for normal text)
- Use color combinations that are accessible to colorblind users
- Limit to 2-3 primary colors per page section
- Use neutrals for large areas and text
- Reserve bright colors for small accents and important elements

## Typography

### Font Choices
- **Headings**: 'Quicksand', sans-serif (rounded, friendly, modern)
- **Body**: 'Nunito', sans-serif (highly readable with slight roundness)
- **Accents/Labels**: 'Varela Round', sans-serif (playful, rounded)

### Font Sizes (Mobile)
- **Body Text**: 16px (1rem)
- **H1**: 28px (1.75rem)
- **H2**: 24px (1.5rem)
- **H3**: 20px (1.25rem)
- **Small/Caption**: 14px (0.875rem)

### Font Sizes (Desktop)
- **Body Text**: 18px (1.125rem)
- **H1**: 36px (2.25rem)
- **H2**: 30px (1.875rem)
- **H3**: 24px (1.5rem)
- **Small/Caption**: 14px (0.875rem)

### Typography Guidelines
- Use proper hierarchy with clear visual distinction between levels
- Maintain line height of 1.5 for body text
- Keep line length between 45-75 characters
- Use bold for emphasis rather than italics or underlines
- Ensure all text is selectable and accessible

## UI Elements

### Buttons
- **Primary Button**: Rounded corners (20px radius), Sunshine Yellow background, dark text
- **Secondary Button**: Rounded corners (20px radius), transparent with border, primary color text
- **Tertiary Button**: Text-only with subtle hover effect
- All buttons should have visible hover, focus, and active states
- Minimum touch target size: 44×44px

### Cards
- Soft shadows (0 4px 8px rgba(0,0,0,0.1))
- Rounded corners (16px radius)
- White background with subtle border or shadow
- Consistent padding (16px on mobile, 24px on desktop)
- Optional decorative elements (dots, squiggles, etc.)

### Icons
- Use rounded, friendly icons with consistent style
- Minimum size 24×24px on mobile
- Include text labels with icons when possible
- Use animation sparingly for delight (e.g., hover states)

### Form Elements
- Input fields with rounded corners (12px radius)
- Clear focus states with blue outline
- Floating labels or top-aligned labels
- Inline validation with helpful error messages
- Toggle switches instead of checkboxes where appropriate

### Images
- Use warm, friendly imagery of children and families
- Apply subtle rounded corners to all images (8px radius)
- Optimize all images for web (WebP format with fallbacks)
- Use SVG for illustrations and icons when possible
- Include meaningful alt text for all images

## Animation & Microinteractions

### Principles
- Subtle, quick, and purposeful
- Enhance rather than distract from content
- Provide visual feedback for user actions
- Use consistent timing and easing

### Specific Animations
- **Button Hover**: Slight scale increase (1.05) and shadow enhancement
- **Page Transitions**: Subtle fade or slide transitions between pages
- **Loading States**: Playful, branded loading animations
- **Scroll Effects**: Gentle reveal animations as content enters viewport
- **Microinteractions**: Small animations for form submissions, menu toggles, etc.

## Layout & Spacing

### Grid System
- Use a 4px base unit for all spacing
- 4-column grid on mobile
- 8-column grid on tablet
- 12-column grid on desktop
- Consistent gutters (16px on mobile, 24px on desktop)

### Spacing Scale
- **XS**: 4px (0.25rem)
- **S**: 8px (0.5rem)
- **M**: 16px (1rem)
- **L**: 24px (1.5rem)
- **XL**: 32px (2rem)
- **XXL**: 48px (3rem)
- **XXXL**: 64px (4rem)

### Content Containers
- Max width of 1200px for main content
- Consistent padding on containers (16px on mobile, 24px on tablet, 32px on desktop)
- Use white space strategically to create visual hierarchy

## Navigation & Information Architecture

### Mobile Navigation
- Bottom navigation bar for primary actions
- Hamburger menu for secondary navigation
- Sticky header with logo and essential actions
- Back button for nested pages
- Breadcrumbs for complex hierarchies

### Desktop Navigation
- Horizontal main navigation
- Dropdown menus for sections with many pages
- Consistent placement of utility navigation (language selector, search)
- Clear visual indication of current page

### Content Hierarchy
- One primary action per screen
- Group related information
- Progressive disclosure for complex information
- Clear visual hierarchy with headings, subheadings, and body text

## Accessibility Guidelines

### Requirements
- WCAG 2.1 AA compliance minimum
- Keyboard navigable interface
- Screen reader friendly content
- Sufficient color contrast
- Text resizing without breaking layout
- Alternative text for all non-decorative images

### Implementation
- Use semantic HTML elements
- Implement proper ARIA attributes when needed
- Test with screen readers and keyboard navigation
- Provide visible focus states for all interactive elements
- Support reduced motion preferences

## Child-Friendly Design Elements

### Decorative Elements
- Soft, rounded shapes as decorative elements
- Playful but subtle patterns for section backgrounds
- Gentle curved dividers between sections
- Hand-drawn style illustrations

### Playful Components
- Custom bullet points (stars, circles, etc.)
- Animated illustrations for key concepts
- Interactive elements that respond to touch/hover
- Achievement indicators for interactive tools

## Responsive Behavior Guidelines

### Mobile (320px - 640px)
- Single column layouts
- Full-width components
- Larger touch targets
- Simplified navigation
- Critical content first

### Tablet (641px - 1024px)
- Two-column layouts where appropriate
- Side navigation for deeper pages
- Expanded content areas
- Enhanced visual elements

### Desktop (1025px+)
- Multi-column layouts
- Horizontal navigation
- Expanded visual elements
- Hover states
- Sidebar content

## Design System Components

### Core Components
- Header
- Footer
- Navigation (Mobile & Desktop)
- Buttons (Primary, Secondary, Tertiary)
- Cards (Service, Team, Testimonial)
- Form Elements
- Modals/Dialogs
- Alerts/Notifications
- Accordion/FAQ
- Tabs
- Pagination
- Breadcrumbs
- Hero Sections
- Testimonial Carousel
- Image Gallery
- Progress Indicators
- Calendar/Scheduling Widget

### Design Assets
- Logo in multiple formats (SVG preferred)
- Icon library (consistent style)
- Illustration system
- Photography style guide
- Animation library
- UI Kit for designers

## Implementation Notes
- Use Tailwind CSS for consistent implementation of design system
- Leverage CSS variables for theming
- Implement responsive images with srcset
- Use Intersection Observer for scroll animations
- Test on actual devices, not just emulators
- Optimize for Core Web Vitals 