export const isValidEthereumAddress = (address: string) => {
  if (!/^(0x)?[0-9a-fA-F]{40}$/.test(address)) {
    // Check if the address has the correct format

    return false;
  } else if (/^(0x)?[0-9a-fA-F]{40}$/.test(address) ||
    /^(0x)?[0-9A-Fa-f]{40}$/.test(address)) {
    // Check if the address consists of hexadecimal digits

    return true;
  } else {
    return false;
  }
};
