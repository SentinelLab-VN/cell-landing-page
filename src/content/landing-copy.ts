/**
 * Every word and sample value on the landing page, in one place.
 * Channel copy comes from the earlier page, the product brief and the @cellprotocol_ threads.
 * Seal copy comes from the Cell Seal TDD (docs.cellprivate.com/seal) and the cell-seal-mvp testnet report.
 * Nothing here is invented: no numbers, logos or claims beyond what the products do on testnet.
 */
import type { LedgerTone } from "@/components/primitives";

/** Truncated Stellar addresses used as sample data across the page (same ones as the apps). */
export const ADDR = { a: "GDZQ…9MRT", b: "GBXK…7QZM", c: "GAMZ…DPLE" } as const;
/** Sample investors for the Seal visuals. MTF is the testnet demo fund (Meridian T-Bill Fund). */
export const SEAL_ADDR = { a: "GD4P…Q2NE", b: "GC7M…K4TA", fund: "Fund" } as const;

export const hero = {
  pill: "Testnet",
  title: "Private balances and transfers on Stellar",
  lede: "Two products, both on testnet: Cell Channel for payment operators and Cell Seal for tokenized funds.",
  talk: "Talk to us",
};

export interface ProductCard {
  id: "channel" | "seal";
  name: string;
  tagline: string;
  body: string;
  link: string;
}

export const products: ProductCard[] = [
  {
    id: "channel",
    name: "Cell Channel",
    tagline: "Payment channels",
    body: "Transfers between your users stay off chain. Deposits and withdrawals go through an escrow on Stellar.",
    link: "How it works",
  },
  {
    id: "seal",
    name: "Cell Seal",
    tagline: "Settlement for tokenized funds",
    body: "Fund shares move on Stellar with amounts hidden. The issuer, transfer agent and regulator can decrypt them.",
    link: "How it works",
  },
];

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

/** Sealed legs shown in the hero Seal visual. `amount` is only shown with the viewing key. */
export const sealRows: { from: string; to: string; amount: string; kind: string }[] = [
  { from: SEAL_ADDR.fund, to: SEAL_ADDR.a, amount: "250.00 MTF", kind: "Subscription" },
  { from: SEAL_ADDR.b, to: SEAL_ADDR.fund, amount: "100.00 MTF", kind: "Redemption" },
  { from: SEAL_ADDR.a, to: SEAL_ADDR.b, amount: "40.00 MTF", kind: "Transfer" },
];
export const sealWindowNet = "+150.00 MTF";

/** What the public ledger records, on plain Stellar and with each product. */
export type Visibility = "public" | "hidden" | "sealed";
export interface CompareRow {
  field: string;
  stellar: string;
  channel: [Visibility, string];
  seal: [Visibility, string];
}

export const compare = {
  title: "What is public",
  body: "What anyone can read on Stellar, with and without Cell.",
  rows: [
    { field: "Who paid whom", stellar: "Public", channel: ["hidden", "Off chain"], seal: ["public", "Public"] },
    { field: "Amount of a transfer", stellar: "Public", channel: ["hidden", "Off chain"], seal: ["sealed", "Sealed"] },
    { field: "Account balance", stellar: "Public", channel: ["hidden", "Your ledger"], seal: ["sealed", "Sealed"] },
    { field: "Money in and out", stellar: "Public", channel: ["public", "Deposit and withdrawal"], seal: ["public", "Net per settlement window"] },
    { field: "Full view", stellar: "Anyone", channel: ["hidden", "The operator"], seal: ["sealed", "Issuer, TA, regulator"] },
  ] satisfies CompareRow[],
};

/* ───────────────────────────── Cell Channel ───────────────────────────── */

export const channelIntro = {
  name: "Cell Channel",
  title: "Private payment channels",
  lede: "You run the channel. Your users hold balances in it and pay each other there, and those transfers are recorded in your ledger instead of on Stellar. The funds stay in an escrow contract you control.",
  checks: ["Transfers are signed by the user", "Balances never exceed escrowed funds", "One-time nonce per withdrawal"],
};

export interface Step {
  title: string;
  body: string;
  line: string;
  tag: string;
  tone: LedgerTone;
}

export const channelSteps = {
  title: "How a payment moves",
  /** `line` mirrors what the diagram shows at that step: the same 250.00 USDC moving through. */
  steps: [
    { title: "Deposit", body: "The user sends an asset to the operator's escrow.", line: `${ADDR.a} → Escrow  250.00 USDC`, tag: "on chain", tone: "success" },
    { title: "Credit", body: "The same amount is credited to their channel balance.", line: `${ADDR.a}  channel balance  250.00 USDC`, tag: "off chain", tone: "accent" },
    { title: "Pay", body: "They pay another member. The transfer is recorded off chain.", line: `${ADDR.a} → ${ADDR.b}  250.00 USDC`, tag: "off chain", tone: "accent" },
    { title: "Withdraw", body: "The operator approves, and the escrow pays the address the user signed.", line: `Escrow → ${ADDR.b}  250.00 USDC`, tag: "approved", tone: "info" },
  ] satisfies Step[],
};

/** Where a capability lives: 1 = Stellar on chain, 2 = the operator's ledger, 3 = the operator's servers. */
export type Zone = 1 | 2 | 3;
export const zoneName: Record<Zone, string> = { 1: "On chain", 2: "Your ledger", 3: "Your servers" };

export interface Capability {
  title: string;
  body: string;
  zones: Zone[];
}

export const capabilities: Capability[] = [
  { title: "Escrow", body: "One Soroban contract per operator. The admin key stays in your wallet.", zones: [1] },
  { title: "Per-asset limits", body: "Payout caps and separate deposit and withdrawal switches, set on chain.", zones: [1] },
  { title: "Membership and KYC", body: "Open, approval-only or invite-only. Block addresses and record KYC status.", zones: [2] },
  { title: "Withdrawal approval", body: "You review each withdrawal before the escrow pays it.", zones: [2, 1] },
  { title: "Reconciliation", body: "Your ledger is checked against the escrow per asset. Payouts stop on a mismatch.", zones: [1, 2] },
  { title: "Hosting", body: "One image, hosted by us or run on your own servers.", zones: [3] },
];

/** A title and one line of body: a use case, a capability or a property. */
export interface Feature {
  title: string;
  body: string;
}

export const useCases: Feature[] = [
  { title: "Neobank accounts", body: "Customer balances backed 1:1 by escrowed assets." },
  { title: "Marketplace payouts", body: "Seller balances held off chain, paid out on Stellar after review." },
  { title: "Payroll and B2B", body: "Invite-only channels with known members." },
];

/* ─────────────────────────────── Cell Seal ─────────────────────────────── */

export const sealIntro = {
  name: "Cell Seal",
  title: "Confidential settlement for tokenized funds",
  lede: "Subscriptions, redemptions and transfers of fund shares settle on Stellar with amounts and balances hidden. Holder addresses stay public. Cell Seal is a set of Soroban contracts and an SDK for tokenization platforms.",
  problem: {
    title: "Why it matters",
    body: "On Stellar today, a $50M redemption from a tokenized fund shows up on the ledger within seconds, with the wallet and the amount. Other traders can sell ahead of the fund, and other holders may follow.",
  },
};

export const sealSteps = {
  title: "How an order settles",
  steps: [
    { title: "Wrap", body: "The fund's token is wrapped 1:1. Balances inside the wrapper are commitments. The issuer keeps mint and burn.", line: `MTF → Seal wrapper  1,000.00 MTF`, tag: "public", tone: "success" },
    { title: "Settle", body: "Each order is a transfer inside the wrapper, with a ZK proof that a Soroban contract checks.", line: `${SEAL_ADDR.b} → Fund  ••••• MTF`, tag: "sealed", tone: "accent" },
    { title: "Close the window", body: "At the end of each settlement window, the net of all orders is wrapped or unwrapped. That net is the only public amount.", line: `Window net  ${sealWindowNet}`, tag: "public", tone: "success" },
    { title: "Disclose", body: "Each transfer is also encrypted to a viewing key, to be split 2-of-3 between issuer, transfer agent and regulator.", line: `Viewing key  2-of-3  register rebuilt`, tag: "disclosed", tone: "info" },
  ] satisfies Step[],
};

export const sealProperties: Feature[] = [
  { title: "Hidden", body: "Amounts and balances, stored as commitments." },
  { title: "Public", body: "Holder addresses, timestamps, transaction types and the net of each window." },
  { title: "Readable by", body: "Issuer, transfer agent and regulator, with the viewing key. Cell holds no key share." },
];

/** Measured on Stellar testnet, protocol 29 (cell-seal-mvp/docs/testnet-demo.md). */
export const sealFacts = {
  title: "Testnet measurements",
  items: [
    { value: "~1 s", label: "to build a proof on a laptop" },
    { value: "0.10–0.17 XLM", label: "resource fee for one transaction with a proof" },
    { value: "~94M / 400M", label: "instructions to verify a sealed transfer on chain" },
    { value: "5 of 6", label: "product contracts deployed in the prototype" },
  ],
  note: "From a prototype the team funded itself, which ran one fund cycle with real proofs on 9 October 2026. Based on OpenZeppelin's Confidential Token and Nethermind's UltraHonk verifier.",
};

/* ──────────────────────────────── Closing ──────────────────────────────── */

export const finalCta = {
  title: "Contact",
  body: "contact@cellprivate.com",
};

export const nav = [
  { href: "#compare", label: "Compare" },
  { href: "#channel", label: "Channel" },
  { href: "#seal", label: "Seal" },
];
