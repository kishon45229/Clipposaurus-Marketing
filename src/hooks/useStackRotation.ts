"use client";

import React from "react";
import { StackItem } from "@/components/home/what-can-share/StackItemCard";

export const STACK_CARD_HEIGHT = 320;
export const STACK_OFFSET = 14;
const SCALE_STEP = 0.02;
const HOVER_LIFT = 8;

export const useStackRotation = (stackItems: StackItem[] | undefined) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [lockAnimated, setLockAnimated] = React.useState<boolean[]>([]);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Initialize lockAnimated array when stackItems change
  React.useEffect(() => {
    if (stackItems) {
      setLockAnimated(new Array(stackItems.length).fill(false));
    }
  }, [stackItems]);

  // Auto-rotation effect
  React.useEffect(() => {
    if (!stackItems || stackItems.length === 0) {
      return;
    }

    if (isPaused || hoveredIndex !== null) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stackItems.length);
    }, 3000); // Rotate every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, hoveredIndex, stackItems]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const triggerLockAnimation = (index: number) => {
    setLockAnimated((prev) => {
      const newArr = [...prev];
      if (!newArr[index]) {
        newArr[index] = true;
        setTimeout(() => {
          setLockAnimated((prev) => {
            const newArr2 = [...prev];
            newArr2[index] = false;
            return newArr2;
          });
        }, 600);
      }
      return newArr;
    });
  };

  const getTransform = (
    index: number,
    isActive: boolean,
    isHovered: boolean
  ) => {
    if (isActive) {
      return "translateY(0px) scale(1) translateZ(0)";
    }
    if (isHovered) {
      return `translateY(${index * -STACK_OFFSET - HOVER_LIFT}px) scale(${
        1 - index * SCALE_STEP + SCALE_STEP
      })`;
    }
    return `translateY(${index * -STACK_OFFSET}px) scale(${
      1 - index * SCALE_STEP
    })`;
  };

  const getZIndex = (index: number, isActive: boolean, isHovered: boolean) => {
    if (isActive) return 100;
    if (isHovered) return 50;
    return 10 - index;
  };

  const getOpacity = (index: number, isActive: boolean) => {
    if (isActive) return 1;
    return 1 - index * 0.1;
  };

  return {
    hoveredIndex,
    setHoveredIndex,
    activeIndex,
    setActiveIndex,
    isPaused,
    setIsPaused,
    handleMouseEnter,
    handleMouseLeave,
    lockAnimated,
    triggerLockAnimation,
    getTransform,
    getZIndex,
    getOpacity,
  };
};
