export type ComponentProp = { name: string; type: string; description: string; required?: boolean };

export type ComponentExample = { title: string; code: string };

export type ComponentMeta = {
  name: string;
  slug: string;
  description: string;
  importFrom: string;
  importNamed: string[];
  props: ComponentProp[];
  a11y: string[];
  dos: string[];
  donts: string[];
  examples: ComponentExample[];
};

export const componentsCatalog: ComponentMeta[] = [
  {
    "name": "Accordion",
    "slug": "accordion",
    "description": "Vertically stacked sections that reveal content.",
    "importFrom": "@org/ui/accordion",
    "importNamed": [
      "Accordion",
      "AccordionItem",
      "AccordionTrigger",
      "AccordionContent"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Accordion when it matches the intent: vertically stacked sections that reveal content."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from \"@org/ui/accordion\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Accordion />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Alert Dialog",
    "slug": "alert-dialog",
    "description": "Modal dialog that interrupts with important content.",
    "importFrom": "@org/ui/alert-dialog",
    "importNamed": [
      "AlertDialog",
      "AlertDialogTrigger",
      "AlertDialogContent",
      "AlertDialogHeader",
      "AlertDialogFooter"
    ],
    "props": [
      {
        "name": "open",
        "type": "boolean",
        "description": "Controlled open state (optional)."
      }
    ],
    "a11y": [
      "Focus moves into the overlay and returns to trigger on close.",
      "Trigger must have an accessible name."
    ],
    "dos": [
      "Use Alert Dialog when it matches the intent: modal dialog that interrupts with important content."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter } from \"@org/ui/alert-dialog\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <AlertDialog />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Aspect Ratio",
    "slug": "aspect-ratio",
    "description": "Displays content within a desired ratio.",
    "importFrom": "@org/ui/aspect-ratio",
    "importNamed": [
      "AspectRatio"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Aspect Ratio when it matches the intent: displays content within a desired ratio."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { AspectRatio } from \"@org/ui/aspect-ratio\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <AspectRatio />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Avatar",
    "slug": "avatar",
    "description": "Image element with fallback for representing the user.",
    "importFrom": "@org/ui/avatar",
    "importNamed": [
      "Avatar",
      "AvatarImage",
      "AvatarFallback"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Avatar when it matches the intent: image element with fallback for representing the user."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Avatar, AvatarImage, AvatarFallback } from \"@org/ui/avatar\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Avatar />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Button",
    "slug": "button",
    "description": "Triggers an action.",
    "importFrom": "@org/ui/button",
    "importNamed": [
      "Button"
    ],
    "props": [
      {
        "name": "variant",
        "type": "\"default\" | \"secondary\" | \"outline\" | \"ghost\" | \"destructive\"",
        "description": "Visual style."
      },
      {
        "name": "size",
        "type": "\"sm\" | \"md\" | \"lg\" | \"icon\"",
        "description": "Size."
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "Disables interaction."
      }
    ],
    "a11y": [
      "Use verb-first labels.",
      "If icon-only, include aria-label."
    ],
    "dos": [
      "Use Button when it matches the intent: triggers an action."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Button } from \"@org/ui/button\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Button />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Checkbox",
    "slug": "checkbox",
    "description": "Toggle control for checked / not checked.",
    "importFrom": "@org/ui/checkbox",
    "importNamed": [
      "Checkbox"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Checkbox when it matches the intent: toggle control for checked / not checked."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Checkbox } from \"@org/ui/checkbox\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Checkbox />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Collapsible",
    "slug": "collapsible",
    "description": "Expandable section that can show/hide content.",
    "importFrom": "@org/ui/collapsible",
    "importNamed": [
      "Collapsible",
      "CollapsibleTrigger",
      "CollapsibleContent"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Collapsible when it matches the intent: expandable section that can show/hide content."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Collapsible, CollapsibleTrigger, CollapsibleContent } from \"@org/ui/collapsible\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Collapsible />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Command",
    "slug": "command",
    "description": "Command menu for quick actions.",
    "importFrom": "@org/ui/command",
    "importNamed": [
      "Command",
      "CommandInput",
      "CommandList",
      "CommandItem"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Command when it matches the intent: command menu for quick actions."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Command, CommandInput, CommandList, CommandItem } from \"@org/ui/command\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Command />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Context Menu",
    "slug": "context-menu",
    "description": "Menu triggered by right click or button.",
    "importFrom": "@org/ui/context-menu",
    "importNamed": [
      "ContextMenu",
      "ContextMenuTrigger",
      "ContextMenuContent",
      "ContextMenuItem"
    ],
    "props": [
      {
        "name": "open",
        "type": "boolean",
        "description": "Controlled open state (optional)."
      }
    ],
    "a11y": [
      "Focus moves into the overlay and returns to trigger on close.",
      "Trigger must have an accessible name."
    ],
    "dos": [
      "Use Context Menu when it matches the intent: menu triggered by right click or button."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from \"@org/ui/context-menu\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <ContextMenu />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Dialog",
    "slug": "dialog",
    "description": "Modal dialog container.",
    "importFrom": "@org/ui/dialog",
    "importNamed": [
      "Dialog",
      "DialogTrigger",
      "DialogContent",
      "DialogHeader",
      "DialogFooter"
    ],
    "props": [
      {
        "name": "open",
        "type": "boolean",
        "description": "Controlled open state (optional)."
      }
    ],
    "a11y": [
      "Focus moves into the overlay and returns to trigger on close.",
      "Trigger must have an accessible name."
    ],
    "dos": [
      "Use Dialog when it matches the intent: modal dialog container."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from \"@org/ui/dialog\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Dialog />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Dropdown Menu",
    "slug": "dropdown-menu",
    "description": "Menu triggered by a button.",
    "importFrom": "@org/ui/dropdown-menu",
    "importNamed": [
      "DropdownMenu",
      "DropdownMenuTrigger",
      "DropdownMenuContent",
      "DropdownMenuItem"
    ],
    "props": [
      {
        "name": "open",
        "type": "boolean",
        "description": "Controlled open state (optional)."
      }
    ],
    "a11y": [
      "Focus moves into the overlay and returns to trigger on close.",
      "Trigger must have an accessible name."
    ],
    "dos": [
      "Use Dropdown Menu when it matches the intent: menu triggered by a button."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from \"@org/ui/dropdown-menu\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <DropdownMenu />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Hover Card",
    "slug": "hover-card",
    "description": "Preview content behind a link on hover/focus.",
    "importFrom": "@org/ui/hover-card",
    "importNamed": [
      "HoverCard",
      "HoverCardTrigger",
      "HoverCardContent"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Hover Card when it matches the intent: preview content behind a link on hover/focus."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { HoverCard, HoverCardTrigger, HoverCardContent } from \"@org/ui/hover-card\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <HoverCard />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Input",
    "slug": "input",
    "description": "Text input field.",
    "importFrom": "@org/ui/input",
    "importNamed": [
      "Input"
    ],
    "props": [
      {
        "name": "placeholder",
        "type": "string",
        "description": "Hint text."
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "Disables input."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Controlled value (optional)."
      }
    ],
    "a11y": [
      "Always pair with <Label>.",
      "Provide helpful error text and programmatic association."
    ],
    "dos": [
      "Use Input when it matches the intent: text input field."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Input } from \"@org/ui/input\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Input />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Label",
    "slug": "label",
    "description": "Accessible label associated with controls.",
    "importFrom": "@org/ui/label",
    "importNamed": [
      "Label"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Label when it matches the intent: accessible label associated with controls."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Label } from \"@org/ui/label\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Label />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Menubar",
    "slug": "menubar",
    "description": "Persistent application-style menu bar.",
    "importFrom": "@org/ui/menubar",
    "importNamed": [
      "Menubar",
      "MenubarMenu",
      "MenubarTrigger",
      "MenubarContent",
      "MenubarItem"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Menubar when it matches the intent: persistent application-style menu bar."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from \"@org/ui/menubar\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Menubar />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Navigation Menu",
    "slug": "navigation-menu",
    "description": "Collection of links for navigating websites.",
    "importFrom": "@org/ui/navigation-menu",
    "importNamed": [
      "NavigationMenu",
      "NavigationMenuList",
      "NavigationMenuItem",
      "NavigationMenuLink"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Navigation Menu when it matches the intent: collection of links for navigating websites."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from \"@org/ui/navigation-menu\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <NavigationMenu />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Popover",
    "slug": "popover",
    "description": "Rich content in a portal triggered by a button.",
    "importFrom": "@org/ui/popover",
    "importNamed": [
      "Popover",
      "PopoverTrigger",
      "PopoverContent"
    ],
    "props": [
      {
        "name": "open",
        "type": "boolean",
        "description": "Controlled open state (optional)."
      }
    ],
    "a11y": [
      "Focus moves into the overlay and returns to trigger on close.",
      "Trigger must have an accessible name."
    ],
    "dos": [
      "Use Popover when it matches the intent: rich content in a portal triggered by a button."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Popover, PopoverTrigger, PopoverContent } from \"@org/ui/popover\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Popover />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Progress",
    "slug": "progress",
    "description": "Progress bar indicator.",
    "importFrom": "@org/ui/progress",
    "importNamed": [
      "Progress"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Progress when it matches the intent: progress bar indicator."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Progress } from \"@org/ui/progress\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Progress />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Radio Group",
    "slug": "radio-group",
    "description": "Set of radio buttons with single selection.",
    "importFrom": "@org/ui/radio-group",
    "importNamed": [
      "RadioGroup",
      "RadioGroupItem"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Radio Group when it matches the intent: set of radio buttons with single selection."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { RadioGroup, RadioGroupItem } from \"@org/ui/radio-group\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <RadioGroup />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Scroll Area",
    "slug": "scroll-area",
    "description": "Scrollable area with styled scrollbars.",
    "importFrom": "@org/ui/scroll-area",
    "importNamed": [
      "ScrollArea"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Scroll Area when it matches the intent: scrollable area with styled scrollbars."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { ScrollArea } from \"@org/ui/scroll-area\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <ScrollArea />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Select",
    "slug": "select",
    "description": "Dropdown selection control.",
    "importFrom": "@org/ui/select",
    "importNamed": [
      "Select",
      "SelectTrigger",
      "SelectContent",
      "SelectItem",
      "SelectValue"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Select when it matches the intent: dropdown selection control."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from \"@org/ui/select\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Select />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Separator",
    "slug": "separator",
    "description": "Visually or semantically separates content.",
    "importFrom": "@org/ui/separator",
    "importNamed": [
      "Separator"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Separator when it matches the intent: visually or semantically separates content."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Separator } from \"@org/ui/separator\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Separator />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Slider",
    "slug": "slider",
    "description": "Select a value from within a given range.",
    "importFrom": "@org/ui/slider",
    "importNamed": [
      "Slider"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Slider when it matches the intent: select a value from within a given range."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Slider } from \"@org/ui/slider\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Slider />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Switch",
    "slug": "switch",
    "description": "Toggle between checked and not checked.",
    "importFrom": "@org/ui/switch",
    "importNamed": [
      "Switch"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Switch when it matches the intent: toggle between checked and not checked."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Switch } from \"@org/ui/switch\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Switch />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Tabs",
    "slug": "tabs",
    "description": "Layered sections displayed one at a time.",
    "importFrom": "@org/ui/tabs",
    "importNamed": [
      "Tabs",
      "TabsList",
      "TabsTrigger",
      "TabsContent"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Tabs when it matches the intent: layered sections displayed one at a time."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Tabs, TabsList, TabsTrigger, TabsContent } from \"@org/ui/tabs\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Tabs />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Textarea",
    "slug": "textarea",
    "description": "Multi-line text input.",
    "importFrom": "@org/ui/textarea",
    "importNamed": [
      "Textarea"
    ],
    "props": [
      {
        "name": "placeholder",
        "type": "string",
        "description": "Hint text."
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "Disables input."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Controlled value (optional)."
      }
    ],
    "a11y": [
      "Always pair with <Label>.",
      "Provide helpful error text and programmatic association."
    ],
    "dos": [
      "Use Textarea when it matches the intent: multi-line text input."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Textarea } from \"@org/ui/textarea\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Textarea />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Tooltip",
    "slug": "tooltip",
    "description": "Popup with info on hover/focus.",
    "importFrom": "@org/ui/tooltip",
    "importNamed": [
      "Tooltip",
      "TooltipTrigger",
      "TooltipContent"
    ],
    "props": [
      {
        "name": "open",
        "type": "boolean",
        "description": "Controlled open state (optional)."
      }
    ],
    "a11y": [
      "Focus moves into the overlay and returns to trigger on close.",
      "Trigger must have an accessible name."
    ],
    "dos": [
      "Use Tooltip when it matches the intent: popup with info on hover/focus."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Tooltip, TooltipTrigger, TooltipContent } from \"@org/ui/tooltip\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Tooltip />\n    </div>\n  );\n}\n"
      }
    ]
  },
  {
    "name": "Card",
    "slug": "card",
    "description": "A container for related content.",
    "importFrom": "@org/ui/card",
    "importNamed": [
      "Card",
      "CardHeader",
      "CardContent",
      "CardFooter"
    ],
    "props": [
      {
        "name": "className",
        "type": "string",
        "description": "Optional layout/spacing classes (restricted)."
      }
    ],
    "a11y": [
      "Ensure keyboard access and visible focus.",
      "Provide accessible names for icon-only triggers."
    ],
    "dos": [
      "Use Card when it matches the intent: a container for related content."
    ],
    "donts": [
      "Don\u2019t create one-off variants outside the system."
    ],
    "examples": [
      {
        "title": "Basic example",
        "code": "import { Card, CardHeader, CardContent, CardFooter } from \"@org/ui/card\";\n\nexport function Example() {\n  return (\n    <div>\n      {/* TODO: replace with your real usage */}\n      <Card />\n    </div>\n  );\n}\n"
      }
    ]
  }
];
