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
    name: "Button",
    slug: "button",
    description: "Triggers an action.",
    importFrom: "@org/ui/button",
    importNamed: ["Button"],
    props: [
      { name: "variant", type: `"default" | "secondary" | "outline" | "ghost" | "destructive"`, description: "Visual style." },
      { name: "size", type: `"sm" | "md" | "lg" | "icon"`, description: "Size." },
      { name: "disabled", type: "boolean", description: "Disables interaction." }
    ],
    a11y: ["Use verb-first labels.", "If icon-only, include aria-label."],
    dos: ["Use primary for the main action on a screen."],
    donts: ["Don’t use destructive for non-destructive actions."],
    examples: [
      {
        title: "Primary action",
        code: `import { Button } from "@org/ui/button";

export function Example() {
  return <Button variant="default">Save changes</Button>;
}
`
      }
    ]
  },
  {
    name: "Card",
    slug: "card",
    description: "A container for related content.",
    importFrom: "@org/ui/card",
    importNamed: ["Card", "CardHeader", "CardContent", "CardFooter"],
    props: [
      { name: "className", type: "string", description: "Optional layout/spacing classes (restricted)." }
    ],
    a11y: ["Ensure headings convey structure when used as sections."],
    dos: ["Use cards to group related content."],
    donts: ["Don’t nest too many cards (visual noise)."],
    examples: [
      {
        title: "Basic card",
        code: `import { Card, CardHeader, CardContent } from "@org/ui/card";

export function Example() {
  return (
    <Card>
      <CardHeader>Policy details</CardHeader>
      <CardContent>...</CardContent>
    </Card>
  );
}
`
      }
    ]
  }
];
