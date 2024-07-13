# open-kyc

`open-kyc` is an NPM package designed to streamline the Know Your Customer (KYC) and Know Your Business (KYB) processes by automatically searching through various public databases. It helps in verifying the identity and legitimacy of individuals and businesses by leveraging open data sources.

## Features

- **Automated KYC/KYB Verification:** Automatically searches through multiple public databases to verify KYC/KYB information.
- **Supports Multiple Data Sources:** Includes integration with IRS Exempt Organizations, SEC EDGAR Database, State Business Registries, and more.
- **Customizable Search Parameters:** Easily configure the search criteria to suit your specific needs.
- **Easy Integration:** Simple and straightforward API for seamless integration into your existing applications.

## Installation

To install the `open-kyc` package, use npm:

```bash
npm install open-kyc
```

## Usage

Below is an example of how to use the open-kyc package to verify a company's information using its EIN:

```typescript
import OpenKYC from 'open-kyc';

// Example Legal Name for verification
const name = 'Irishman Cloud, Inc.';
const region = 'delaware-usa';

// Verify company by Name
const company = openKyc.findRegistrationByRegion(name, region)
```

## Supported Databases

### IRS Exempt Organizations

### SEC EDGAR Database

### State Business Registries

### Interpol Red Notices

## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](https://github.com/College-Canine/open-kyc/blob/main/contributing.md) file for guidelines on how to get started.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or issues, please open an issue on GitHub.
