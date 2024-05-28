import type { Protocols, Waku } from "@bpx-chain/synapse-interfaces";
import type { waku } from "@bpx-chain/synapse-sdk";
export type { CreateWakuNodeOptions } from "@bpx-chain/synapse-sdk";

export type HookState = {
  isLoading: boolean;
  error: undefined | string;
};

export type CreateNodeResult<T extends Waku> = HookState & {
  node: undefined | T;
};

export type BootstrapNodeOptions<T = {}> = {
  options?: T;
  protocols?: Protocols[];
};

export type ContentPair = {
  encoder: waku.Encoder;
  decoder: waku.Decoder;
};

export type ReactChildrenProps = {
  children?: React.ReactNode;
};
