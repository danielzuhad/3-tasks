import { dataTopProducts } from "./constants";

type ItemType = (typeof dataTopProducts)[number];

export const getClassName = (item: ItemType) => {
  if (item.name === "Product A") {
    return "bg-[#CDE7FF] h-1.5";
  } else if (item.name === "Product B") {
    return "bg-[#8CFAC7] h-1.5";
  } else if (item.name === "Product C") {
    return "bg-[#C5A8FF] h-1.5";
  } else if (item.name === "Product D") {
    return "bg-[#FFD5A4] h-1.5";
  } else {
    return "h-1.5";
  }
};

export const getColor = (item: ItemType) => {
  if (item.name === "Product A") {
    return "bg-[#0095FF]";
  } else if (item.name === "Product B") {
    return "bg-[#00E096]";
  } else if (item.name === "Product C") {
    return "bg-[#884DFF]";
  } else {
    return "bg-[#FF8F0D]";
  }
};

export const badgeStyle = (item: ItemType) => {
  if (item.name === "Product A") {
    return "bg-[#CDE7FF] border-[#0095FF] text-[#0095FF]";
  } else if (item.name === "Product B") {
    return "bg-[#8CFAC7] border-[#00E096] text-[#00E096]";
  } else if (item.name === "Product C") {
    return "bg-[#C5A8FF] border-[#884DFF] text-[#884DFF]";
  } else if (item.name === "Product D") {
    return "bg-[#FFD5A4] border-[#FF8F0D] text-[#FF8F0D]";
  } else {
    return "";
  }
};
