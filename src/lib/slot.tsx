import React, { ReactElement, ReactNode, Ref } from "react";
import { cn } from "./utils";

type SlotProps = {
  children: ReactNode;
  className?: string;
  ref?: Ref<any>;
  [key: string]: any;
};

export function Slot({ children, ref, ...props }: SlotProps) {
  if (!React.isValidElement(children)) {
    // Render children as-is instead of returning null to avoid hydration blanks
    return <>{children}</>;
  }

  const childProps = (children as ReactElement<any>).props;
  const originalRef = (children as any).ref;

  // Merge classNames so neither Button's nor Link's class is lost
  const mergedClassName = cn(props.className, childProps.className);

  return React.cloneElement(children as ReactElement<any>, {
    ...props,
    ...childProps,
    className: mergedClassName,
    ref: (node: HTMLElement) => {
      // Forward outer ref
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }

      // Preserve child's original ref
      if (typeof originalRef === "function") {
        originalRef(node);
      } else if (originalRef && typeof originalRef === "object") {
        (originalRef as React.MutableRefObject<HTMLElement | null>).current =
          node;
      }
    },
  });
}
