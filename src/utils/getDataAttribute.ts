export type TargetProps = EventTarget & HTMLElement

const getDataAttribute = (target: TargetProps, attribute: string): boolean => {
  const boolean = ["true", "false"]

  const data = target.dataset[attribute];

  if (typeof data === "string") {
    const isBoolean = boolean.includes(data);
    return isBoolean ? JSON.parse(data) : data
  }

  return false;
}

export default getDataAttribute;