export interface Token {
  id: string,
  symbol: string,
  name: string,
  platforms: {
    [key: string]: string,
  },
}

export interface ReturnToken {
  [key: string]: number,
}

export interface UserBalance {
  ERC20: ReturnToken[],
  ETH: number,
}
