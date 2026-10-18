"use client";

import { AnimatePresence, motion, type Variants } from "motion/react";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { EASE_OUT } from "@/components/motion/easing";
import { cn } from "@/lib/utils";

export type DropdownOption = { value: string; label: string; count?: number };

type CategoryDropdownProps = {
  options: DropdownOption[];
  value: string;
  onChange?: (value: string) => void;
  label: string;
  className?: string;
};

const panel: Variants = {
  closed: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.18, ease: EASE_OUT } },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: EASE_OUT, staggerChildren: 0.03, delayChildren: 0.04 },
  },
};

const item: Variants = {
  closed: { opacity: 0, x: -6 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: EASE_OUT } },
};

/**
 * Erişilebilir açılır kategori menüsü (listbox deseni).
 * Klavye: ↑/↓ gezinme, Home/End, Enter/Boşluk seçim, Esc kapatma.
 */
export function CategoryDropdown({ options, value, onChange, label, className }: CategoryDropdownProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();
  const listId = `${id}-liste`;

  const selectedIndex = Math.max(
    0,
    options.findIndex((o) => o.value === value),
  );
  const selected = options[selectedIndex];

  // Dışarı tıklanınca kapat
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Açılınca odağı listeye taşı
  useEffect(() => {
    if (open) listRef.current?.focus();
  }, [open]);

  function openMenu() {
    setActiveIndex(selectedIndex);
    setOpen(true);
  }

  function close(returnFocus = true) {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }

  function choose(index: number) {
    const option = options[index];
    if (option && option.value !== value) onChange?.(option.value);
    close();
  }

  function onButtonKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openMenu();
    }
  }

  function onListKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    const last = options.length - 1;
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((i) => (i >= last ? 0 : i + 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((i) => (i <= 0 ? last : i - 1));
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(last);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        choose(activeIndex);
        break;
      case "Escape":
        event.preventDefault();
        close();
        break;
      case "Tab":
        close(false);
        break;
    }
  }

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <span id={`${id}-etiket`} className="sr-only">
        {label}
      </span>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={`${id}-etiket ${id}-deger`}
        onClick={() => (open ? close() : openMenu())}
        onKeyDown={onButtonKeyDown}
        className={cn(
          "group flex h-12 w-full items-center justify-between gap-4 rounded-sm border bg-white px-4 text-left shadow-soft transition-colors duration-300",
          open ? "border-primary" : "border-line hover:border-primary/40",
        )}
      >
        <span className="flex min-w-0 items-baseline gap-2">
          <span className="text-xs font-semibold tracking-[0.18em] text-accent-ink uppercase">Kategori</span>
          <span id={`${id}-deger`} className="truncate font-medium text-primary">
            {selected?.label}
          </span>
          {selected?.count !== undefined && (
            <span className="text-xs text-ink-muted tabular-nums">{selected.count}</span>
          )}
        </span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className="grid size-6 shrink-0 place-items-center text-primary"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            id={listId}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={`${id}-etiket`}
            aria-activedescendant={`${id}-secenek-${activeIndex}`}
            onKeyDown={onListKeyDown}
            variants={panel}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ transformOrigin: "top" }}
            className="absolute inset-x-0 top-full z-30 mt-2 max-h-80 overflow-y-auto rounded-sm border border-line bg-white p-1.5 shadow-lift focus:outline-none"
            data-lenis-prevent
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isActive = index === activeIndex;
              return (
                <motion.li
                  key={option.value}
                  id={`${id}-secenek-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  variants={item}
                  onClick={() => choose(index)}
                  onPointerMove={() => setActiveIndex(index)}
                  className="relative flex cursor-pointer items-center justify-between gap-4 rounded-sm px-3 py-2.5 text-[0.9375rem]"
                >
                  {isActive && (
                    <motion.span
                      layoutId={`${id}-vurgu`}
                      aria-hidden="true"
                      className="absolute inset-0 rounded-sm bg-surface"
                      transition={{ type: "spring", stiffness: 500, damping: 38 }}
                    />
                  )}
                  <span className="relative flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-px bg-accent transition-[width] duration-300 ease-out-expo",
                        isActive || isSelected ? "w-4" : "w-0",
                      )}
                    />
                    <span className={cn(isSelected ? "font-medium text-primary" : "text-ink")}>
                      {option.label}
                    </span>
                  </span>
                  <span className="relative flex items-center gap-3">
                    {option.count !== undefined && (
                      <span className="text-xs text-ink-muted tabular-nums">{option.count}</span>
                    )}
                    <Check
                      aria-hidden="true"
                      className={cn("size-4 text-accent-ink", isSelected ? "opacity-100" : "opacity-0")}
                    />
                  </span>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
