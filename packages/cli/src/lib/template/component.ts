type Props = Record<string, string | string[]>;

function createComponentPropsTemplate(props: Props) {
  return Object.entries(props)
    .map(([key, value]) =>
      Array.isArray(value) ? `${key}=[${value.toString()}]` : `${key}="${value}"`,
    )
    .join(' ');
}

export function createComponentTemplate(
  name: string,
  {
    children,
    ...props
  }: Props & {
    children?: string;
  },
) {
  if (children === undefined) {
    return `<${name} ${createComponentPropsTemplate(props)} />`;
  }
  return `<${name} ${createComponentPropsTemplate(props)}>${children}</${name}>`;
}
