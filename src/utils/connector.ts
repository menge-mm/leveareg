import { ConcordiumGRPCWebClient } from "@concordium/web-sdk";

export const getClient = (address: any, port: number) => {
  return new ConcordiumGRPCWebClient(address, port, {
    timeout: 10000,
  });
};
