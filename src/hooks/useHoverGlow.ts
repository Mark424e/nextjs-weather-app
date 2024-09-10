import { useEffect } from "react";

export const useHoverGlow = () => {
  useEffect(() => {
    const cards = document.getElementsByClassName("hoverGlow");

    if (cards.length > 0) {
      Array.from(cards).forEach((card) => {
        const cardElement = card as HTMLElement;
    
        cardElement.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = cardElement.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
    
          const angle = Math.atan2(-x, y);
          cardElement.style.setProperty("--rotation", `${angle}rad`);
        });
      });
    }
  });
};
