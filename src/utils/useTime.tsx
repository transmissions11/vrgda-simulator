import { useState, useEffect } from "react";

export function useTime() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    // Refresh tame based component every second.
    setTimeout(() => setTime(Date.now()), 1000);
  }, [time]);

  return time;
}
