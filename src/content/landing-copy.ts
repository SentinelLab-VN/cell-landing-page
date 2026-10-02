/**
 * Every word and sample value on the landing page, in one place.
 * Copy comes from the existing page, the product brief and the @cellprotocol_ threads.
 * Nothing here is invented: no numbers, logos or claims beyond what the product does on testnet.
 */
import { Building2, Landmark, Lock, Scale, ScrollText, Server, ShieldCheck, Users, type LucideIcon } from "lucide-react";

/** Truncated Stellar addresses used as sample data across the page (same ones as the app). */
export const ADDR = { a: "GDZQ…9MRT", b: "GBXK…7QZM", c: "GAMZ…DPLE" } as const;

export const hero = {
  pill: "Testnet",
  title: "Private payment channels on Stellar",
  lede: "A channel where your users pay each other without those payments ever reaching the public ledger. The money stays in an escrow on Stellar.",
  talk: "Talk to us",
  open: "Open the app",
};

/** Transfers that stream inside the hero channel visual. Rendered twice for a seamless loop. */
export const streamRows: { from: string; to: string; amount: string }[] = [
  { from: ADDR.a, to: ADDR.b, amount: "120.00 USDC" },
  { from: ADDR.b, to: ADDR.c, amount: "45.00 USDC" },
  { from: ADDR.c, to: ADDR.a, amount: "300.00 USDC" },
  { from: ADDR.a, to: ADDR.c, amount: "250.00 USDC" },
  { from: ADDR.b, to: ADDR.a, amount: "210.00 USDC" },
  { from: ADDR.c, to: ADDR.b, amount: "80.00 USDC" },
  { from: ADDR.a, to: ADDR.b, amount: "1,000.00 USDC" },
  { from: ADDR.b, to: ADDR.c, amount: "60.00 USDC" },
];

export const whyPrivate = {
  eyebrow: "Privacy for on-chain finance",
  title: "Does every payment need to be public?",
  body: "A transaction history reveals who you pay, how much, and how often. Cell keeps transfers between your users private, while the funds stay secured on Stellar.",
  publicCard: {
    eyebrow: "Visible to anyone",
    rows: [
      ["A → B", "120 USDC"],
      ["A → D", "300 USDC"],
      ["C → F", "1,000 USDC"],
      ["B → E", "210 USDC"],
    ] as [string, string][],
    footer: "Who pays whom, how much, how often. Forever.",
  },
  cellCard: {
    eyebrow: "With Cell · on Stellar",
    deposit: ["Deposit → escrow", "500.00 USDC"] as [string, string],
    release: ["Escrow → wallet", "500.00 USDC"] as [string, string],
    footer: "No Stellar transaction per transfer.",
  },
};

export const howItWorks = {
  eyebrow: "How it works",
  title: "Deposits and withdrawals are on chain. Everything in between is in your ledger.",
  /** `line` mirrors what the diagram shows at that step: the same 250.00 USDC moving through. */
  steps: [
    { title: "Deposit", body: "Send an asset to the operator's escrow.", line: `${ADDR.a} → Escrow  250.00 USDC`, tag: "on chain", tone: "success" as const },
    { title: "Credit", body: "The same amount appears in your channel balance.", line: `${ADDR.a}  channel balance  250.00 USDC`, tag: "off chain", tone: "accent" as const },
    { title: "Pay", body: "Send to other users in the channel. Instant, off chain.", line: `${ADDR.a} → ${ADDR.b}  250.00 USDC`, tag: "off chain", tone: "accent" as const },
    { title: "Withdraw", body: "The operator approves and the escrow pays the address you chose.", line: `Escrow → ${ADDR.b}  250.00 USDC`, tag: "approved", tone: "info" as const },
  ],
};

/** Where a capability lives: 1 = Stellar on chain, 2 = the operator's ledger, 3 = the operator's servers. */
export type Zone = 1 | 2 | 3;
export const zoneName: Record<Zone, string> = { 1: "On chain", 2: "Your ledger", 3: "Your servers" };

export interface Capability {
  icon: LucideIcon;
  title: string;
  body: string;
  zones: Zone[];
}

export const capabilities: Capability[] = [
  { icon: Lock, title: "Escrow custody", body: "One Soroban contract per operator holds the assets. The admin key never leaves your wallet.", zones: [1] },
  { icon: Scale, title: "Per-asset controls", body: "A cap on any single payout, and separate gates for deposits and withdrawals, set on chain.", zones: [1] },
  { icon: Users, title: "Membership and KYC", body: "Open, approval or invite only. Block an address, record a KYC status, keep a reason.", zones: [2] },
  { icon: ShieldCheck, title: "Approval queue", body: "Every withdrawal is reviewed before the escrow pays it. The destination is in the user's signature.", zones: [2, 1] },
  { icon: ScrollText, title: "Continuous reconciliation", body: "Books are checked against the chain per asset. A mismatch halts payouts until someone looks.", zones: [1, 2] },
  { icon: Server, title: "Hosted or self-hosted", body: "One image. Run it with us, or on your own servers with your own keys and database.", zones: [3] },
];

export const capabilityZones: { zone: Zone; label: string; value: string }[] = [
  { zone: 1, label: "Stellar · on chain", value: "Escrow · Soroban" },
  { zone: 2, label: "Your ledger · off chain", value: "Balances · signatures" },
  { zone: 3, label: "Your servers", value: "One image" },
];

export const proofPoints: { title: string; body: string; checks?: string[] }[] = [
  {
    title: "Nobody sees your users pay each other",
    body: "Transfers inside the channel never reach the public ledger. Outsiders cannot tell who paid whom, how much, or how often.",
  },
  {
    title: "Only the edges are public",
    body: "A deposit into the escrow and a withdrawal out of it are ordinary Stellar transactions. That is all the chain records.",
  },
  {
    title: "Private, and verifiable on chain",
    body: "Your ledger is reconciled against the escrow continuously, and every balance movement carries the user's signature.",
    checks: ["Every transfer is signed by the user", "Never more than funds held", "Unique nonce per withdrawal"],
  },
];

export interface UseCase {
  icon: LucideIcon;
  title: string;
  body: string;
  line: string;
  tag: string;
  tone: "accent" | "success" | "info";
}

export const useCases: UseCase[] = [
  { icon: Landmark, title: "Neobank balances", body: "Customer accounts backed one to one by assets in escrow, with instant transfers between them.", line: `${ADDR.a} → ${ADDR.b}  250.00 USDC`, tag: "off chain", tone: "accent" },
  { icon: Building2, title: "Marketplace payouts", body: "Hold seller balances off chain, pay out on Stellar when they ask, after your review.", line: `Release → ${ADDR.c}  1,180.00 USDC`, tag: "approved", tone: "success" },
  { icon: Users, title: "Payroll and B2B", body: "Invite-only channels where every member is known and every payment is signed.", line: `${ADDR.b} → ${ADDR.a}  250.00 USDC`, tag: "signed", tone: "info" },
];

export const finalCta = {
  title: "Run a channel on testnet",
  body: "Deploy an escrow in a few minutes.",
};

export const nav = [
  { href: "#how", label: "How it works" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#uses", label: "Use cases" },
];
