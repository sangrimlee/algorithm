type Props = Record<string, string | string[]>;

function createComponentPropsTemplate(props: Props) {
  return Object.entries(props)
    .map(([key, value]) =>
      Array.isArray(value) ? `${key}=[${value.toString()}]` : `${key}="${value}"`,
    )
    .join(' ');
}

interface ComponentTemplateOptions {
  name: string;
  props?: Props;
  children?: string;
}

export function createComponentTemplate({ name, props = {}, children }: ComponentTemplateOptions) {
  if (!children) {
    return `<${name} ${createComponentPropsTemplate(props)} />`;
  }
  return `<${name} ${createComponentPropsTemplate(props)}>${children}</${name}>`;
}
