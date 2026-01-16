import { useState } from "react";
import { checkRateLimitAndRedirect } from "@/services/rateLimitService";

interface UseRateLimitReturn {
  showRateLimitDialog: boolean;
  setShowRateLimitDialog: (show: boolean) => void;
  rateLimitMessage: string;
  isChecking: boolean;
  handleCreateDropClick: (redirectFn: () => void) => Promise<void>;
  handleUnlockDropClick: (redirectFn: () => void) => Promise<void>;
}

export function useRateLimit(): UseRateLimitReturn {
  const [showRateLimitDialog, setShowRateLimitDialog] = useState(false);
  const [rateLimitMessage, setRateLimitMessage] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const handleCreateDropClick = async (redirectFn: () => void) => {
    setIsChecking(true);
    const result = await checkRateLimitAndRedirect(redirectFn);
    if (!result.allowed) {
      setRateLimitMessage(result.message);
      setShowRateLimitDialog(true);
    }
    setIsChecking(false);
  };

  const handleUnlockDropClick = async (redirectFn: () => void) => {
    setIsChecking(true);
    const result = await checkRateLimitAndRedirect(redirectFn);
    if (!result.allowed) {
      setRateLimitMessage(result.message);
      setShowRateLimitDialog(true);
    }
    setIsChecking(false);
  };

  return {
    showRateLimitDialog,
    setShowRateLimitDialog,
    rateLimitMessage,
    isChecking,
    handleCreateDropClick,
    handleUnlockDropClick,
  };
}
