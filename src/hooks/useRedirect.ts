"use client";

import React from "react";
import {
  DOCS_URL,
  GITHUB_REPO_URL,
  GITHUB_ISSUES_URL,
  GITHUB_SPONSOR_URL,
  CONTACT_EMAIL,
  APP_URL,
} from "@/lib/urls";
import { sendRateLimitRequest } from "@/services/rateLimitService";

interface RedirectsReturn {
  showRateLimitDialog: boolean;
  isCreateDropChecking: boolean;
  isOpenDropChecking: boolean;
  handleRateLimitDialogBoxOpenChange: (open: boolean) => void;

  handleRedictToCurrentPageHome: () => void;
  handleRedirectToDocs: () => void;
  handleRedirectToGitHub: () => void;
  handleRedirectToFAQ: () => void;
  handleRedirectToChangelog: () => void;
  handleRedirectToGitHubIssues: () => void;
  handleRedirectToTermsOfService: () => void;
  handleRedirectToPrivacyPolicy: () => void;
  handleContactUs: () => void;
  handleRedirectToGitHubSponsor: () => void;
  handleRedirectToGitHubDiscussions: () => void;
  handleRedirectToCreateDrop: () => void;
  handleRedirectToUnlockDrop: () => void;
  handleRedirectToDocsEncryptionAndDecryption: () => void;
  handleRedirectToDocsZeroKnowledgePolicy: () => void;
  handleRedirectToDocsHowItWorks: () => void;
  handleRedirectToDocsQuickstart: () => void;
  handleRedirectToAbousUs: () => void;
}

export function useRedirects(): RedirectsReturn {
  const [showRateLimitDialog, setShowRateLimitDialog] = React.useState(false);
  const [isCreateDropChecking, setIsCreateDropChecking] = React.useState(false);
  const [isOpenDropChecking, setIsOpenDropChecking] = React.useState(false);

  const handleRateLimitDialogBoxOpenChange = React.useCallback(
    (open: boolean) => {
      if (!open && !showRateLimitDialog) {
        setIsCreateDropChecking(false);
        setShowRateLimitDialog(false);
      }
    },
    [showRateLimitDialog],
  );

  // Home
  const handleRedictToCurrentPageHome = React.useCallback(() => {
    window.location.href = "/";
  }, []);

  // APP
  const handleRedirectToDocs = React.useCallback(() => {
    window.location.href = DOCS_URL!;
  }, []);

  // GITHUB
  const handleRedirectToGitHub = React.useCallback(() => {
    window.open(GITHUB_REPO_URL, "_blank", "noopener noreferrer");
  }, []);

  // GITHUB ISSUES
  const handleRedirectToGitHubIssues = React.useCallback(() => {
    window.open(GITHUB_ISSUES_URL, "_blank", "noopener noreferrer");
  }, []);

  // GITHUB SPONSOR
  const handleRedirectToGitHubSponsor = React.useCallback(() => {
    window.open(GITHUB_SPONSOR_URL, "_blank", "noopener noreferrer");
  }, []);

  // FAQ
  const handleRedirectToFAQ = React.useCallback(() => {
    window.location.href = "/faq";
  }, []);

  // CHANGELOG
  const handleRedirectToChangelog = React.useCallback(() => {
    window.location.href = DOCS_URL + "/changelog";
  }, []);

  // TERMS OF SERVICE
  const handleRedirectToTermsOfService = React.useCallback(() => {
    window.location.href = "/terms-of-service";
  }, []);

  const handleRedirectToPrivacyPolicy = React.useCallback(() => {
    window.location.href = "/privacy-policy";
  }, []);

  // CONTACT US
  const handleContactUs = React.useCallback(() => {
    window.location.href = `mailto:${CONTACT_EMAIL}`;
  }, []);

  const handleRedirectToAbousUs = React.useCallback(() => {
    window.location.href = "/about";
  }, []);

  // GITHUB DISCUSSIONS
  const handleRedirectToGitHubDiscussions = React.useCallback(() => {
    window.open(
      GITHUB_REPO_URL + "/discussions",
      "_blank",
      "noopener noreferrer",
    );
  }, []);

  // CREATE DROP
  const handleRedirectToCreateDrop = React.useCallback(async () => {
    setIsCreateDropChecking(true);
    const rateLimitResult = await sendRateLimitRequest();
    if (rateLimitResult.allowed) {
      window.location.href = APP_URL + "/create-drop";
      return;
    }
    setShowRateLimitDialog(true);
    setIsCreateDropChecking(false);
  }, []);

  // UNLOCK DROP
  const handleRedirectToUnlockDrop = React.useCallback(async () => {
    setIsOpenDropChecking(true);
    const rateLimitResult = await sendRateLimitRequest();
    if (rateLimitResult.allowed) {
      window.location.href = APP_URL + "/unlock-drop";
      return;
    }
    setShowRateLimitDialog(true);
    setIsOpenDropChecking(false);
  }, []);

  // DOCS - ENCRYPTION AND DECRYPTION
  const handleRedirectToDocsEncryptionAndDecryption = React.useCallback(() => {
    window.location.href = DOCS_URL + "/encryption-and-decryption";
  }, []);

  // DOCS - ZERO KNOWLEDGE POLICY
  const handleRedirectToDocsZeroKnowledgePolicy = React.useCallback(() => {
    window.location.href = DOCS_URL + "/zero-knowledge-architecture";
  }, []);

  // DOCS - HOW IT WORKS
  const handleRedirectToDocsHowItWorks = React.useCallback(() => {
    window.location.href = DOCS_URL + "/how-it-works";
  }, []);

  const handleRedirectToDocsQuickstart = React.useCallback(() => {
    window.location.href = DOCS_URL + "/quick-start";
  }, []);

  return {
    showRateLimitDialog,
    isCreateDropChecking,
    isOpenDropChecking,
    handleRateLimitDialogBoxOpenChange,

    handleRedictToCurrentPageHome,
    handleRedirectToDocs,
    handleRedirectToGitHub,
    handleRedirectToFAQ,
    handleRedirectToChangelog,
    handleRedirectToGitHubIssues,
    handleRedirectToTermsOfService,
    handleRedirectToPrivacyPolicy,
    handleContactUs,
    handleRedirectToGitHubSponsor,
    handleRedirectToGitHubDiscussions,
    handleRedirectToCreateDrop,
    handleRedirectToUnlockDrop,
    handleRedirectToDocsEncryptionAndDecryption,
    handleRedirectToDocsZeroKnowledgePolicy,
    handleRedirectToDocsHowItWorks,
    handleRedirectToDocsQuickstart,
    handleRedirectToAbousUs
  };
}
